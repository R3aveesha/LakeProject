const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const argon2 = require("argon2");

const StaffMemberSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    role: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    salary: { type: Number, required: true },
    leaves: [
      {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        reason: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

/**
 * Hash password before saving the StaffMember
 * @param {Object} next - The next function in the middleware chain
 */
StaffMemberSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await argon2.hash(this.password);
    next();
  } catch (err) {
    next(err);
  }
});

/**
 * Compare password for login
 * @param {String} password - The password to compare with the stored hash
 * @returns {Promise<Boolean>} A promise that resolves with a boolean indicating if the password matches
 */
StaffMemberSchema.methods.verifyPassword = async function (password) {
  return argon2.verify(this.password, password);
};

module.exports = mongoose.model("StaffMember", StaffMemberSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    availableTimes: [{ type: Date }],
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    artists: [{ type: String }],
    description: { type: String },
    ratings: [
      {
        customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
        score: { type: Number, required: true },
        feedback: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", GameSchema);

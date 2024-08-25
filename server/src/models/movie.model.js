const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    availableTimes: [{ type: Date }],
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    artists: [{ type: String }],
    description: { type: String,required: true },
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

module.exports = mongoose.model("Movie",MovieSchema);

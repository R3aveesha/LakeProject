const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    message: { type: String, required: true },
    rating: { type: Number, default: 0 },
    reply: { type: String, default: null },
},{
    timestamps: true,
})

module.exports = mongoose.model("Feedback", FeedbackSchema);
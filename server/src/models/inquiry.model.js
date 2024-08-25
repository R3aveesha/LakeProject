const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InquirySchema = new Schema({
    userName: {type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true},

    email: {type: String,
    required: true},

    contactNumber: {type: Number, default: 0},

    inquiryCategory: {type: String, enum: ["Food", "Games", "Movies"], required: true},

    inquiryMessage: {type: String, required: true},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Inquiry', InquirySchema);

const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: String,
    rating: Number,
    date: Date
});

module.exports = mongoose.model('Feedback', FeedbackSchema);

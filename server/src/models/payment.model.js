

const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    participant: { type: mongoose.Schema.Types.ObjectId, ref: 'Participant' },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    amount: Number,
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    date: Date
});

module.exports = mongoose.model('Payment', PaymentSchema);

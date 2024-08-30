// models/Event.js

const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    poster: String,
    start_date: Date,
    end_time: Date,
    category: String,
    capacity: Number,
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Participant' }],
    location: String,
    status: { type: String, enum: ['active', 'cancelled', 'ongoing'], default: 'active' },
    payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }]
});

module.exports = mongoose.model('Event', EventSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    availableTimes: [{ type: Date }],
    ratings: [{
        customerId: { type: Schema.Types.ObjectId, ref: 'Customer' },
        score: { type: Number },
        feedback: { type: String }
    }],
    createdAt: { type: Date, default: Date.now },
    images: { type: [String], default: [] }
});

module.exports = mongoose.model('Game', GameSchema);

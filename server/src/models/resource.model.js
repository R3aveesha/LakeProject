const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({

    resourceId: { type: String, required: true },
    resourceName: { type: String, required: true },
    resourcType: { type: String, required: true,enum:['indoor', 'outdoor'] },
    availableQuantity: { type: Number, required: true },
    createAt:{type: Date, default: Date.now}

});

const Resource =mongoose.model('Resource',resourceSchema);

module.exports=Resource;
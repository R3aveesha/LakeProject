const mongoose = require('mongoose')
const Schema =mongoose.Schema;

const maintenanceSchema=new Schema({
    
    taskId: {
        type: String,
        required: true
      },
      taskName: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'], // Example statuses, you can adjust as necessary
        required: true
      },
      assignedTo: {
        type: String, // You might replace this with a reference to a User model if necessary
        required: true
      },
      scheduledDate: {
        type: Date,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
})

module.exports=mongoose.model('maintenance',maintenanceSchema)
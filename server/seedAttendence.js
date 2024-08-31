const mongoose = require('mongoose');
const Attendance = require('./src/models/attendence.model'); // Adjust the path as needed
const StaffMember = require('./src/models/staffMember.model'); // Adjust the path as needed

mongoose.connect('mongodb+srv://root:root@r3cluster.ikcec.mongodb.net/?retryWrites=true&w=majority&appName=R3Cluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedAttendance() {
  try {
    const customers = await StaffMember.find().limit(10); // Assuming you have at least 10 customers

    if (customers.length < 10) {
      console.log('Not enough customers to seed attendance.');
      return;
    }

    const attendances = customers.map((customer, index) => ({
      userId: customer._id,
      start: new Date(2024, 8, 1, 9, 0, 0), // Same start time for simplicity
      end: new Date(2024, 8, 1, 17, 0, 0),  // Same end time for simplicity
      ot: index % 2 === 0 ? 2 : 0, // Alternate between 2 hours OT and 0 OT
    }));

    await Attendance.insertMany(attendances);
    console.log('Attendance records seeded successfully');
  } catch (err) {
    console.error('Error seeding attendance:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedAttendance();

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller.js');

router.post('/create', bookingController.createBooking);
router.put('/update/:id', bookingController.updateBooking);
router.delete('/delete/:id', bookingController.deleteBooking);
router.post('/cancel/:id', bookingController.cancelBooking);
router.get('/search', bookingController.searchBookingHistory);
router.post('/notifyUnavailable', bookingController.notifyUnavailableBookings);
router.post('/generateReport', bookingController.generateReports);


module.exports = router;

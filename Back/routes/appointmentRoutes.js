const express = require('express');
const { bookAppointment, getUserAppointments } = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware'); // Middleware to protect routes
const router = express.Router();

router.post('/book', protect, bookAppointment);
router.get('/', protect, getUserAppointments);

module.exports = router;
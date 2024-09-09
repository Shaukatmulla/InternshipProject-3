const express = require('express');
const { getDoctorAppointments, updateAppointmentStatus } = require('../controllers/doctorController');
const { protect, isDoctor } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/appointments', protect, isDoctor, getDoctorAppointments);
router.put('/appointments', protect, isDoctor, updateAppointmentStatus);

module.exports = router;
const Appointment = require('../models/Appointment');

const getDoctorAppointments = async (req, res) => {
    const appointments = await Appointment.find({ doctor: req.user.name }).populate('userId','name'); // Assuming doctor name is used as identifier
    res.json(appointments);
};

const updateAppointmentStatus = async (req, res) => {
    const { appointmentId, status } = req.body;

    try {
        const appointment = await Appointment.findById(appointmentId);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        // Check if the doctor is allowed to update this appointment
        if (appointment.doctor !== req.user.name) {
            return res.status(403).json({ message: 'You are not authorized to update this appointment' });
        }

        appointment.status = status; // Update the status
        await appointment.save(); // Save the updated appointment

        res.json({ message: 'Appointment status updated', appointment });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { getDoctorAppointments, updateAppointmentStatus };
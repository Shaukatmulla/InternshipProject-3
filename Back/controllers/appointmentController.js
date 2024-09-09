const Appointment = require('../models/Appointment');

const bookAppointment = async (req, res) => {
    const { doctor, date, time } = req.body;
    const appointment = new Appointment({ userId: req.user.id, doctor, date, time,status: 'pending', });
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked successfully',appointment });
};

const getUserAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ userId: req.user.id }).populate('userId', 'name');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { bookAppointment, getUserAppointments };
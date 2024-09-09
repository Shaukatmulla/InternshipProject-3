import React, { useState } from 'react';
import { bookAppointment } from '../api';
import { useNavigate } from 'react-router-dom';

const BookAppointment = ({ token }) => {
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await bookAppointment({ doctor, date, time }, token);
            alert('Appointment booked successfully');
            navigate('/dashboard');
        } catch (error) {
            console.error('Failed to book appointment', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book Appointment</h2>
            <input type="text" value={doctor} onChange={(e) => setDoctor(e.target.value)} placeholder="Doctor's Name" required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default BookAppointment;
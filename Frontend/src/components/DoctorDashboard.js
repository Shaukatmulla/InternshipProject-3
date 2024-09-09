import React, { useEffect, useState } from 'react';
import { getDoctorAppointments, updateAppointmentStatus } from '../api';
import './d_dash.css';
const DoctorDashboard = ({ token }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await getDoctorAppointments(token);
                console.log(response.data);
                setAppointments(response.data);
            } catch (error) {
                console.error('Failed to fetch appointments', error);
            }
        };
        fetchAppointments();
    }, [token]);

    const handleStatusUpdate = async (appointmentId, newStatus) => {
        try {
            await updateAppointmentStatus({ appointmentId, status: newStatus }, token);
            // Update the appointments state with the new status
            setAppointments((prevAppointments) =>
                prevAppointments.map((appointment) =>
                    appointment._id === appointmentId ? { ...appointment, status: newStatus } : appointment
                )
            );
        } catch (error) {
            console.error('Failed to update appointment status', error);
        }
    };

    return (
        <div>
            <h2>Appointments</h2>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment._id}>
                        {appointment.userId.name} - {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                        <span>Status: {appointment.status}</span>
                        {appointment.status === 'pending' && (
                            <div>
                                <button onClick={() => handleStatusUpdate(appointment._id, 'accepted')}>Accept</button>
                                <button onClick={() => handleStatusUpdate(appointment._id, 'rejected')}>Reject</button>
                            </div>
                        )}
                        {appointment.status === 'accepted' && (
                            <button onClick={() => handleStatusUpdate(appointment._id, 'rejected')}>Reject</button>
                        )}
                        {appointment.status === 'rejected' && (
                            <button onClick={() => handleStatusUpdate(appointment._id, 'accepted')}>Accept</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
        
export default DoctorDashboard;
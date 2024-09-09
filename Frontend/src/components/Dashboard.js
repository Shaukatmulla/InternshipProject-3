import React, { useEffect, useState } from 'react';
import { getUserAppointments } from '../api';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file

const Dashboard = ({ token }) => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    const fetchAppointments = async () => {
        try {
            const response = await getUserAppointments(token);
            setAppointments(response.data);
        } catch (error) {
            console.error('Failed to fetch appointments', error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, [token]);

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1 className="welcome-message">Patient Dashboard</h1>
                
            </div>
            <div className="appointments-section">
                <h2>Your Appointments</h2>
                {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                        <div className="appointment-card" key={appointment._id}>
                            <h4>{appointment.doctor}</h4>
                            <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
                            <p>Time: {appointment.time}</p>
                            <p>Status: <span>{appointment.status}</span></p>
                        </div>
                    ))
                ) : (
                    <p>No appointments found.</p>
                )}
                <div className="button-container">
                    <button className="button" onClick={() => navigate('/book-appointment')}>Book Appointment</button>
                    <button className="button" onClick={fetchAppointments}>Refresh Appointments</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
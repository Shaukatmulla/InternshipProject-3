import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import DoctorDashboard from './components/DoctorDashboard';
import BookAppointment from './components/BookAppointment';
import AdminLogin from './components/AdminLogin';
import AdminRegistration from './components/AdminRegistration';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login setToken={setToken} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard token={token} />} />
                    <Route path="/book-appointment" element={<BookAppointment token={token} />} />
                    <Route path="/doctor-dashboard" element={<DoctorDashboard token={token} />} />
                    <Route path="/admin-login" element={<AdminLogin setToken={setToken} />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard token={token} />} />
                    <Route path="/admin-registration" element={<AdminRegistration />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
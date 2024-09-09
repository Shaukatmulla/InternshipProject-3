// src/components/AdminRegistration.js
import React, { useState } from 'react';
import { registerAdmin } from '../api'; // Adjust the import based on your file structure

const AdminRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin'); // Default role
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        try {
            const response = await registerAdmin({ name, email, password, role }); // Ensure role is valid
            setSuccess('Admin registered successfully!');
        } catch (error) {
            console.error('Error registering user:', error);
            setError('Registration failed. Please check your details.');
        }
    };

    return (
        <div className="registration-container">
            <h2>Admin Registration</h2>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default AdminRegistration;
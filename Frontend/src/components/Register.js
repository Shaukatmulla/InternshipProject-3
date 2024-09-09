import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ name, email, password, role });
            alert('User registered successfully');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <label>
                <input
                    type="radio"
                    name="role"
                    value="patient"
                    checked={role === 'patient'}
                    onChange={(e) => setRole(e.target.value)}
                />
                Patient
            </label>
            <label>
                <input
                    type="radio"
                    name="role"
                    value="doctor"
                    checked={role === 'doctor'}
                    onChange={(e) => setRole(e.target.value)}
                />
                Doctor
            </label>
            <button type="submit">Register</button>
            
                
                <p></p>
                <a href={`${window.location.origin}/`}>Login</a>
            
        </form>
    );
};

export default Register;
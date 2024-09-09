import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import './Login.css';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password });
            setToken(response.data.token);
            if (response.data.user.role === 'doctor') {
                navigate('/doctor-dashboard');
            } else {
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
            
                
                <p></p>
                <a href={`${window.location.origin}/register`}>Register</a>
            
            
        </form>
        
    );
};

export default Login;
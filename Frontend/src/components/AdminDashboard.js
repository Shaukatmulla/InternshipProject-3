import React, { useEffect, useState } from 'react';
 // Adjust based on your file structure
import './AdminDashboard.css'; // Create this CSS file for styling

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const fetchUsers = async () => {
        
    };

    useEffect(() => {
        fetchUsers(); // Fetch users when the component mounts
    }, []);
    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            {error && <div className="error-message">{error}</div>}
            
       
        <section>
                <h3>Add Doctor or Patient </h3>
                <p></p>
                <a href={`${window.location.origin}/register`}>Register</a>
            </section>
            <section>
                <h3>Add Other Admin</h3>
                <p></p>
                <a href={`${window.location.origin}/admin-registration`}>Admin</a>
            </section>
        </div>
        
    );
};

export default AdminDashboard;
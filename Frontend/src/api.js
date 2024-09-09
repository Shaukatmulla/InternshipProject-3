import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const registerUser = (userData) => api.post('/users/register', userData);
export const loginUser = (userData) => api.post('/users/login', userData);
export const bookAppointment = (appointmentData, token) => api.post('/appointments/book', appointmentData, {
    headers: { Authorization: `Bearer ${token}` },
});
export const getUserAppointments = (token) => api.get('/appointments', {
    headers: { Authorization: `Bearer ${token}` },
});
export const getDoctorAppointments = (token) => api.get('/doctors/appointments', {
    headers: { Authorization: `Bearer ${token}` },
});
export const updateAppointmentStatus = (data, token) => api.put('/doctors/appointments', data, {
    headers: { Authorization: `Bearer ${token}` },
});

export const getUsers = async () => {
    const token = localStorage.getItem('token'); // Get the token from local storage or state
    return await api.get('/users', {
        headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
        },});
    };
export const getAppointments = (token) => api.get('/appointments', {
    headers: { Authorization: `Bearer ${token}` },
});
export const registerAdmin = async ({ name, email, password, role }) => {
    return await api.post('/users/register', { name, email, password, role });
};

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // 👈 Connects frontend to backend
});

export default api;


import axios from 'axios';

const instance = axios.create({
  baseURL: "https://nexus-backend-o213.onrender.com"
,  
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false                 
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    
    config.headers.Authorization = `Bearer ${token}`;
  
  }
  return config;
}, (error) => Promise.reject(error));

export default instance;

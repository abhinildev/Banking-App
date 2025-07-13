// src/Api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',   // no trailing slash needed
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false                  // only true if you’re using cookies
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // ✅ attach real token
    config.headers.Authorization = `Bearer ${token}`;
    // or: config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
}, (error) => Promise.reject(error));

export default instance;

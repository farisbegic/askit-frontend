import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
})

API.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default API;
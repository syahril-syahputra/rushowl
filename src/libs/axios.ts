import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
    },
});

export default api;

import axios from 'axios';
const BASE_URL = 'https://hello-world-h2mq.onrender.com/api/v1';

// OLD URL:


export default axios.create({
    baseURL: BASE_URL
});
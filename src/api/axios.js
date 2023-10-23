import axios from 'axios';
const BASE_URL = 'https://site1.digital-ummah.com/api/v1';

// OLD URL:
export default axios.create({
    baseURL: BASE_URL
});
import axios from "axios";

const BASE_URL = 'https://computer-point-service-production.up.railway.app';

export const createApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
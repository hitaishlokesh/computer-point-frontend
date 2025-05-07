import axios from 'axios';

const BASE_URL = 'https://computer-point-service-production.up.railway.app';

export interface SignupData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const signup = async (userData: SignupData) => {
    try {
        const response = await api.post('/auth/signup', userData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'An error occurred during signup');
        }
        throw new Error('An unexpected error occurred');
    }
};

// Example usage in a React component:
/*
import { signup, SignupData } from '../services/AuthService';

const SignupComponent = () => {
    const handleSignup = async (userData: SignupData) => {
        try {
            const response = await signup(userData);
            // Handle successful signup
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    return (
        // Your signup form JSX
    );
};
*/

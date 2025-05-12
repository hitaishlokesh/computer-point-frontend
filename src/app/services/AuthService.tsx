import { createApi } from '../constants/AuthConstants';

export interface SignupData {
    username: string;
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export const signup = async (userData: SignupData) => {
    try {
        const response = await createApi.post('api/auth/register', userData);
        return response.data;
    } catch (error) {
        if (error instanceof Error && 'response' in error) {
            const axiosError = error as { response?: { data?: { message?: string } } };
            throw new Error(axiosError.response?.data?.message || 'An error occurred during signup');
        }
        throw new Error('An unexpected error occurred');
    }
};

export const login = async (userData: LoginData) => {
    try {
        const response = await createApi.post('api/auth/login', userData);
        return response.data;
    } catch (error) {
        if (error instanceof Error && 'response' in error) {
            const axiosError = error as { response?: { data?: { message?: string } } };
            throw new Error(axiosError.response?.data?.message || 'Invalid email or password');
        }
        throw new Error('An unexpected error occurred');
    }
};

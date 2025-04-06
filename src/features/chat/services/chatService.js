import axios from 'axios';

const API_URL = 'http://localhost:8000';

const chatApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    // Remove withCredentials since we're not using cookies
    withCredentials: false
});

// Add response interceptor for better error handling
chatApi.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 500) {
            console.error('Server error:', error.response.data.detail);
        }
        return Promise.reject(error);
    }
);

export const generateResponse = async (question) => {
    try {
        const { data } = await chatApi.post('/generate', { question });

        // The server returns the generation directly
        return {
            answer: data,  // Server returns the generation text directly
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error('Error generating response:', error);
        throw new Error(error.response?.data?.detail || 'Failed to generate response');
    }
};
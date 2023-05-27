import api from './api';

const authService = {
    register: async (registerRequest) => {
        const response = await api.post('/auth/register', registerRequest);
        return response.data;
    },

    login: async (authenticationRequest) => {
        const response = await api.post('/auth/login', authenticationRequest);
        return response.data;
    },

    refreshToken: async () => {
        const response = await api.post('/auth/refresh-token');
        return response.data;
    },

    logout: async () => {
        await api.post('/auth/logout');
    },
};

export default authService;
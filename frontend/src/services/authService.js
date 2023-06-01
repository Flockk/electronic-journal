import api from "./api";

export const login = async (loginData) => {
    try {
        const response = await api.post('/auth/login', loginData);
        const {role, accessToken, refreshToken} = response.data;

        localStorage.setItem('role', role);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const register = async (registerData) => {
    try {
        const response = await api.post('/auth/register', registerData);
        const {role, accessToken, refreshToken} = response.data;

        localStorage.setItem('role', role);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('role');
};
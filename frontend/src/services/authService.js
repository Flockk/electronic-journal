import api from "./api";

const getAccessToken = () => {
    return localStorage.getItem("accessToken");
};

export const createAuthHeaders = () => {
    const accessToken = getAccessToken();
    if (accessToken) {
        return {
            Authorization: `Bearer ${accessToken}`,
        };
    }
    return {};
};

export const login = async (loginData) => {
    try {
        const response = await api.post('/auth/login', loginData);
        const {role, access_token, refresh_token} = response.data;

        localStorage.setItem('role', role);
        localStorage.setItem('accessToken', access_token);
        localStorage.setItem('refreshToken', refresh_token);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const register = async (registerData) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.post('/auth/register', registerData, {headers});
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
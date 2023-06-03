import api from "./api";
import {createAuthHeaders} from "./authService";

export const getAllUsers = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get('/admin/users', {headers});

        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error(error.response.data.error);
    }
};

export const getUserById = async (id) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/admin/users/${id}`, {headers});
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteUser = async (id) => {
    try {
        const headers = createAuthHeaders();
        await api.delete(`admin/users/${id}`, {headers});
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

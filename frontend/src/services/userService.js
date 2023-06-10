import api from "./api";
import {createAuthHeaders} from "./authService";

export const getAllUsers = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get('/users', {headers});

        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error(error.response.data.error);
    }
};

export const getAllUsersSortedAscending = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get('/users/ascending', {headers});

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const getAllUsersSortedDescending = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get('/users/descending', {headers});

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const searchUsers = async (query) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/users/search?query=${query}`, {headers});

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const getUserById = async (id) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/users/${id}`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getCurrentUser = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get("/users/me", {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteUser = async (id) => {
    try {
        const headers = createAuthHeaders();
        await api.delete(`/users/${id}`, {headers});
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

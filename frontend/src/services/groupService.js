import api from "./api";
import {createAuthHeaders} from "./authService";

export const getAllGroups = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get('/groups', {headers});

        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error(error.response.data.error);
    }
};

export const getGroupById = async (id) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/groups/${id}`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createGroup = async (groupData) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.post('/groups', groupData, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteGroup = async (id) => {
    try {
        const headers = createAuthHeaders();
        await api.delete(`/groups/${id}`, {headers});
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

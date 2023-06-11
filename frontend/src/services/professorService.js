import api from "./api";
import {createAuthHeaders} from "./authService";

export const getAllProfessors = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get('/professors', {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getProfessorById = async (id) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/professors/${id}`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getCurrentProfessor = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get("/professors/me", {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getGroupsByProfessorId = async (professorId) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/professors/${professorId}/groups`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getHomeworksByProfessorId = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get("/professors/me/homeworks", { headers });

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createProfessor = async (professorData) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.post('/professors', professorData, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteProfessor = async (id) => {
    try {
        const headers = createAuthHeaders();
        await api.delete(`/professors/${id}`, {headers});
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

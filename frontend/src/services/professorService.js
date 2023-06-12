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

        const {position, phoneNumber, user} = response.data;
        const {lastname, firstname, patronymic, login} = user;

        return {
            lastname,
            firstname,
            patronymic,
            login,
            position,
            phoneNumber,
            ...response.data,
        };
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
        const response = await api.get("/professors/me/homeworks", {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createProfessor = async (user) => {
    try {
        const professorData = {
            user_id: user.user_id,
            position: null,
            phone_number: null
        };

        const headers = createAuthHeaders();
        const response = await api.post('/professors', professorData, { headers });

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

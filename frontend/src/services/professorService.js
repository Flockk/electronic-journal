import api from './api';

export const getAllProfessors = async () => {
    try {
        const response = await api.get('/api/v1/professors');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getProfessorById = async (id) => {
    try {
        const response = await api.get(`/api/v1/professors/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createProfessor = async (professorData) => {
    try {
        const response = await api.post('/api/v1/professors', professorData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteProfessor = async (id) => {
    try {
        await api.delete(`/api/v1/professors/${id}`);
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

import api from './api';

export const getAllDirectors = async () => {
    try {
        const response = await api.get('/divisions/directors');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getDirectorById = async (id) => {
    try {
        const response = await api.get(`/divisions/directors/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createDirector = async (directorData) => {
    try {
        const response = await api.post('/divisions/directors', directorData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteDirector = async (id) => {
    try {
        await api.delete(`/divisions/directors/${id}`);
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

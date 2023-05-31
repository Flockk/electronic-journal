import api from './api';

export const getAllDivisions = async () => {
    try {
        const response = await api.get('/divisions');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getDivisionById = async (id) => {
    try {
        const response = await api.get(`/divisions/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createDivision = async (divisionData) => {
    try {
        const response = await api.post('/divisions', divisionData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteDivision = async (id) => {
    try {
        await api.delete(`/divisions/${id}`);
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

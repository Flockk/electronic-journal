import api from "./api";
import {createAuthHeaders} from "./authService";

export const getAllDisciplines = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get('/disciplines', {headers});

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const getDisciplinesByProfessor = async (professorId) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/disciplines/professors/${professorId}`, {headers});

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const getStudentDisciplines = async (studentId) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/disciplines/students/${studentId}`, {headers});

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const getDisciplineById = async (id) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/disciplines/${id}`, {headers});

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const createDiscipline = async (discipline) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.post('/disciplines', discipline, {headers});

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const deleteDiscipline = async (id) => {
    try {
        const headers = createAuthHeaders();
        await api.delete(`/disciplines/${id}`, {headers});
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

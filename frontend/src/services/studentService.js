import api from "./api";
import {createAuthHeaders} from "./authService";

export const getAllStudents = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get('/students', {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getStudentById = async (id) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/students/${id}`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getCurrentStudent = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/students/me`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getCurrentStudentGroup = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/students/me/group`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createStudent = async (studentData) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.post('/students', studentData, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteStudent = async (id) => {
    try {
        const headers = createAuthHeaders();
        await api.delete(`/students/${id}`, {headers});
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

import api from "./api";
import {createAuthHeaders} from "./authService";

export const getAllGrades = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get('/grades', {headers});

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
};

export const getGradeById = async (id) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/grades/${id}`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getGradesByGroupDisciplineAndProfessor = async (groupId, disciplineId, professorId) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/grades/${groupId}/${disciplineId}/${professorId}`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createGrade = async (gradeData) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.post('/grades', gradeData, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteGrade = async (id) => {
    try {
        const headers = createAuthHeaders();
        await api.delete(`/grades/${id}`, {headers});
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};
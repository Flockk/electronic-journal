import api from "./api";
import {createAuthHeaders} from "./authService";

export const getAllHomeworks = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get("/homeworks", {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getHomeworkById = async (id) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/homeworks/${id}`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getHomeworksByGroupDisciplineProfessor = async (groupId, disciplineId, professorId) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/homeworks/groups/${groupId}/${disciplineId}/${professorId}`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getHomeworksByDisciplineStudentGroup = async (disciplineId, groupId, studentId) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/homeworks/${disciplineId}/${groupId}/${studentId}`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createHomework = async (homework) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.post("/homeworks", homework, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const updateHomework = async (id, updatedHomework) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.put(`/homeworks/${id}`, updatedHomework, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteHomework = async (id) => {
    try {
        const headers = createAuthHeaders();
        await api.delete(`/homeworks/${id}`, {headers});
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

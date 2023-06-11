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
        const response = await api.get(`/homeworks/${groupId}/${disciplineId}/${professorId}`, {headers});

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

export const deleteHomework = async (id) => {
    try {
        const headers = createAuthHeaders();
        await api.delete(`/homeworks/${id}`, {headers});
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

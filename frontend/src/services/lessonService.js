import api from "./api";
import {createAuthHeaders} from "./authService";

export const getAllLessons = async () => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get("/lessons", {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const getLessonById = async (id) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.get(`/lessons/${id}`, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createLesson = async (lesson) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.post("/lessons", lesson, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const updateLesson = async (id, updatedLesson) => {
    try {
        const headers = createAuthHeaders();
        const response = await api.put(`/lessons/${id}`, updatedLesson, {headers});

        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const deleteLesson = async (id) => {
    try {
        const headers = createAuthHeaders();
        await api.delete(`/lessons/${id}`, {headers});
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

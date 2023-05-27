import api from './api';

const divisionService = {
    getDivisions: async () => {
        const response = await api.get('/divisions');
        return response.data;
    },

    getDivisionById: async (id) => {
        const response = await api.get(`/divisions/${id}`);
        return response.data;
    },
};

export default divisionService;
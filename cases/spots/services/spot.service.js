import { api } from "@/lib/axios";
const ENDPOINT = '/spots';
export const SpotService = {
    async listAll() {
        const result = await api.get(ENDPOINT);
        return result.data;
    },
    async findOne(id) {
        const result = await api.get(`${ENDPOINT}/${id}`);
        return result.data;
    }
    // http://localhost:3000/spots
};

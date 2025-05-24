import axios from 'axios';
import { getAuthHeader } from '../Agence/authService';

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/logements`;
const API_ByCommercial = `${import.meta.env.VITE_API_BASE_URL}/api/logements/my-logements`;
export const getLogements = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching employees:", error);
        throw error;
    }
}; 

export const getLogementsByCommercialToken = async () => {
    try {
        const response = await axios.get(API_ByCommercial, {
            headers: getAuthHeader()
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching logements by user ID:", error);
        throw error;
    }
};
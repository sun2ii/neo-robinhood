// src/services/polygonService.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TIINGO_API_KEY;
const BASE_URL = 'https://api.tiingo.com';

export const fetchStockData = async (symbol) => {
    try {
        const response = await axios.get(`${BASE_URL}/tiingo/daily/${symbol}/prices`, {
            params: {
                token: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching stock data', error);
        throw error;
    }
};

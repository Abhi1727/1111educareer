import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Assuming your Django backend runs on port 8000

export const getHomeData = () => {
  return axios.get(`${API_URL}/home-data/`);
};

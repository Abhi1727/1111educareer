import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getHomeData = () => {
  return axios.get(`${API_URL}/home-data/`);
};

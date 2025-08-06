import axios from 'axios';

const API_URL = '/api';

export const getHomeData = () => {
  return axios.get(`${API_URL}/home-data/`);
};

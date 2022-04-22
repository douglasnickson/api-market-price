import axios from 'axios';

const api = axios.create({
  baseURL: 'https://alpha.financeapi.net',
});

export default api;

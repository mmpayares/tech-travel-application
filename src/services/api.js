import axios from 'axios';

const api = axios.create({
  baseURL: 'https://628e7f2aa339dfef87af0583.mockapi.io/',
});

export default api;

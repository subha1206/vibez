import axios from 'axios';

const sendApiRequest = axios.create({
  baseURL: '/api/v1/',
});

export default sendApiRequest;

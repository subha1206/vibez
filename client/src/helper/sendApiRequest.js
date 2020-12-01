import axios from 'axios';

const token = localStorage.getItem('jwt');

axios.defaults.baseURL = 'https://server-vibez.herokuapp.com/api/v1/';
if (token) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
}

export default axios.create();

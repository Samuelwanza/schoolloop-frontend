import axios from 'axios';

axios.defaults.withCredentials = true;
const BASE_URL = 'http://localhost:4000/';

const getRequest = async (url) => axios.get(BASE_URL + url).then((res) => res.data);
const postRequest = async (url, data) => axios.post(BASE_URL + url, data).then((res) => res.data);
const updateRequest = async (url, data) => axios.put(BASE_URL + url, data).then((res) => res.data);
const loginUser = async (url, data) => axios.post(BASE_URL + url, data).then((res) => res.data);

export {
  getRequest,
  postRequest,
  loginUser,
  updateRequest,
};

import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

// const BASE_URL
const axiosInstanse = axios.create({
  baseURL: baseURL,
});

// 요청 인터셉터
axiosInstanse.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstanse;

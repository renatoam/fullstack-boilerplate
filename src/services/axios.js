import axios from 'axios';

const defaultAxios = axios.create({
  baseURL: 'https://jsm-challenges.s3.amazonaws.com',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
})

defaultAxios.interceptors.request.use(
  function (config) {
    // outras configurações padrão, como de autenticação, aqui
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

defaultAxios.interceptors.response.use(
  function (response) {
    // outras configurações aqui
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default defaultAxios;

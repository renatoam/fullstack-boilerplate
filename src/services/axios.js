import axios from 'axios';

function initAxiosInstance(env) {
  const defaultAxios = axios.create({
    baseURL: env === 'backend' ? 'https://jsm-challenges.s3.amazonaws.com' : 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  })

  defaultAxios.interceptors.request.use(
    function (config) {
      // configurações de autenticação e checagem de ambiente (front ou back) aqui
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  defaultAxios.interceptors.response.use(
    function (response) {
      // configurações de notificações baseadas no status code aqui
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  return defaultAxios
}

export default initAxiosInstance;

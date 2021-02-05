import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsm-challenges.s3.amazonaws.com'
});

instance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;

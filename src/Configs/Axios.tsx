import axios from 'axios';
import {BASE_URL} from '~Constants/index';
import * as StorageAccess from '~Utils/index';

// const baseURL = 'http://localhost:3000/api';
const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    MobileApp: true,
  },
});

const publicAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    MobileApp: true,
  },
});

authAxios.interceptors.request.use(
  config => {
    if (!config?.headers?.Authorization) {
      const token = StorageAccess.AuthToken.getToken();
      if (token && config.headers) {
        config.headers.token = `${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

publicAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export {authAxios, publicAxios};

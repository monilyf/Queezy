import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';

export const METHODS = {
    GET: 'get',
    DELETE: 'delete',
    HEAD: 'head',
    OPTIONS: 'options',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch'
};
const axiosConfig = {
    baseURL: BASE_URL
};
function createAxiosInstance() {
    return axios.create(axiosConfig);
}
const request = createAxiosInstance();
const cache = {};

const client = ({ method = METHODS.POST, url = BASE_URL, data, useCache = false, invalidateQuery = false, ...rest }) =>
    useCache && !invalidateQuery && cache[url]
        ? Promise.resolve(cache[url])
        : request({
              method,
              url,
              data,
              //   paramsSerializer,
              ...rest
          });

export const clientWithHeaders = ({ method = METHODS.POST, url = BASE_URL, data, useCache = false, invalidateQuery = false, ...rest }) =>
    request({
        method,
        url,
        data,
        // paramsSerializer,
        ...rest
    }).then((res) => {
        return res;
    });

request.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        console.log('err: ', err);
        const originalRequest = err.config;
        const status = err.response?.status;
        const response = err.response?.data;
        if (status === 503) {
            const error = {
                originalRequest,
                status,
                message: 'This service is unavailable right now, please try again later'
            };
            throw error;
        }
        if (status === 500) {
            const error = {
                originalRequest,
                status,
                message: response?.message ? response.message : 'An unexpected error occurred, please try again later'
            };
            throw error;
        }
        if (status === 404) {
            const error = {
                originalRequest,
                status,
                message: response?.message ? response.message : 'The requested content does not exist, please try again later'
            };
            throw error;
        }
        if (status === 401) {
            AsyncStorage.clear();
            window.history.go('/');
        }

        const message = response ? response?.message : err.message;

        const error = { originalRequest, message, status };
        throw error;
    }
);

// if (AsyncStorage.getItem('persist:root')) {
//     const userLocal = JSON.parse(AsyncStorage.getItem('persist:root')).auth;
//     if (userLocal) {
//         const userData = JSON.parse(userLocal).user;
//         request.defaults.headers.Authorization = `Bearer ${userData?.token}`;
//         if (userData?.client) {
//             request.defaults.headers.client_id = userData?.client.id;
//         }
//     }
// }
export function setHeaderToken(token) {
    if (token) request.defaults.headers.Authorization = `Bearer ${token}`;
    else delete request.defaults.headers.Authorization;
}

export function setHeader(key, value) {
    request.defaults.headers[key] = value;
}

export default client;
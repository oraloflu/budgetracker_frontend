import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getUserFromLocalStorage } from './localStorage';
import { clearStore } from '../features/user/userSlice';

const customFetch: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5001/api/v1'
});

customFetch.interceptors.request.use(
    (config): InternalAxiosRequestConfig<any> => {
        const user = getUserFromLocalStorage();
        if (user) {
            config.headers.common['Authorization'] = `Bearer ${user.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const checkForUnauthorizedResponse = (
    error: any,
    thunkAPI: any
): any => {
    if (error.response.status === 401) {
        thunkAPI.dispatch(clearStore);
        return thunkAPI.rejectWithValue('Unauthorized! Logging out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;

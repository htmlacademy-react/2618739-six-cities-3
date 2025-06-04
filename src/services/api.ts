import type { AxiosInstance } from 'axios';
import axious from 'axios';
import { getToken } from './token';

const enum Default {
    BaseUrl = 'https://15.design.htmlacademy.pro/six-cities',
    Timeout = 5000,
}

export const createAPI = (): AxiosInstance => {
    const api = axious.create({
        baseURL: Default.BaseUrl as string,
        timeout: Default.Timeout as number,
    });
    api.interceptors.request.use((config) => {
        const token = getToken();
        if (token && config.headers) {
            config.heades["X-Token"] = token;
        }
        return config;
    })
    return api;
}
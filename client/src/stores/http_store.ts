import { create } from 'zustand';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_URL } from '../lib/globals';
import JWTToken from '~lib/token';

// const API_BASE_URL_DEV = 'http://127.0.0.1:8000/api'
const API_BASE_URL_DEV = API_URL;

axios.create().interceptors.request.use(
  async (config) => {
    // const token = localStorage.getItem('token');
    const token = JWTToken.getToken();
    if (token && config.headers) {
      config.headers['Authorization'] = 'Bearer' + token;
      console.log(token.slice(0, 6));
    }
    return config;
  },
  (error) => {
    console.error(error);
    Promise.reject(error);
  }
);

export type KeyValue = Record<string, string | number | boolean | unknown>;
export interface IHttpData {
  url: string;
  data: KeyValue;
}

interface IHttpStore {
  client: AxiosInstance;
  setToken: (payload: string) => void;
  removeToken: () => void;
  get: (url: string) => Promise<void | AxiosResponse<any, any>>;
  post: (params: IHttpData) => Promise<void | AxiosResponse<any, any>>;
  put: (params: IHttpData) => Promise<void | AxiosResponse<any, any>>;
  delete: (params: IHttpData) => Promise<void | AxiosResponse<any, any>>;
}

const vanillaHttpStore = create<IHttpStore>((set, store_get) => ({
  client: axios.create({
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }),
  setToken: (payload) =>
    set((state) => ({
      client: axios.create({
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${payload}`,
        },
      }),
    })),
  removeToken: () =>
    set((state) => ({
      client: axios.create({
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }),
    })),

  get: async (url) => {
    try {
      const response = await store_get().client.get(url);
      return response;
    } catch (err: any) {
      console.error(err, url);
      if (err.response.status === 401) {
        return Promise.resolve();
      }
      return Promise.resolve();
    }
  },

  post: async (params: IHttpData) => {
    try {
      const response: AxiosResponse = await store_get().client.post(params.url, params.data);
      console.log(response.status);
      return response;
    } catch (err: any) {
      console.error(err, params);
      if (err.response.status === 401) {
        return Promise.resolve();
      }
      return Promise.resolve();
    }
  },

  put: async (params: IHttpData) => {
    try {
      const response = await store_get().client.put(params.url, params.data);
      if (response.status === 401) {
        console.log('access token incorrect');
      }
      return response;
    } catch (err) {
      console.error(err, params);
      throw err;
    }
  },

  delete: async (params: IHttpData) => {
    try {
      const response = await store_get().client.delete(params.url, params.data);
      if (response.status === 401) {
        console.log('access token incorrect');
      }
      return response;
    } catch (err) {
      console.error(err, params);
      throw err;
    }
  },
}));

const httpStore = vanillaHttpStore.getState();
// console.log(httpStore)

const {
  get,
  put,
  post,
  setToken,
  removeToken,
  delete: http_delete,
  client,
} = vanillaHttpStore.getState();

client.interceptors.request.use(
  async (config) => {
    // console.log('Intercepted')
    // const token = localStorage.getItem('token')
    const token = JWTToken.getToken();
    if (token && config.headers) {
      config.headers['Authorization'] = token;
      console.log(token.slice(0, 6));
    }
    return config;
  },
  (error) => {
    console.error(error);
    Promise.reject(error);
  }
);

const HttpClient = {
  get,
  put,
  post,
  delete: http_delete,
  setAuthorization: setToken,
  clearAuthorization: removeToken,
  base_url: API_BASE_URL_DEV,
};

export default HttpClient;

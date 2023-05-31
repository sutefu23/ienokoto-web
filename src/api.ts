import axios, { AxiosInstance, AxiosResponse } from 'axios';

const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000, // milliseconds
});

export default client
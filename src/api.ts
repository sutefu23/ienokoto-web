import axios, { AxiosInstance, AxiosResponse } from 'axios';

const client: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000, // milliseconds
});
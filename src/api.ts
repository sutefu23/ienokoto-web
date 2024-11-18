import axios from "axios";
import type { AxiosInstance } from "axios";
interface ImportMeta {
  env: Record<string, string | undefined>;
}

const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 5000, // milliseconds,
});

export default client;

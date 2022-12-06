import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 60000,
  withCredentials: true,
});

request.interceptors.request.use((req: AxiosRequestConfig) => {
  req.headers["Content-Type"] = "application/json;charset=utf-8";
  return req;
});

request.interceptors.response.use((res: AxiosResponse) => {
  return res;
});

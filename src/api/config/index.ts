import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const request = axios.create({
  baseURL: "http://localhost:5173",
  timeout: 8000,
  withCredentials: true,
});

request.interceptors.request.use((req: AxiosRequestConfig) => {
  return req;
});

// request.interceptors.response.use(
//   (res: AxiosResponse) => {
//     return res;
//   },
//   (err) => {
//     console.log(err);
//     return err.response;
//   }
// );

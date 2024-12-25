// import { getCookie } from "@/e_entities/tools";
import axios, { ParamsSerializerOptions } from "axios";

const paramsSerializer: ParamsSerializerOptions = {};

export const serverAxios = axios.create({
  /**sample 용 url */
  baseURL: `https://api.sampleapis.com`,
  paramsSerializer: paramsSerializer,
});

// serverAxios.interceptors.request.use(
//   (config) => {
//     config.headers[`Authorization`] = getCookie("aidtbook")?.user_id?.toString();

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

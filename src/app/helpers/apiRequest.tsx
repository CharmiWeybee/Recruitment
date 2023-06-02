import axios from "axios";
export const axiosInstance = axios.create({
  // baseURL: "http://192.168.1.21/api",
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

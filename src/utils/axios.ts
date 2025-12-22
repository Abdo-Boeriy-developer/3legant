import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstans = axios.create({
  baseURL: "https://3legent-backend.vercel.app/api/v1/",
});

axiosInstans.interceptors.request.use((config) => {
  const token = Cookies.get("authorization");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

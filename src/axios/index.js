import axios from "axios";
import store from "../store/store";
const baseURL = "https://api-regs.herokuapp.com/api/";

const axiosHttpClient = axios.create({
  baseURL: baseURL,
});

axiosHttpClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  return config;
});

export default axiosHttpClient;

import axios from "axios";

const imageInstance = axios.create({
  baseURL: `https://pixabay.com/api`,
});

imageInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

imageInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export { imageInstance };

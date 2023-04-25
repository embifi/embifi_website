import axios from "axios";
// export const baseURL = `https://prod.api.lms.embifi.in/api/v1`;
export const baseURL = `https://api.lms.embifi.in/api/v1`;

const API = axios.create({ baseURL, withCredentials: true });
API.interceptors.request.use(
  (config) => {
    config.headers["application"] = "EMBIFI-WEBSITE";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const login = (payload) => API.post(`/lms/user/login`, payload);
export const logout = () => API.post(`/lms/user/logout`);
export const verifyAuth = () => API.get(`/lms/user/verify-user`);
export const getUser = () => API.get(`/embifi-website/get-user`);

export const updatePersonalDetails = (payload) => API.put('/embifi-website/update-user',payload);
export const getAllBlogsOfUser = () => API.get('/embifi-website/get-blogs-user');
export const getAllBlogs = () => API.get('/embifi-website/get-blogs');

export const getDrafts = () => API.get('/embifi-website/draft');
export const updateBlog = (payload) => API.put('/embifi-website/update-blog',payload);
export const createBlog = (payload) => API.post('/embifi-website/create-blog',payload);
export const getAllUsersData = () => API.get('/embifi-website/users');



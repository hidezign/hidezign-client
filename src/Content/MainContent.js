import axios from 'axios';
import logo from '../assets/logo.svg'
import { store } from '../Redux/store';
import { Routers } from '../Routes/Routers';

export const MainContent = {
  AppName: "Hi Dezign",
  AppLogo: logo,
  Email: "hello@hidezign.com",
  DribbbleLink: "/#services",
  LinkedInLink: "https://www.linkedin.com/company/hidezignsolutions/",
  InstagramLink: "https://www.instagram.com/hidezign_solutions/",
  TwitterLink: "",
  BehanceLink: "",
  NavLinks: [
    { name: "Home", link: Routers.WEBSITE },
    { name: "Work", link: Routers.WORK },
    { name: "Services", link: Routers.SERVICES },
    { name: "About us", link: Routers.ABOUTUS },
    { name: "Blog", link: Routers.BLOG }
  ]
}

export const backendConfig = {
  // base: "http://localhost:3000/api/v1/",
  // origin: "http://localhost:3000/",
  // base: "https://hidezign-server.onrender.com/api",
  // origin: "https://hidezign-server.onrender.com",
  base: "https://api.hidezign.com/api/v1",
  origin: "https://api.hidezign.com",
};

export const Axios = axios.create({
  baseURL: backendConfig.base,
  withCredentials: true,
});

Axios.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state?.auth?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
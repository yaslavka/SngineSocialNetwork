import axios from 'axios';
import Raven from 'raven-js';
import { getAccessToken } from '../utils';
import { store } from '../index';
import * as actions from '../actions/auth.actions';
// import { io } from 'socket.io-client'

export const baseInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

baseInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Raven.captureException(error);
    return Promise.reject(error);
  }
);
baseInstance.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    Raven.captureException(error);
    if (error?.response?.status === 401) {
      const timer = localStorage.getItem('w');
      localStorage.clear();
      localStorage.setItem('w', timer);
      store.store.dispatch(actions.signOut());
    } else if (error?.response) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error?.message);
    }
  }
);

// export const socketUrl = io.connect(process.env.REACT_APP_SOCKET_BASE_URL)
export const avatarUrl = process.env.REACT_APP_BASE_AVATAR_URL;

export const getAvatarUrl = (filename) => {
  return `${process.env.REACT_APP_BASE_AVATAR_URL}/${filename}`;
};

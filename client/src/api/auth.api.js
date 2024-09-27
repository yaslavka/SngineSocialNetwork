import { baseInstance } from './index';

export const signIn = (credentials) => {
  return baseInstance.post('/token/login', credentials);
};
export const signUp = (credentials) => {
  return baseInstance.post('/registration', credentials);
};

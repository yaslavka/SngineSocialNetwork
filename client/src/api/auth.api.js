import { baseInstance } from './index'

export const signIn = (credentials) => {
  return baseInstance.post('/login', credentials)
}
export const signUp = (credentials) => {
  return baseInstance.post('/register', credentials)
}

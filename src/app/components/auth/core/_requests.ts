import axios from 'axios';
import { UserModel } from './_models';

// const API_URL = process.env.VITE_REACT_APP_API_URL_AUTH
const API_URL = 'http://192.168.1.11/api/Auth'


export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/Login`
export const REGISTER_URL = `${API_URL}/RegisterUser`
export const REQUEST_PASSWORD_URL = `${API_URL}/ForgotPassword`
export const RESER_PASSWORD = `${API_URL}/ResetPassword`
export const REGISTER_ADMIN = `${API_URL}/register-admin`

// Server should return AuthModel
export function login(values: Object) {
  return axios.post(LOGIN_URL, values)
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  role: any


) {
  return axios.post(REGISTER_URL, {
    email: email,
    firstName: firstname,
    lastName: lastname,
    password: password,
    role: role

  })
}

export function registerAdmin(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
) {
  return axios.post(REGISTER_ADMIN, {
    email: email,
    firstName: firstname,
    lastName: lastname,
    password: password,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, email, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function resetPassword(newPass: Object) {
  return axios.post(RESER_PASSWORD, newPass)
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}

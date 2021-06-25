import axiosInstance from './axiosInstance'

export const signup = userdata => axiosInstance.post(`/auth/signup`, userdata)

export const login = userdata => axiosInstance.post(`/auth/login`, userdata)

export const loadUser = () => axiosInstance.get(`/auth/user`)

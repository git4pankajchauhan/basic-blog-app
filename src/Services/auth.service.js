import { loginConfirmedAction, logout } from 'Store/actions/auth.action'
import axiosInstance from './axiosInstance'

export const signup = userdata => axiosInstance.post(`/user/signup`, userdata)

export const login = userdata => axiosInstance.post(`/user/login`, userdata)

export const saveTokenInLocalStorage = token => {
  token.expireDate = new Date(new Date().getTime() + token.expiresIn * 1000)
  localStorage.setItem('userToken', JSON.stringify(token))
}

export function runLogoutTimer(dispatch, timer, history) {
  setTimeout(() => {
    dispatch(logout(history))
  }, timer)
}

export function checkAutoLogin(dispatch, history) {
  const tokenDetailsString = localStorage.getItem('userToken')

  if (!tokenDetailsString) {
    dispatch(logout(history))
    return
  }

  let tokenDetails = JSON.parse(tokenDetailsString)
  let expireDate = new Date(tokenDetails.expireDate)
  let todaysDate = new Date()

  if (todaysDate > expireDate) {
    dispatch(logout(history))
    return
  }

  dispatch(loginConfirmedAction(tokenDetails))

  const timer = expireDate.getTime() - todaysDate.getTime()
  runLogoutTimer(dispatch, timer, history)
}

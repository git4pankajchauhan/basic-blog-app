import { saveTokenInLocalStorage, signup } from 'Services/auth.service'
import { SIGNUP_CONFIRMED_ACTION } from 'Store/constants/auth.constant'
import { errorMessage, successMessage } from './common.action'

export const signupAction = (userdata, history) => async dispatch => {
  try {
    const response = await signup(userdata)

    if (response.data.status) {
      dispatch(successMessage(response.data.message + ' redirecting in 5s'))
      setTimeout(() => {
        history.push('/login')
      }, 5000)
    } else {
      dispatch(errorMessage(response.data.message))
    }
  } catch (error) {
    console.log('signup action error:', error)
    dispatch(errorMessage('Oops! Something went wrong.'))
  }
}

export const confirmedSignupAction = payload => ({
  type: SIGNUP_CONFIRMED_ACTION,
  payload,
})

// export function signupFailedAction(message) {
//   return {
//     type: SIGNUP_FAILED_ACTION,
//     payload: message,
//   }
// }

// export function logout(history) {
//   localStorage.removeItem('userDetails')
//   history.push('/login')
//   return {
//     type: LOGOUT_ACTION,
//   }
// }

// export function loginAction(email, password, history) {
//   return dispatch => {
//     login(email, password)
//       .then(response => {
//         saveTokenInLocalStorage(response.data)
//         runLogoutTimer(dispatch, response.data.expiresIn * 1000, history)
//         dispatch(loginConfirmedAction(response.data))
//         history.push('/')
//       })
//       .catch(error => {
//         const errorMessage = formatError(error.response.data)
//         dispatch(loginFailedAction(errorMessage))
//       })
//   }
// }

// export function loginFailedAction(data) {
//   return {
//     type: LOGIN_FAILED_ACTION,
//     payload: data,
//   }
// }

// export function loginConfirmedAction(data) {
//   return {
//     type: LOGIN_CONFIRMED_ACTION,
//     payload: data,
//   }
// }

// export function loadingToggleAction(status) {
//   return {
//     type: LOADING_TOGGLE_ACTION,
//     payload: status,
//   }
// }

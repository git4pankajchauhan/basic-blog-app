import { login, runLogoutTimer, saveTokenInLocalStorage, signup } from 'Services/auth.service'
import { LOGIN_CONFIRMED_ACTION, LOGOUT_ACTION } from 'Store/constants/auth.constant'
import { errorMessage, successMessage, toggleLoader } from './common.action'

export const signupAction = (userdata, history) => async dispatch => {
  try {
    const response = await signup(userdata)

    if (response.data.status) {
      dispatch(successMessage(response.data.message))
      history.push('/login')
    } else {
      dispatch(errorMessage(response.data.message))
    }
  } catch (error) {
    console.log('signup action error:', error)
    dispatch(errorMessage('Oops! Something went wrong.'))
  }

  dispatch(toggleLoader(false))
}
export const loginAction = (userdata, history) => async dispatch => {
  try {
    const response = await login(userdata)
    console.log(response.data)
    if (response.data.status) {
      const { isAuth, token, user } = response.data

      saveTokenInLocalStorage({ isAuth, token, user })
      // runLogoutTimer(dispatch, response.data.expiresIn * 1000, history)
      // dispatch(loginConfirmedAction({ isAuth, token, user }))
      // history.push('/posts')
    } else {
      dispatch(errorMessage(response.data.message))
    }
  } catch (error) {
    console.log('login action error:', error)
    dispatch(errorMessage('Oops! Something went wrong.'))
  }

  dispatch(toggleLoader(false))
}

export function loginConfirmedAction(data) {
  return {
    type: LOGIN_CONFIRMED_ACTION,
    payload: data,
  }
}

export function logout(history) {
  localStorage.removeItem('userToken')
  history.push('/login')
  return {
    type: LOGOUT_ACTION,
  }
}

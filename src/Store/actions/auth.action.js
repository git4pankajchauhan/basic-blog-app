import { loadUser, login, signup } from 'Services/auth.service'
import { AUTH_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOADED } from 'Store/constants/auth.constant'
import { toggleLoader } from './common.action'
import { getMessage } from './message.action'

export const loadUserAction = () => async (dispatch, getState) => {
  try {
    const response = await loadUser()
    dispatch(loaderUserActionSuccess(response.data.user))
  } catch (e) {
    console.log('user load action error:', e)
    dispatch(authError())
  }
}

export const signupAction = (userdata, history) => async dispatch => {
  try {
    const response = await signup(userdata)
    dispatch(getMessage(response.data.message))

    history.push('/login')
  } catch (e) {
    console.log('signup action error:', e)
    dispatch(getMessage(e.response.data, e.response.status, 'REGISTER_FAIL'))
    dispatch(authError())
  }
  dispatch(toggleLoader(false))
}

export const loginAction = (userdata, history) => async dispatch => {
  try {
    const response = await login(userdata)

    dispatch(loginActionSuccess({ user: response.data.user, token: response.data.token }))
    history.push('/posts')
  } catch (e) {
    console.log('login action error:', e.response)
    // dispatch(getMessage(e.response.data, e.response.status, 'REGISTER_FAIL'))
    dispatch(authError())
  }
  dispatch(toggleLoader(false))
}

export const loginActionSuccess = userdata => ({
  type: LOGIN_SUCCESS,
  payload: userdata,
})

export const loaderUserActionSuccess = user => ({
  type: USER_LOADED,
  payload: user,
})

export const authError = () => ({
  type: AUTH_ERROR,
})

export const logoutAction = history => {
  history.push('/login')
  return {
    type: LOGOUT_SUCCESS,
  }
}

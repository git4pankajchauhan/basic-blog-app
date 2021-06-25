import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOADED } from 'Store/constants/auth.constant'

const initialState = {
  token: localStorage.getItem('jwtoken'),
  user: {
    _id: '',
    name: '',
    email: '',
  },
  isAuth: false,
}

export function AuthReducer(state = initialState, action) {
  if (action.type === USER_LOADED) {
    return {
      ...state,
      isAuth: true,
      user: action.payload,
    }
  }
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('jwtoken', action.payload.token)
    return {
      ...state,
      ...action.payload,
      isAuth: true,
    }
  }
  if (action.type === LOGIN_FAIL || action.type === LOGOUT_SUCCESS || action.type === AUTH_ERROR) {
    localStorage.removeItem('jwtoken')
    return {
      ...state,
      token: null,
      user: initialState.user,
      isAuth: false,
    }
  }

  return state
}

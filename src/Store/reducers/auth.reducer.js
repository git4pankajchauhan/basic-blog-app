import { LOGIN_CONFIRMED_ACTION, LOGOUT_ACTION } from 'Store/constants/auth.constant'

const initialState = {
  auth: {
    expiresIn: '',
    isAuth: false,
    token: '',
    user: {
      email: '',
      id: '',
      name: '',
    },
  },
}

export function AuthReducer(state = initialState, action) {
  if (action.type === LOGIN_CONFIRMED_ACTION) {
    return {
      ...state,
      auth: action.payload,
    }
  }

  if (action.type === LOGOUT_ACTION) {
    return {
      ...state,
      auth: initialState.auth,
    }
  }
  return state
}

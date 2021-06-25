import { CLEAR_ERRORS, GET_ERRORS } from 'Store/constants/common.constant'

const initialState = {
  message: {},
  status: null,
  id: null,
}

export const messageReducer = (state = initialState, actions) => {
  if (actions.type === GET_ERRORS) {
    return {
      ...state,
      isDrawerOpen: true,
    }
  }
  if (actions.type === CLEAR_ERRORS) {
    return {
      ...state,
      ...initialState,
    }
  }
  return state
}

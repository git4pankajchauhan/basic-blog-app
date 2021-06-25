import { TOGGLE_DRAWER, TOGGLE_LOADER } from 'Store/constants/common.constant'

const initialState = {
  isDrawerOpen: false,
  isLoader: false,
}

export const CommonReducer = (state = initialState, actions) => {
  if (actions.type === TOGGLE_LOADER) {
    return {
      ...state,
      isLoader: actions.payload,
    }
  }
  if (actions.type === TOGGLE_DRAWER) {
    return {
      ...state,
      isDrawerOpen: actions.payload,
    }
  }
  return state
}

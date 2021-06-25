import { CLOSE_DRAWER, OPEN_DRAWER, TOGGLE_LOADER } from 'Store/constants/common.constant'

const initialState = {
  drawer: {
    isOpen: false,
    id: null,
  },
  isLoader: false,
}

export const CommonReducer = (state = initialState, actions) => {
  if (actions.type === TOGGLE_LOADER) {
    return {
      ...state,
      isLoader: actions.payload,
    }
  }
  if (actions.type === OPEN_DRAWER) {
    return {
      ...state,
      drawer: {
        isOpen: true,
        id: actions.payload,
      },
    }
  }
  if (actions.type === CLOSE_DRAWER) {
    return {
      ...state,
      drawer: initialState.drawer,
    }
  }
  return state
}

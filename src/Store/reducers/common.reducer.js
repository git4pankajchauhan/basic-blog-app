import { CLOSE_DRAWER, ERROR_MESSAGE, OPEN_DRAWER, SUCCESS_MESSAGE, TOGGLE_LOADER, WARNING_MESSAGE } from 'Store/constants/common.constant'

const initialState = {
  isDrawerOpen: false,
  isSuccessMessage: '',
  isErrorMessage: '',
  isWarningMessage: '',
  isLoader: false,
}

export const CommonReducer = (state = initialState, actions) => {
  if (actions.type === OPEN_DRAWER) {
    return {
      ...state,
      isDrawerOpen: true,
    }
  }
  if (actions.type === CLOSE_DRAWER) {
    return {
      ...state,
      isDrawerOpen: false,
    }
  }
  if (actions.type === SUCCESS_MESSAGE) {
    return {
      ...state,
      isSuccessMessage: actions.payload,
      isErrorMessage: '',
    }
  }
  if (actions.type === ERROR_MESSAGE) {
    return {
      ...state,
      isErrorMessage: actions.payload,
      isSuccessMessage: '',
    }
  }
  if (actions.type === WARNING_MESSAGE) {
    return {
      ...state,
      isWarningMessage: actions.payload,
    }
  }

  if (actions.type === TOGGLE_LOADER) {
    return {
      ...state,
      isLoader: actions.payload,
    }
  }

  return state
}

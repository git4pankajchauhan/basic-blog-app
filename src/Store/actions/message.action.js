import { CLEAR_ERRORS, GET_ERRORS } from 'Store/constants/common.constant'

// RETURN ERRORS
export const getMessage = (message, status = null, id = null) => ({
  type: GET_ERRORS,
  payload: { message, status, id },
})

// CLEAR ERRORS
export const clearMessage = () => ({
  type: CLEAR_ERRORS,
})

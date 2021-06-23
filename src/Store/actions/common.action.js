import { CLOSE_DRAWER, ERROR_MESSAGE, OPEN_DRAWER, SUCCESS_MESSAGE, WARNING_MESSAGE } from 'Store/constants/common.constant'

export const openDrawer = () => ({ type: OPEN_DRAWER })
export const closeDrawer = () => ({ type: CLOSE_DRAWER })

export const successMessage = message => ({ type: SUCCESS_MESSAGE, payload: message })
export const warningMessage = message => ({ type: WARNING_MESSAGE, payload: message })
export const errorMessage = message => ({ type: ERROR_MESSAGE, payload: message })

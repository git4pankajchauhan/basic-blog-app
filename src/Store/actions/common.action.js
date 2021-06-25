import { CLOSE_DRAWER, OPEN_DRAWER, TOGGLE_LOADER } from 'Store/constants/common.constant'

export const openDrawer = id => ({ type: OPEN_DRAWER, payload: id })
export const closeDrawer = (status, id = null) => ({ type: CLOSE_DRAWER })

export const toggleLoader = payload => ({ type: TOGGLE_LOADER, payload: payload })

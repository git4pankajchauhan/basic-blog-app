import { TOGGLE_DRAWER, TOGGLE_LOADER } from 'Store/constants/common.constant'

export const toggleDrawer = payload => ({ type: TOGGLE_DRAWER, payload: payload })

export const toggleLoader = payload => ({ type: TOGGLE_LOADER, payload: payload })

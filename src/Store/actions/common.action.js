import { CLOSE_DRAWER, OPEN_DRAWER } from 'Store/constants/common.constant';

export const openDrawer = () => ({ type: OPEN_DRAWER });
export const closeDrawer = () => ({ type: CLOSE_DRAWER });

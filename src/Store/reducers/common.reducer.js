import { CLOSE_DRAWER, OPEN_DRAWER, TOGGLE_DRAWER } from 'Store/constants/common.constant';

const initialState = {
  isDrawerOpen: false,
};

export const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        isDrawerOpen: true,
      };
    case CLOSE_DRAWER:
      return {
        isDrawerOpen: false,
      };

    default:
      return state;
  }
};

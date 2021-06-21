import { INCREMENT, DECREMENT, RESET } from 'Store/constants/Counter.constant';

export const counterIncrement = (incrementby = 1) => {
  return {
    type: INCREMENT,
    payload: incrementby,
  };
};
export const counterDecrement = (decrementby = 1) => {
  return {
    type: DECREMENT,
    payload: decrementby,
  };
};
export const counterReset = () => {
  return {
    type: RESET,
  };
};

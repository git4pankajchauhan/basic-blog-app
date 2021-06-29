import { DECREMENT, INCREMENT, RESET } from 'Store/constants/counter.constant'

const initialState = {
  counter: 0,
}

export default function CounterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      counter: state.counter + action.payload,
    }
  }
  if (action.type === DECREMENT) {
    return {
      ...state,
      counter: state.counter - action.payload,
    }
  }

  if (action.type === RESET) {
    return {
      ...state,
      counter: initialState.counter,
    }
  }

  return state
}

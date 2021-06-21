import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { CounterReducer } from './reducers/Counter.reducer';

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  counter: CounterReducer,
});

export const store = createStore(reducers, composeEnhancers(middleware));

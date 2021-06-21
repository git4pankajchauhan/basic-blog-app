import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { CounterReducer } from './reducers/counter.reducer';
import PostsReducer from './reducers/posts.reducer';
import { CommonReducer } from './reducers/common.reducer';

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  CounterReducer,
  PostsReducer,
  CommonReducer,
});

export const store = createStore(reducers, composeEnhancers(middleware));

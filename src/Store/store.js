import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './reducers/auth.reducer'
import { CommonReducer } from './reducers/common.reducer'
import { CounterReducer } from './reducers/counter.reducer'
import PostsReducer from './reducers/posts.reducer'

const middleware = applyMiddleware(thunk)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  counter: CounterReducer,
  posts: PostsReducer,
  common: CommonReducer,
  auth: AuthReducer,
})

export const store = createStore(reducers, composeEnhancers(middleware))

import { combineReducers } from 'redux'
import AuthReducer from './auth.reducer'
import CommonReducer from './common.reducer'
import CounterReducer from './counter.reducer'
import PostsReducer from './posts.reducer'

const rootReducer = combineReducers({
  counter: CounterReducer,
  posts: PostsReducer,
  common: CommonReducer,
  auth: AuthReducer,
})

export default rootReducer

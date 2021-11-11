import { combineReducers } from 'redux'
import searchReducer from './searchReducer'

const reducers = combineReducers({
  search: searchReducer,
})

export default reducers

import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import choicesReducer from './choicesReducer'

const reducers = combineReducers({
  search: searchReducer,
  choices: choicesReducer,
})

export default reducers

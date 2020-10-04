import { combineReducers, createStore } from 'redux'
import { qrReducer } from './reducers.js'

const rootReducer = combineReducers({
  qrReducer
})

export default createStore(rootReducer)

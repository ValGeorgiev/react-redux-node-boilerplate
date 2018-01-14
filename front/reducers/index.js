import { combineReducers } from 'redux'
import routerReducer from './routerReducer'
import utils from './utils'

const reducers = {
  router: routerReducer,
  language: utils
}

const combined = combineReducers(reducers)

module.exports = combined

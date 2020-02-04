import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import allReducers from '../modules/allReducers'

import { EMTippStore } from './store.types'

declare global {
  interface Window {
    readonly __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function
  }
}

export default function createEMTippStore(): EMTippStore {
  const composeEnhancers =
    __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const middleware = [thunk]

  const store = createStore(
    combineReducers(allReducers),
    composeEnhancers(applyMiddleware(...middleware))
  )

  if (__DEV__) {
    // @ts-ignore
    window.store = store
  }

  return store
}

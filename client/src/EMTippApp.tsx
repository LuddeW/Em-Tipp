import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'

import Router from './components/_routing/Router'
import { EMTippStore } from './store/store.types'

interface EMTippAppProps {
  store: EMTippStore
}

function EMTippApp({ store }: EMTippAppProps) {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default hot(EMTippApp)

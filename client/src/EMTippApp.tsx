import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'

import { EMTippStore } from './store/store.types'

interface EMTippAppProps {
  store: EMTippStore
}

function EMTippApp({ store }: EMTippAppProps) {
  return (
    <Provider store={store}>
      <main>EM Tipp</main>
    </Provider>
  )
}

export default hot(EMTippApp)

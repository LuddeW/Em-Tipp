import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'

import Router from './components/_routing/Router'
import useEmTippStoreDispatch from './hooks/useEmTippStoreDispatch'
import useOnMount from './hooks/useOnMount'
import { tryGetAuthenticatedUser } from './modules/authentication/authentication.actions'
import { EMTippStore } from './store/store.types'

interface EMTippAppProps {
  store: EMTippStore
}

function EMTippApp({ store }: EMTippAppProps) {
  const dispatch = useEmTippStoreDispatch()
  useOnMount(() => {
    dispatch(tryGetAuthenticatedUser())
  })

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default hot(EMTippApp)

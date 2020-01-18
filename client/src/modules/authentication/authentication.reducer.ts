import produce, { Draft } from 'immer'

import { AuthenticationState } from './authentication.types'

const initialState: AuthenticationState = {
  loggedInUserId: null,

  isLoggingIn: false,
  loginError: null
}

function authenticationReducer(
  draft: Draft<AuthenticationState>,
  action: any
) {}

export default produce(authenticationReducer, initialState)

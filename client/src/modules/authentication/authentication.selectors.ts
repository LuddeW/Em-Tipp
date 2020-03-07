import { createSelector } from 'reselect'

import { EMTippStoreState } from '../modules.types'

function getAuthenticationState(state: EMTippStoreState) {
  return state.authentication
}

export const getIsAuthenticated = createSelector(
  getAuthenticationState,
  authenticationState => authenticationState.loggedInUserId !== null
)

export const getAuthenticatedUserId = createSelector(
  getAuthenticationState,
  authenticationState => authenticationState.loggedInUserId
)

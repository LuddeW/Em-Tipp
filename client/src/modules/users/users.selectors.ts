import { createSelector } from 'reselect'

import { getAuthenticatedUserId } from '../authentication/authentication.selectors'
import { EMTippStoreState } from '../modules.types'

function getUsersState(state: EMTippStoreState) {
  return state.users
}

export const getAllUsers = createSelector(
  getUsersState,
  usersState => usersState.allUsers
)

export const getAuthenticatedUser = createSelector(
  getAllUsers,
  getAuthenticatedUserId,
  (allUsers, authenticatedUserId) => {
    if (!authenticatedUserId) {
      return null
    }

    return allUsers.find(user => user.id === authenticatedUserId) ?? null
  }
)

// export const getAllUserScores = createSelector

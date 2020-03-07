import { createSelector } from 'reselect'

import nonNullableMapToList from '../../utils/mapToList'
import { getAllMatchesMap } from '../matches/matches.selectors'
import { EMTippStoreState } from '../modules.types'

import { joinMatchWithMatchGuess } from './matchGuesses.transforms'

function getMatchGuessesState(state: EMTippStoreState) {
  return state.matchGuesses
}

export const getAllUsersMatchGuessesMap = createSelector(
  getMatchGuessesState,
  matchGuessesState => {
    return nonNullableMapToList(matchGuessesState)
  }
)

export const getAllUsersMatchGuesses = createSelector(
  getAllUsersMatchGuessesMap,
  allUsersMatchGuessesMaps => {
    return allUsersMatchGuessesMaps.map(userMatchGuessesMap => {
      return nonNullableMapToList(userMatchGuessesMap)
    })
  }
)

export const getAllUsersMatchGuessesWithMatch = createSelector(
  getAllUsersMatchGuesses,
  getAllMatchesMap,
  (allUsersMatchGuesses, allMatchesMap) => {
    return allUsersMatchGuesses.map(userMatchGuesses =>
      userMatchGuesses
        .map(userMatchGuess => {
          const match = allMatchesMap[userMatchGuess.matchId]
          if (!match) {
            return null
          }

          return joinMatchWithMatchGuess(match, userMatchGuess)
        })
        .filter(Boolean)
    )
  }
)

import { createSelector } from 'reselect'

import { Match } from '../../types/matches.types'
import { EMTippStoreState } from '../modules.types'

function getMatchesState(state: EMTippStoreState) {
  return state.matches
}

export const getAllMatches = createSelector(
  getMatchesState,
  matchesState => matchesState.allMatches
)

export const getAllMatchesMap = createSelector(getAllMatches, allMatches => {
  const allMatchesMap: Record<string, Match> = {}
  allMatches.forEach(match => {
    allMatchesMap[match.id] = match
  })
  return allMatchesMap
})

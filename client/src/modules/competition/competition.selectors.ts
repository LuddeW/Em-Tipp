import { createSelector } from 'reselect'

import { EMTippStoreState } from '../modules.types'

function getCompetitionState(state: EMTippStoreState) {
  return state.competition
}

export const getHasCompetitionStarted = createSelector(
  getCompetitionState,
  competitionState => competitionState.hasStarted
)

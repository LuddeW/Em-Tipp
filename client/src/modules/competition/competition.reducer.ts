import produce, { Draft } from 'immer'

import { CompetitionState } from './competition.types'

const initialState: CompetitionState = {
  hasStarted: false
}

function competitionReducer(draft: Draft<CompetitionState>, action: any) {}

export default produce(competitionReducer, initialState)

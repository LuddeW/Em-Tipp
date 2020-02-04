import { AuthenticationState } from './authentication/authentication.types'
import { CompetitionState } from './competition/competition.types'

export interface EMTippStoreState {
  authentication: AuthenticationState
  competition: CompetitionState
}

export type AllStoreActions = any

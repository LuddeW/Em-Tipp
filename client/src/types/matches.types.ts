import MatchGuessChoice from '../enums/MatchGuessChoice'

import { TeamId } from './teams.types'
import { UserId } from './user.types'

export type MatchId = string

export interface Match {
  readonly id: MatchId
  readonly homeTeamId: TeamId
  readonly awayTeamId: TeamId
  readonly date: Date
  readonly location: string
  readonly homeTeamScore?: number
  readonly awayTeamScore?: number
}

export interface MatchGuess {
  readonly userId: UserId
  readonly matchId: MatchId
  readonly guess: MatchGuessChoice
}

export interface MatchWithGuessResult {
  readonly match: Match
  readonly matchGuess: MatchGuess
  readonly hasResult: boolean
  readonly wasCorrect: boolean
}

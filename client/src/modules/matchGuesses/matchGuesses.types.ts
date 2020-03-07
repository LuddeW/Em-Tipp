import { MatchGuess } from '../../types/matches.types'

export interface MatchGuessesState {
  readonly [userId: string]: MatchGuessMap | undefined
}

interface MatchGuessMap {
  readonly [matchId: string]: MatchGuess | undefined
}

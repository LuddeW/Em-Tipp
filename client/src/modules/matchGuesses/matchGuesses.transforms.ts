import {
  Match,
  MatchGuess,
  MatchWithGuessResult
} from '../../types/matches.types'

import { isMatchFinished, wasMatchGuessCorrect } from './matchGuesses.utils'

export function joinMatchWithMatchGuess(
  match: Match,
  matchGuess: MatchGuess
): MatchWithGuessResult {
  return {
    match,
    matchGuess,
    hasResult: isMatchFinished(match),
    wasCorrect: wasMatchGuessCorrect(match, matchGuess)
  }
}

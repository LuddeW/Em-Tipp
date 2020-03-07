import MatchGuessChoice from '../../enums/MatchGuessChoice'
import { Match, MatchGuess } from '../../types/matches.types'

export function wasMatchGuessCorrect(match: Match, matchGuess: MatchGuess) {
  if (!isMatchFinished(match)) {
    return false
  }

  switch (matchGuess.guess) {
    case MatchGuessChoice.Home:
      return isHomeTeamWinner(match)
    case MatchGuessChoice.Draw:
      return isMatchDraw(match)
    case MatchGuessChoice.Away:
      return isAwayTeamWinner(match)
  }
}

export function isMatchFinished(match: Match) {
  return match.homeTeamScore !== undefined && match.awayTeamScore !== undefined
}

export function isMatchDraw(match: Match) {
  return isMatchFinished(match) && match.homeTeamScore === match.awayTeamScore
}

export function isHomeTeamWinner(match: Match) {
  return match.homeTeamScore! > match.awayTeamScore!
}

export function isAwayTeamWinner(match: Match) {
  return match.homeTeamScore! < match.awayTeamScore!
}

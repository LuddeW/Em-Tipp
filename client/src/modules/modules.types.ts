import {
  AuthenticationState,
  AuthenticationActions
} from './authentication/authentication.types'
import { CompetitionState } from './competition/competition.types'
import { MatchGuessesState } from './matchGuesses/matchGuesses.types'
import { MatchesState } from './matches/matches.types'
import { QuestionAnswersState } from './questionAnswers/questionAnswers.types'
import { QuestionsState } from './questions/questions.types'
import { UsersState } from './users/users.types'

export interface EMTippStoreState {
  readonly authentication: AuthenticationState
  readonly competition: CompetitionState
  readonly matches: MatchesState
  readonly matchGuesses: MatchGuessesState
  readonly questionAnswers: QuestionAnswersState
  readonly questions: QuestionsState
  readonly users: UsersState
}

export type AllStoreActions = AuthenticationActions

import { QuestionAnswer } from '../../types/questions.types'

export interface QuestionAnswersState {
  readonly [userId: string]: QuestionAnswerMap | undefined
}

interface QuestionAnswerMap {
  readonly [questionId: string]: QuestionAnswer | undefined
}

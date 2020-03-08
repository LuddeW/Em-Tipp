import { UserId } from '@em-tipp/common/types'

import QuestionType from '../enums/QuestionType'

export type QuestionId = string

export interface Question {
  readonly id: QuestionId
  readonly points: number
  readonly type: QuestionType
  readonly questionText: string
}

interface BaseQuestionAnswer<Type> {
  readonly questionId: QuestionId
  readonly userId: UserId
  readonly answer: Type
  readonly isCorrect: boolean | undefined
}

export type TextQuestionAnswer = BaseQuestionAnswer<string>
export type CheckboxQuestionAnswer = BaseQuestionAnswer<boolean>
export type NumberQuestionAnswer = BaseQuestionAnswer<number>

export type QuestionAnswer =
  | TextQuestionAnswer
  | CheckboxQuestionAnswer
  | NumberQuestionAnswer

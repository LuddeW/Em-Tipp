import React from 'react'

import PageLayout from '../_layouts/PageLayout'
import Question from '../Question'

export interface QuestionObject {
  id: string
  question: string
  answer: string
}

export interface QuestionPageInterface {
  questionsArray: QuestionObject[]
}

export default function QuestionPage({
  questionsArray
}: QuestionPageInterface) {
  const questions = questionsArray.map(questionObject => {
    return (
      <Question question={questionObject.question} key={questionObject.id} />
    )
  })

  return <PageLayout>{questions}</PageLayout>
}

import React from 'react'

import PageLayout from '../../components/_layouts/PageLayout'
import Question from '../../components/Question'
import Heading from '../../components/_typography/Heading'

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

  return (
    <PageLayout>
      <Heading text="Questions" />
      {questions}
    </PageLayout>
  )
}

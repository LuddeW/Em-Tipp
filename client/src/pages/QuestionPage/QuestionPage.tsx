import React from 'react'

import Question from '../../components/Question'
import PageLayout from '../../components/_layouts/PageLayout'
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
      <Question key={questionObject.id} question={questionObject.question} />
    )
  })

  return (
    <PageLayout>
      <Heading text="Questions" />
      {questions}
    </PageLayout>
  )
}

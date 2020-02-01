import React from 'react'

import QuestionPage from './QuestionPage'

export default {
  component: QuestionPage,
  title: 'pages/QuestionPage'
}

const questionArray = [
  { id: '1', question: 'how are you?', answer: '' },
  { id: '2', question: 'how are you?', answer: '' }
]

export function questionPage() {
  return <QuestionPage questionsArray={questionArray} />
}

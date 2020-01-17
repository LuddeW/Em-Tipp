import React from 'react'

import QuestionCard from './QuestionCard'

export default {
  component: QuestionCard,
  title: 'components/QuestionCard'
}

const props = {
  question: 'How are you?'
}

export function question() {
  return <QuestionCard {...props} />
}

export function multipleQuestions() {
  return (
    <div>
      <QuestionCard {...props} />
      <QuestionCard {...props} />
    </div>
  )
}

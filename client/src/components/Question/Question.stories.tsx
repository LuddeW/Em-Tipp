import React from 'react'

import Question from './Question'

export default {
  component: Question,
  title: 'components/Question'
}

const props = {
  question: 'How are you?'
}

export function question() {
  return <Question {...props} />
}

export function multipleQuestions() {
  return (
    <div>
      <Question {...props} />
      <Question {...props} />
    </div>
  )
}

import React from 'react'

import TextInput from '../_inputs/TextInput'

interface QuestionCardProps {
  question: string
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [value, setValue] = React.useState('')

  return (
    <div>
      <h2>{question}</h2>
      <TextInput name={question} value={value} onChange={setValue}></TextInput>
    </div>
  )
}

import React, { useState } from 'react'

import TextInput from '../_inputs/TextInput'

interface QuestionCardProps {
  question: string
}

export default function Question({ question }: QuestionCardProps) {
  const [value, setValue] = useState('')

  return (
    <div>
      <h2>{question}</h2>
      <TextInput
        name={question}
        value={value}
        disabled={false}
        onChange={setValue}
      />
    </div>
  )
}

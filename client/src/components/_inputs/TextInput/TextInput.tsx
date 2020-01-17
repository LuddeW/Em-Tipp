import React from 'react'

import BaseInput from '../BaseInput'

interface TextInputProps {
  name: string
  value: string
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput({ name, value, onChange }: TextInputProps) {
  return (
    <BaseInput type={'text'} name={name} value={value} onChange={onChange} />
  )
}

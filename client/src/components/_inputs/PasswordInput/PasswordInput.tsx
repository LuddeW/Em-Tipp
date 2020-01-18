import React from 'react'

import BaseInput, { BaseInputProps } from '../BaseInput'

interface PasswordInputProps extends Omit<BaseInputProps, 'type'> {
  name: string
  value: string
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PasswordInput({
  name,
  value,
  onChange
}: PasswordInputProps) {
  return (
    <BaseInput
      type={'password'}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}

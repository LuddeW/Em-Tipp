import React from 'react'

import BaseInput from '../BaseInput'
import { BaseInputProps } from '../BaseInput/BaseInput'

interface PasswordInputProps extends Omit<BaseInputProps, 'type'> {}

export default function PasswordInput({
  name,
  value,
  onChange,
  disabled
}: PasswordInputProps) {
  return (
    <BaseInput
      type="password"
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

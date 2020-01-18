import React from 'react'

import BaseInput from '../BaseInput'
import { BaseInputProps } from '../BaseInput/BaseInput'

interface TextInputProps extends Omit<BaseInputProps, 'type'> {}

export default function TextInput({ name, value, onChange }: TextInputProps) {
  return <BaseInput type="text" name={name} value={value} onChange={onChange} />
}

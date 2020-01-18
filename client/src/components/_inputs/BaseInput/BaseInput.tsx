import React from 'react'

export interface BaseInputProps {
  name: string
  type: string
  value: string
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function BaseInput({
  type,
  name,
  value,
  onChange
}: BaseInputProps) {
  function onElementChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(event.target.value, event)
    }
  }

  return (
    <input type={type} name={name} value={value} onChange={onElementChange} />
  )
}

import React from 'react'

export interface BaseInputProps {
  name: string
  type: string
  value: string
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

export default function BaseInput({
  type,
  name,
  value,
  onChange,
  disabled
}: BaseInputProps) {
  function onElementChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(event.target.value, event)
    }
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onElementChange}
    />
  )
}

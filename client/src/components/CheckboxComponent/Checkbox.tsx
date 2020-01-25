import React from 'react'

interface CheckboxProps {
  title: string
  name: string
  checked: boolean
  onChange: Function
}

export default function Checkbox({
  title,
  name,
  checked,
  onChange
}: CheckboxProps) {
  return (
    <div>
      <input
        type={'checkbox'}
        name={name}
        checked={checked}
        onChange={() => {
          onChange(!checked)
        }}
      />
      {title}
    </div>
  )
}

import React from 'react'

interface ElementMap {
  input: HTMLInputElement
  select: HTMLSelectElement
}

type AllowedElementTypes = keyof ElementMap

interface CommonInterface<ElementType, ValueType> {
  name: string
  value: ValueType
  required: boolean
  disabled: boolean

  onChange: (value: ValueType, event: React.ChangeEvent<ElementType>) => void
  onBlur?: (event: React.FocusEvent<ElementType>) => void
  onFocus?: (event: React.FocusEvent<ElementType>) => void
}

export interface IBaseInputProps<ElementType extends AllowedElementTypes> {
  element?: ElementType
  name: string
  value: string
  onChange: (
    value: string,
    event: React.ChangeEvent<ElementMap[ElementType]>
  ) => void
}

type BaseInputProps<
  ElementType extends AllowedElementTypes = 'input'
> = IBaseInputProps<ElementType> & JSX.IntrinsicElements[ElementType]

function BaseInput<ElementType extends AllowedElementTypes = 'input'>({
  element: Element,

  ...restProps
}: BaseInputProps<ElementType>) {
  if (!Element) {
    Element = 'input'
  }

  return <Element {...restProps} />
}

interface CheckboxInputProps
  extends CommonInterface<HTMLInputElement, boolean> {}

export function CheckboxInput({
  value,

  ...baseInputProps
}: CheckboxInputProps) {
  return <BaseInput {...baseInputProps} type="checkbox" />
}

interface SelectProps extends BaseInputProps<'select'> {
  options: Array<{ key: string; value: string }>
}

export function Select({ ...baseInputProps }: SelectProps) {
  return <BaseInput element="select" {...baseInputProps} />
}

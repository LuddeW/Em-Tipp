import React from 'react'

import BaseInput from './BaseInput'

export default {
  component: BaseInput,
  title: 'components/BaseInput'
}

const props = {
  name: 'input',
  value: 'Ludde',
  onChange: () => {}
}

export function text() {
  return <BaseInput {...props} type="text" />
}

export function password() {
  return <BaseInput {...props} type="password" />
}

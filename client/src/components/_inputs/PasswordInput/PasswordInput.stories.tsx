import React from 'react'

import PasswordInput from './PasswordInput'

export default {
  component: PasswordInput,
  title: 'components/PasswordInput'
}

const props = {
  name: 'input',
  value: 'Ludde',
  onChange: () => {}
}

export function passwordInput() {
  return <PasswordInput {...props} />
}

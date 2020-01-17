import React from 'react'

import TextInput from './TextInput'

export default {
  component: TextInput,
  title: 'components/TextInput'
}

const props = {
  name: 'input',
  value: 'Ludde',
  onChange: () => {}
}

export function textInput() {
  return <TextInput {...props} />
}

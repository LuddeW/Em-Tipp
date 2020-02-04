import React from 'react'

import Checkbox from './Checkbox'

export default {
  component: Checkbox,
  title: 'components/Checkbox'
}

const props = {
  title: 'Test',
  name: 'input',
  checked: false,
  onChange: () => {}
}

export function checkbox() {
  return <Checkbox {...props} />
}

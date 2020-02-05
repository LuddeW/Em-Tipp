import React from 'react'

import GroupTableRow from './GroupTableRow'

export default {
  component: GroupTableRow,
  title: 'components/GroupTableRow'
}

const props = {
  team: 'Sweden',
  points: 5
}

export function groupTableRowComponent() {
  return <GroupTableRow {...props} />
}

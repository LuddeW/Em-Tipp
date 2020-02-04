import React from 'react'

import GroupTable from './GroupTable'

export default {
  component: GroupTable,
  title: 'components/GroupTable'
}

const teams = [
  {
    id: 1,
    team: 'Sweden',
    points: 9
  },
  {
    id: 2,
    team: 'Spain',
    points: 6
  },
  {
    id: 3,
    team: 'Poland',
    points: 1
  },
  {
    id: 4,
    team: 'Ireland',
    points: 1
  }
]

export function groupTableComponent() {
  return <GroupTable teams={teams} />
}

import React from 'react'

import Group from './Group'

export default {
  component: Group,
  title: 'components/Group'
}

const props = {
  groupName: 'Group A',
  teams: [
    {
      id: 1,
      team: 'Sweden',
      points: 9
    },
    {
      id: 2,
      team: 'Spain',
      points: 6
    }
  ],
  matches: [
    {
      id: 1,
      homeTeam: 'Sweden',
      awayTeam: 'Spain'
    },
    {
      id: 2,
      homeTeam: 'Poland',
      awayTeam: 'Ireland'
    }
  ]
}

export function groupComponent() {
  return <Group {...props} />
}

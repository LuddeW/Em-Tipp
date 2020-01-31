import React from 'react'

import GroupMatches from './GroupMatches'

export default {
  component: GroupMatches,
  title: 'components/GroupMatches'
}

const matches = [
  {
    id: 1,
    homeTeam: 'Sweden',
    awayTeam: 'Spain'
  },
  {
    id: 2,
    homeTeam: 'Poland',
    awayTeam: 'Ireland'
  },
  {
    id: 3,
    homeTeam: 'Poland',
    awayTeam: 'Spain'
  },
  {
    id: 4,
    homeTeam: 'Sweden',
    awayTeam: 'Ireland'
  }
]

export function groupTableComponent() {
  return <GroupMatches matches={matches} />
}

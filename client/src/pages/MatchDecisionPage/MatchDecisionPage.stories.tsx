import React from 'react'

import MatchDecisionPage from './MatchDecisionPage'

export default {
  component: MatchDecisionPage,
  title: 'pages/MatchDecisionPage'
}

const groups = [
  {
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
  },
  {
    groupName: 'Group B',
    teams: [
      {
        id: 1,
        team: 'France',
        points: 9
      },
      {
        id: 2,
        team: 'Italy',
        points: 6
      }
    ],
    matches: [
      {
        id: 1,
        homeTeam: 'France',
        awayTeam: 'Italy'
      },
      {
        id: 2,
        homeTeam: 'Denamrk',
        awayTeam: 'Norway'
      }
    ]
  }
]

export function questionPage() {
  return <MatchDecisionPage groups={groups} />
}

import React from 'react'

import Match from '../Match'

export interface GroupTableRowProps {
  id: number
  homeTeam: string
  awayTeam: string
}

export interface GroupMatchesProps {
  matches: GroupTableRowProps[]
}

// Need to solve the type problem below
export default function GroupTable({ matches }: GroupMatchesProps) {
  const gropuTable = matches.map((match: GroupTableRowProps) => {
    return (
      <Match
        homeTeam={match.homeTeam}
        awayTeam={match.awayTeam}
        key={match.id}
      />
    )
  })
  return <div>{gropuTable}</div>
}

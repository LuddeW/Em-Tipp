import React from 'react'

import Match from '../Match'

export interface GroupMatchProps {
  id: number
  homeTeam: string
  awayTeam: string
}

export interface GroupMatchesProps {
  matches: GroupMatchProps[]
}

export default function GroupTable({ matches }: GroupMatchesProps) {
  const gropuTable = matches.map((match: GroupMatchProps) => {
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

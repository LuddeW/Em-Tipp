import React from 'react'

import GroupTableRow from '../GroupTableRow'

export interface GroupTableRowProps {
  id: number
  team: string
  points: number
}

export interface GroupTableProps {
  teams: GroupTableRowProps[]
}

export default function GroupTable({ teams }: GroupTableProps) {
  const gropuTable = teams.map((team: GroupTableRowProps) => {
    return <GroupTableRow team={team.team} points={team.points} key={team.id} />
  })
  return <div>{gropuTable}</div>
}

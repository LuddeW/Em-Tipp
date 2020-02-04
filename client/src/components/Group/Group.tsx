import React from 'react'

import GroupMatches, { GroupMatchProps } from '../GroupMatches/GroupMatches'
import GroupTable, { GroupTableRowProps } from '../GroupTable/GroupTable'

export interface GroupProps {
  groupName: string
  teams: GroupTableRowProps[]
  matches: GroupMatchProps[]
}

// Need to solve the type problem below
export default function Group({ groupName, teams, matches }: GroupProps) {
  return (
    <div>
      {groupName}
      <GroupTable teams={teams} />
      <GroupMatches matches={matches} />
    </div>
  )
}

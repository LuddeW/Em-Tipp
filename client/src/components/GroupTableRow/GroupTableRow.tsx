import React from 'react'

interface GroupTableRowProps {
  team: string
  points: number
}

export default function GroupTableRow({ team, points }: GroupTableRowProps) {
  return (
    <div>
      {team}
      {points}
    </div>
  )
}

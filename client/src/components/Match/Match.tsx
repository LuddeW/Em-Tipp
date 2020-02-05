import React from 'react'

import ResultDecider from '../ResultDecider'

interface MatchProps {
  homeTeam: string
  awayTeam: string
}

export default function Match({ homeTeam, awayTeam }: MatchProps) {
  return (
    <div>
      {homeTeam} <ResultDecider /> {awayTeam}
    </div>
  )
}

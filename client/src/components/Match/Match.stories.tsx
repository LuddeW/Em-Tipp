import React from 'react'

import Match from './Match'

export default {
  component: Match,
  title: 'components/Match'
}

const props = {
  homeTeam: 'Sweden',
  awayTeam: 'Spain'
}

export function resultDeciderComponent() {
  return <Match {...props} />
}

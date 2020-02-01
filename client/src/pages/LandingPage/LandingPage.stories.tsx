import React from 'react'

import LandingPage from './LandingPage'

export default {
  component: LandingPage,
  title: 'pages/LandingPage'
}

const props = {
  username: 'LuddeRaket'
}

export function landingPage() {
  return <LandingPage {...props} />
}

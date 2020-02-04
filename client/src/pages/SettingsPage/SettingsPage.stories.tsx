import React from 'react'

import SettingsPage from './SettingsPage'

export default {
  component: SettingsPage,
  title: 'pages/SettingsPage'
}

const props = {
  username: 'LuddeRaket'
}

export function settingsPage() {
  return <SettingsPage {...props} />
}

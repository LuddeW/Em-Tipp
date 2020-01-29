import React from 'react'

import PageLayout from '../../../components/_layouts/PageLayout'
import Heading from '../../../components/_typography/Heading'

export default function SettingsPage() {
  return (
    <PageLayout>
      <Heading text="Inställningar" />

      <p>Här kan du ändra dina inställningar.</p>
    </PageLayout>
  )
}

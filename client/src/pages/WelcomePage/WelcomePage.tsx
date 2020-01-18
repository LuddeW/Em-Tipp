import React from 'react'

import PageLayout from '../../components/_layouts/PageLayout'
import Header from '../../components/_typography/Header'

export default function WelcomePage() {
  return (
    <PageLayout>
      <Header text="EM-Kampen 🏆" />

      <p>Logga in med ditt användarnamn och PIN-kod för att börja tippa.</p>

      <p>
        Om du inte har fått något användarnamn eller om du har glömt din PIN-kod
        så hör av dig till Joel, Ludwig eller Hektor{' '}
        <span role="img" aria-label="Smiley emoji">
          ☺️
        </span>
      </p>
    </PageLayout>
  )
}

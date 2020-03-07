import React from 'react'

import PageLayout from '../../components/_layouts/PageLayout'
import UppercaseHeading from '../../components/_typography/UppercaseHeading'
import useEmTippStoreDispatch from '../../hooks/useEmTippStoreDispatch'
import useOnMount from '../../hooks/useOnMount'
import { tryGetAuthenticatedUser } from '../../modules/authentication/authentication.actions'

export default function WelcomePage() {
  const dispatch = useEmTippStoreDispatch()
  useOnMount(() => {
    dispatch(tryGetAuthenticatedUser())
  })

  return (
    <PageLayout>
      <UppercaseHeading>
        EM-Kampen&nbsp;
        <span role="img" aria-label="Trofé icon">
          🏆
        </span>
      </UppercaseHeading>

      <p>Logga in med ditt användarnamn och PIN-kod för att börja tippa.</p>

      <p>
        Om du inte har fått något användarnamn eller om du har glömt din PIN-kod
        så hör av dig till Joel, Ludwig eller Hektor{' '}
        <span role="img" aria-label="Eld emoji">
          🔥
        </span>
      </p>
    </PageLayout>
  )
}

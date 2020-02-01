import React from 'react'

import Heading from '../../components/_typography/Heading'
import PageLayout from '../../components/_layouts/PageLayout'

export interface usernameProps {
  username: string
}

export default function LandingPage({ username }: usernameProps) {
  return (
    <PageLayout>
      <Heading text="Welcome" />
      <Heading text={username} />
      <p>
        Det är här det riktiga EM lever. Före EM startar så kommer du kunna
        lägga in dina tipp för alla gruppspelsmatcher och svara på utslagsfrågor
        här. Du har fram till första avsparken (11 juni) att ändra dina svar,
        men efter det så är dina svar låsta. När EM väl är igång så kommer du
        också kunna följa tävlingen härifrån. Här kan du se topplistan och varje
        tävlares individuella poäng.
      </p>
      <button>Decide Results</button>
      <button>Questions</button>
      <button>Settings</button>
    </PageLayout>
  )
}

import React, { useState } from 'react'

import Heading from '../../components/_typography/Heading'
import PageLayout from '../../components/_layouts/PageLayout'
import NotificationForm from '../../components/NotificationForm'
import TextInput from '../../components/_inputs/TextInput'

export interface usernameProps {
  username: string
}

export default function SettingsPage({ username }: usernameProps) {
  const [userNameValue, setUserNameValue] = useState('')

  return (
    <PageLayout>
      <Heading text="Settings" />
      <p>Username: </p> {username}
      <Heading text="Change display name" />
      <TextInput
        name="displayName"
        value={userNameValue}
        onChange={setUserNameValue}
      />
      <NotificationForm />
    </PageLayout>
  )
}

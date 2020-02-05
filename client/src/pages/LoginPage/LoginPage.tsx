import React from 'react'

import LoginForm from '../../components/LoginForm'
import PageLayout from '../../components/_layouts/PageLayout'
import Heading from '../../components/_typography/Heading'

export default function LoginPage() {
  return (
    <PageLayout>
      <Heading text="EM-Kampen 🏆" />
      <LoginForm />
    </PageLayout>
  )
}

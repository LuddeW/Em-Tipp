import React from 'react'

import LoginForm from '../../components/LoginForm'
import PageLayout from '../../components/_layouts/PageLayout'
import Header from '../../components/_typography/Header'

export default function WelcomePage() {
  return (
    <PageLayout>
      <Header text="EM-Kampen 🏆" />
      <LoginForm />
    </PageLayout>
  )
}

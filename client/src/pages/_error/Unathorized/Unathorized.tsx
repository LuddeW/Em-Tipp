import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import LoginForm from '../../../components/LoginForm'
import ShakeScreen from '../../../components/_functional/ShakeScreen'
import PageLayout from '../../../components/_layouts/PageLayout'
import Heading from '../../../components/_typography/Heading'
import { getIsAuthenticated } from '../../../modules/authentication/authentication.selectors'

interface UnathorizedProps {}

export default function Unathorized({}: UnathorizedProps) {
  const isAuthenticated = useSelector(getIsAuthenticated)

  return (
    <PageLayout>
      <ShakeScreen />

      <Heading text="Unauthorized access" />

      {isAuthenticated && <Link to="/">Go back to the start page</Link>}

      {!isAuthenticated && <LoginForm />}
    </PageLayout>
  )
}

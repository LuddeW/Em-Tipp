import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import useEmTippStoreDispatch from '../../hooks/useEmTippStoreDispatch'
import { login } from '../../modules/authentication/authentication.actions'
import {
  getIsAuthenticating,
  getAuthenticationError,
  getAuthenticatedUserId
} from '../../modules/authentication/authentication.selectors'
import PasswordInput from '../_inputs/PasswordInput'
import TextInput from '../_inputs/TextInput'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useEmTippStoreDispatch()
  const authenticating = useSelector(getIsAuthenticating)
  const authenticationError = useSelector(getAuthenticationError)
  const authenticated = useSelector(getAuthenticatedUserId)

  return (
    <div>
      <h2>Login</h2>
      <div>
        <TextInput
          name="username"
          value={username}
          disabled={authenticating}
          onChange={setUsername}
        />
      </div>
      <div>
        <PasswordInput
          name="password"
          value={password}
          disabled={authenticating}
          onChange={setPassword}
        />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(login(username, password))
          }}
        >
          Login
        </button>
      </div>

      {authenticating && <h2>Loading...</h2>}
      {authenticated && <Redirect to={'/'} />}
      {authenticationError && <h2>{authenticationError.message}</h2>}
    </div>
  )
}

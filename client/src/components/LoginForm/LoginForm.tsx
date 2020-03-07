import React, { useState } from 'react'

import PasswordInput from '../_inputs/PasswordInput'
import TextInput from '../_inputs/TextInput'

export default function LoginForm() {
  const [userValue, setUserValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  return (
    <div>
      <h2>Login</h2>
      <form>
        <TextInput name="username" value={userValue} onChange={setUserValue} />
        <br />
        <PasswordInput
          name="password"
          value={passwordValue}
          onChange={setPasswordValue}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

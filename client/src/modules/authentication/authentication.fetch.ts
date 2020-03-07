export async function fetchLogin(username: string, password: string) {
  const response = await fetch('/api/user/login', {
    method: 'post',
    body: JSON.stringify({ username, password }),
    headers: { 'content-type': 'application/json' }
  })
  if (!response.ok) {
    throw new Error('Not OK')
  }
  const user = await response.json()
  return user
}

export async function tryFetchAuthenticatedUser() {
  const response = await fetch('/api/user')

  if (!response.ok) {
    throw new Error('')
  }

  const user = await response.json()
  return user
}

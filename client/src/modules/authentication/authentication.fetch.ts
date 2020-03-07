export async function fetchLogin(username: string, password: string) {
  // await new Promise(resolve => setTimeout(resolve, 1000))
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
  /* throw new Error('Wrong username or password')
  return {
    userId: 'Test'
  } */
}

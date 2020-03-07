const { get } = require('../postgres.ts')

export function authenticateUser(username: string, pin: string) {
  if (username && pin) {
    const query =
      'SELECT id, username, displayname FROM USERS WHERE USERNAME=$1 AND PIN=$2'
    const values = [username, pin]

    return get(query, values).then((result: any) => console.log(result))
  }
  return null
}

export function getUserById(id: string) {
  if (id) {
    const query = 'SELECT id, username, displayname FROM USERS WHERE id=$1'
    const values = [id]

    return get(query, values).then((result: any) => console.log(result))
  }
  return null
}

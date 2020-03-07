const { get, update } = require('../postgres.ts')

export async function authenticateUser(username: string, pin: string) {
  if (username && pin) {
    const query =
      'SELECT id, username, displayname FROM USERS WHERE USERNAME=$1 AND PIN=$2'
    const values = [username, pin]

    return get(query, values).then((result: any) => result)
  }
  return null
}

export async function getUserById(id: string) {
  if (id) {
    const query = 'SELECT id, username, displayname FROM USERS WHERE id=$1'
    const values = [id]

    return get(query, values).then((result: any) => result)
  }
  return null
}

export async function updateDisplayName(id: string, displayname: string) {
  if (id && displayname) {
    const query = 'UPDATE USERS SET displayname = $1 WHERE id=$2'
    const values = [displayname, id]

    const updated = await update(query, values).then((result: any) =>
      Boolean(result)
    )
    const user = await getUserById(id)

    return { user, updated }
  }

  return null
}

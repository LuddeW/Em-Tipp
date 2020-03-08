import { User, UserId } from '@em-tipp/common/types'

import { get, update } from '../postgres'

export async function authenticateUser(username: string, pin: string) {
  const query =
    'SELECT id FROM USERS WHERE lower(USERNAME)=lower($1) AND PIN=$2'
  const values = [username, pin]

  const response = await get<Pick<User, 'id'>>(query, values)
  if (!response) {
    return null
  }

  return getUserById(response.id)
}

export async function getUserById(id: UserId) {
  const query = 'SELECT id, username, displayname, admin FROM USERS WHERE id=$1'
  const values = [id]

  return (await get<User>(query, values)) ?? null
}

export async function updateDisplayName(id: UserId, displayname: string) {
  if (id && displayname) {
    const query = 'UPDATE USERS SET displayname = $1 WHERE id=$2'
    const values = [displayname, id]

    const updated = await update(query, values).then(result => Boolean(result))
    const user = await getUserById(id)

    return { user, updated }
  }

  return null
}

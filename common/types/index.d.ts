export type UserId = string

export interface User {
  id: UserId
  username: string
  displayname: string | null
  admin?: boolean
}

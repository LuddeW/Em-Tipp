export type UserId = number

export interface User {
  id: UserId
  username: string
  displayname: string | null
  admin?: boolean
}

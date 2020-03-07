export type UserId = string

export interface User {
  readonly id: UserId
  readonly username: string
  readonly displayName?: string
}

export type TeamId = string

export interface Team {
  readonly id: TeamId
  readonly countryCode: string
  readonly name: string
}

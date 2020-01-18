import { UserId } from '../../types/user.types'

export interface AuthenticationState {
  loggedInUserId: UserId | null

  isLoggingIn: boolean
  loginError: Error | null
}

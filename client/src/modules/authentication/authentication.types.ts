import { EmptyAction, PayloadAction } from '../../store/store.types'
import { UserId } from '../../types/user.types'

import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from './authentication.actions'

export interface AuthenticationState {
  loggedInUserId: UserId | null

  isLoggingIn: boolean
  loginError: Error | null
}

export type LoginRequestAction = EmptyAction<typeof LOGIN_REQUEST>
export type LoginFailureAction = PayloadAction<typeof LOGIN_FAILURE, Error>
export type LoginSuccessAction = PayloadAction<typeof LOGIN_SUCCESS, UserId>

export type AuthenticationActions =
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction

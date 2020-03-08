import { User } from '@em-tipp/common/types'

import { EmptyAction, PayloadAction } from '../../store/store.types'

import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from './authentication.actions'

export interface AuthenticationState {
  user: User | null

  isLoggingIn: boolean
  loginError: Error | null
}

export type LoginRequestAction = EmptyAction<typeof LOGIN_REQUEST>
export type LoginFailureAction = PayloadAction<typeof LOGIN_FAILURE, Error>
export type LoginSuccessAction = PayloadAction<typeof LOGIN_SUCCESS, User>

export type AuthenticationActions =
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction

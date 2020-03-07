import { Store, Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { AllStoreActions, EMTippStoreState } from '../modules/modules.types'

export interface EmptyAction<Type> extends Action<Type> {}

export interface PayloadAction<Type, Payload> extends EmptyAction<Type> {
  readonly payload: Payload
}

export type EMTippStore = Store<EMTippStoreState, AllStoreActions>

export type EMTippStoreDispatch = ThunkDispatch<
  EMTippStoreState,
  void,
  AllStoreActions
>

export type EMTippStoreGetState = () => EMTippStoreState

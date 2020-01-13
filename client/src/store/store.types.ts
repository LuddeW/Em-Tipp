import { Store, Action } from 'redux'

import { AllStoreActions, EMTippStoreState } from '../modules/modules.types'

export interface EmptyAction<Type> extends Action<Type> {}

export interface PayloadAction<Type, Payload> extends EmptyAction<Type> {
  readonly payload: Payload
}

export type EMTippStore = Store<EMTippStoreState, AllStoreActions>

import { useDispatch } from 'react-redux'

import { EMTippStoreDispatch } from '../store/store.types'

export default function useEmTippStoreDispatch() {
  return useDispatch<EMTippStoreDispatch>()
}

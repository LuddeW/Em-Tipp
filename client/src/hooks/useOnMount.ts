import { useEffect, EffectCallback } from 'react'

export default function useOnUnmount(fn: EffectCallback) {
  useEffect(fn, [])
}

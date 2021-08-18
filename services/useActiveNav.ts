import { useAppContext } from './App.context'
import { useEffect } from 'react'

export function useActiveNav(value?: string, inView?: boolean) {
  const { setActiveNav, activeNav } = useAppContext()

  useEffect(() => {
    if (inView && !!value) {
      setActiveNav(value)
    }
  }, [inView, setActiveNav, value])

  return activeNav
}

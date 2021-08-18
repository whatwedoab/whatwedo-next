import { useAppContext } from './App.context'
import { useEffect } from 'react'

export function useShowNav(value?: boolean, inView?: boolean) {
  const { navVisible, showNav } = useAppContext()

  useEffect(() => {
    if (inView && value !== undefined) {
      showNav(value)
    }
  }, [inView, showNav, value])

  return {navVisible, showNav}
}

import { useAppContext } from './App.context'
import { useEffect } from 'react'

export function useShowLogo(value?: boolean, inView?: boolean) {
  const { showLogo, logoVisible } = useAppContext()

  useEffect(() => {
    if (inView && value !== undefined) {
      showLogo(value)
    }
  }, [inView, showLogo, value])

  return { logoVisible, showLogo }
}

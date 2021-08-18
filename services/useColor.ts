import { useAppContext } from './App.context'
import { useEffect } from 'react'

export function useColor(value?: string, inView?: boolean) {
  const { setColor, color } = useAppContext()

  useEffect(() => {
    if (inView && !!value) {
      setColor(value)
      if (!!document) {
        const t = setTimeout(
          () => (document.body.style.color = value),
          1000,
        )
        return () => clearTimeout(t)
      }
    }
  }, [inView, setColor, value])

  return color
}

import { useAppContext } from './App.context'
import { useEffect } from 'react'

export function useBackgroundColor(value: string, inView: boolean) {
  const { setBackgroundColor } = useAppContext()

  useEffect(() => {
    if (inView) {
      setBackgroundColor(value)
      if (!!document) {
        const t = setTimeout(
          () => (document.body.style.backgroundColor = value),
          1000,
        )
        return () => clearTimeout(t)
      }
    }
  }, [inView, setBackgroundColor, value])
}

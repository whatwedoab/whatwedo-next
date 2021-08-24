import { MOBILE_HEADER_HEIGHT, useAppContext } from './App.context'
import { useEffect } from 'react'
import { useViewportScroll } from 'framer-motion'

export function useBackgroundColor(
  color: string,
  top: number | null,
  bottom: number | null,
) {
  const { scrollY } = useViewportScroll()
  const { setBackgroundColor } = useAppContext()

  useEffect(() => {
    const scrollPos = scrollY.get()
    if (
      top !== null &&
      bottom !== null &&
      scrollPos >= top - MOBILE_HEADER_HEIGHT &&
      scrollPos < bottom - MOBILE_HEADER_HEIGHT
    ) {
      document.body.style.backgroundColor = color
      setBackgroundColor(color)
    }
  }, [color, top, bottom, scrollY, setBackgroundColor])

  useEffect(() => {
    if (top !== null && bottom !== null) {
      return scrollY.onChange((scrollPos) => {
        if (
          scrollPos > top - MOBILE_HEADER_HEIGHT / 2 &&
          scrollPos < bottom - MOBILE_HEADER_HEIGHT / 2
        ) {
          document.body.style.backgroundColor = color
          setBackgroundColor(color)
        }
      })
    }
  }, [scrollY, top, color, bottom, setBackgroundColor])
}

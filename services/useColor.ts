import { useAppContext } from './App.context'
import { useEffect } from 'react'
import { useViewportScroll } from 'framer-motion'
import { isScrolledIn, isTop } from './scroll.utils'

export function useColor(
  color: string,
  top: number | null,
  bottom: number | null,
) {
  const { setColor } = useAppContext()
  const { scrollY } = useViewportScroll()

  useEffect(() => {
    const scrollPos = scrollY.get()
    if (isTop(scrollPos, top, bottom)) {
      setColor(color)
    }
  }, [color, bottom, scrollY, setColor, top])

  useEffect(() => {
    if (top !== null && bottom !== null) {
      return scrollY.onChange((scrollPos) => {
        if (
          isScrolledIn(scrollPos, top, bottom) ||
          isTop(scrollPos, top, bottom)
        ) {
          setColor(color)
        }
      })
    }
  }, [scrollY, top, setColor, color, bottom])
}

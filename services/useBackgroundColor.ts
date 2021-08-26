import { useAppContext } from './App.context'
import { useEffect } from 'react'
import { useViewportScroll } from 'framer-motion'
import { isScrolledIn, isTop } from './scroll.utils'

export function useBackgroundColor(
  color: string,
  top: number | null,
  bottom: number | null,
) {
  const { scrollY } = useViewportScroll()
  const { setBackgroundColor } = useAppContext()

  useEffect(() => {
    const scrollPos = scrollY.get()
    if (isTop(scrollPos, top, bottom)) {
      document.body.style.backgroundColor = color
      setBackgroundColor(color)
    }
  }, [color, top, bottom, scrollY, setBackgroundColor])

  useEffect(() => {
    if (top !== null && bottom !== null) {
      return scrollY.onChange((scrollPos) => {
        if (
          isTop(scrollPos, top, bottom) ||
          isScrolledIn(scrollPos, top, bottom)
        ) {
          document.body.style.backgroundColor = color
          setBackgroundColor(color)
        }
      })
    }
  }, [scrollY, top, color, bottom, setBackgroundColor])
}

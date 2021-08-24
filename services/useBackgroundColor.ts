import { HEADER_HEIGHT } from './App.context'
import { useEffect } from 'react'
import { useViewportScroll } from 'framer-motion'

export function useBackgroundColor(
  color: string,
  top: number | null,
  bottom: number | null,
) {
  const { scrollY } = useViewportScroll()

  useEffect(() => {
    const threshold = scrollY.get() + HEADER_HEIGHT / 2
    if (
      top !== null &&
      bottom !== null &&
      threshold >= top &&
      threshold < bottom
    ) {
      document.body.style.backgroundColor = color
    }
  }, [color, top, bottom, scrollY])

  useEffect(() => {
    if (top !== null && bottom !== null) {
      return scrollY.onChange((v) => {
        const threshold = v + HEADER_HEIGHT / 2
        if (threshold > top && threshold < bottom) {
          document.body.style.backgroundColor = color
        }
      })
    }
  }, [scrollY, top, color, bottom])
}

import { HEADER_HEIGHT, useAppContext } from './App.context'
import { useEffect } from 'react'
import { useViewportScroll } from 'framer-motion'

export function useActiveNav(value?: string, top?: number | null, bottom?: number | null) {
  const { setActiveNav, activeNav } = useAppContext()

  const { scrollY } = useViewportScroll()

  useEffect(() => {
    const threshold = scrollY.get() + HEADER_HEIGHT / 2
    if (
      !!value &&
      top !== null &&
      top !== undefined &&
      bottom !== null &&
      bottom !== undefined &&
      threshold >= top &&
      threshold < bottom
    ) {
      setActiveNav(value)
    }
  }, [value, top, bottom, scrollY, setActiveNav])

  useEffect(() => {
    if (
      !!value &&
      top !== null &&
      top !== undefined &&
      bottom !== null &&
      bottom !== undefined
    ) {
      return scrollY.onChange((v) => {
        const threshold = v + HEADER_HEIGHT / 2
        if (threshold > top && threshold < bottom) {
          setActiveNav(value)
        }
      })
    }
  }, [scrollY, top, bottom, value, setActiveNav])
  return activeNav
}

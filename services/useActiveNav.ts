import { useAppContext } from './App.context'
import { useEffect } from 'react'
import { useViewportScroll } from 'framer-motion'
import { isScrolledIn, isTop } from './scroll.utils'

export function useActiveNav(
  value?: string,
  top?: number | null,
  bottom?: number | null,
) {
  const { setActiveNav, activeNav } = useAppContext()

  const { scrollY } = useViewportScroll()

  useEffect(() => {
    const scrollPos = scrollY.get()
    if (!!value && isTop(scrollPos, top, bottom)) {
      setActiveNav(value)
    }
  }, [value, top, bottom, scrollY, setActiveNav])

  useEffect(() => {
    if (!!value) {
      return scrollY.onChange((scrollPos) => {
        if (
          isScrolledIn(scrollPos, top, bottom) ||
          isTop(scrollPos, top, bottom)
        ) {
          setActiveNav(value)
        }
      })
    }
  }, [scrollY, top, bottom, value, setActiveNav])
  return activeNav
}

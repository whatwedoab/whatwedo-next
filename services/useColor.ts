import { useAppContext } from './App.context'
import { useEffect } from 'react'
import { useViewportScroll } from 'framer-motion'
import { isScrolledIn, isTop } from './scroll.utils'
import { useRouter } from 'next/router'

export function useColor(
  href: string,
  color: string,
  top: number | null,
  bottom: number | null,
) {
  const { setColor } = useAppContext()
  const { scrollY } = useViewportScroll()
  const router = useRouter()

  useEffect(() => {
    if (router.asPath === href) {
      setColor(color)
    }
  }, [color, href, router, setColor])

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

import { useAppContext } from './App.context'
import { useEffect } from 'react'
import { useViewportScroll } from 'framer-motion'
import { isScrolledIn, isTop } from './scroll.utils'
import { useRouter } from 'next/router'

export function useBackgroundColor(
  href: string,
  color: string,
  top: number | null,
  bottom: number | null,
) {
  const { scrollY } = useViewportScroll()
  const { setBackgroundColor } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    if (router.asPath === href) {
      document.body.style.backgroundColor = color
      setBackgroundColor(color)
    }
  }, [color, href, router, setBackgroundColor])

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

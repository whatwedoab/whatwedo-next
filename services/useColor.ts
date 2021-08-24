import { HEADER_HEIGHT, useAppContext } from './App.context'
import { useEffect } from 'react'
import { useViewportScroll } from 'framer-motion'

export function useColor(
  color: string,
  top: number | null,
  bottom: number | null,
) {
  const { setColor } = useAppContext()
  const { scrollY } = useViewportScroll()

  useEffect(() => {
    const threshold = scrollY.get() + HEADER_HEIGHT / 2
    if (
      top !== null &&
      bottom !== null &&
      threshold >= top &&
      threshold < bottom
    ) {
      setColor(color)
    }
  }, [color, bottom, scrollY, setColor, top])

  useEffect(() => {
    if (top !== null && bottom !== null) {
      return scrollY.onChange((v) => {
        const threshold = v + HEADER_HEIGHT / 2
        if (threshold > top && threshold < bottom) {
          setColor(color)
        }
      })
    }
  }, [scrollY, top, setColor, color, bottom])
}

/*
export function useHeaderColor(
  _color: string,
  thresholdOffsetTop: number | null,
): { color: string; offsetTop: number | null } {
  const { setColor, color, setHeaderColors, headerColors } = useAppContext()
  const { scrollY } = useViewportScroll()
  const [currentOffsetTop, setCurrentOffsetTop] = useState<number | null>(null)

  useEffect(() => {
    setColor(_color)
    if (
      thresholdOffsetTop !== null &&
      !headerColors.some((h) => h.color === _color)
    ) {
      console.log('setting headerColor')
      setHeaderColors([
        ...headerColors.filter((h) => h.color !== _color),
        { color: _color, boundary: thresholdOffsetTop },
      ])
    }
  }, [_color, headerColors, setColor, setHeaderColors, thresholdOffsetTop])

  useEffect(() => {
    if (thresholdOffsetTop !== null) {
      return scrollY.onChange((v) => {
        if (v >= thresholdOffsetTop) {
          setColor(_color)
          setCurrentOffsetTop(thresholdOffsetTop - v)
        } else {
          setCurrentOffsetTop(null)
        }
      })
    }
  }, [scrollY, thresholdOffsetTop, color])

  return { color, offsetTop: currentOffsetTop }
}
*/

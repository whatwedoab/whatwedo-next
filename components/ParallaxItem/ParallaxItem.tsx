import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import s from '../ParallaxImages/ParallaxImages.module.scss'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

interface Props {
  children: any
  power?: number
  direction?: 'up' | 'down'
}

export function ParallaxItem(props: Props) {
  const { children, power = 1, direction = 'down' } = props
  const { scrollY } = useViewportScroll()
  const ref = useRef<HTMLDivElement>(null)
  const [offsetTop, setOffsetTop] = useState(0)

  useLayoutEffect(() => {
    if (!!ref.current) {
      setOffsetTop(ref.current.offsetTop)
    }
  }, [ref])

  const yInputRange = useMemo(() => {
    return direction === 'down'
      ? [offsetTop - 1500, offsetTop + 500]
      : [offsetTop + 1250, offsetTop - 250]
  }, [offsetTop, direction])

  const revealInputRange = useMemo(
    () => [offsetTop - 1000, offsetTop - 200],
    [offsetTop],
  )

  const y = useTransform(scrollY, yInputRange, [
    `${-100 * power}%`,
    `${100 * power}%`,
  ])
  const scale = useTransform(scrollY, revealInputRange, [0.7, 1])
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    if (!show) {
      const handler = scrollY.onChange(
        (v) => v >= offsetTop - (window?.innerHeight ?? 0) && setShow(true),
      )
      return () => handler()
    }
  }, [offsetTop, show, scrollY])

  return (
    <motion.div
      ref={ref}
      className={s.imageContainer}
      initial={{ y: 0, scale: 0.7, opacity: 0 }}
      style={{ y: y, scale }}
      animate={show && { opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}

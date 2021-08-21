import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import s from './NavButton.module.scss'
import { animate, motion, useMotionValue } from 'framer-motion'
import { useColor } from '../../../services/useColor'
import { useActiveNav } from '../../../services/useActiveNav'

interface Props {
  label: string
  href: string
}

export function NavButton(props: Props) {
  const { label, href } = props
  const color = useColor()
  const active = useActiveNav()

  const [containerElement, setContainerElement] =
    useState<HTMLDivElement | null>(null)
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    setTimeout(
      () =>
        !!containerElement &&
        setWidth(containerElement?.getBoundingClientRect().width),
      0,
    )
  }, [containerElement])

  const isActive = useMemo(() => {
    if (active === href) {
      return true
    }
    if (
      href === '/portfolio' &&
      ['/culinary-canvas', '/algomin', 'fragvist'].includes(active)
    ) {
      return true
    }
    return false
  }, [href, active])

  const selectedColor = useMotionValue(color)

  useEffect(() => {
    animate(selectedColor, color, { duration: 1 })
  }, [selectedColor, color])

  return (
    <motion.div
      className={s.container}
      ref={(r) => setContainerElement(r)}
      animate={{ color }}
    >
      <div className={s.wrapper}>
        {isActive && (
          <motion.div
            layoutId="navButton"
            className={s.selected}
            animate={{
              width,
              transition: { type: 'spring' },
            }}
            style={{ backgroundColor: selectedColor }}
            initial={false}
          />
        )}
        <Link href={href}>{label}</Link>
      </div>
    </motion.div>
  )
}

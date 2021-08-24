import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import s from './NavButton.module.scss'
import { animate, motion, useMotionValue } from 'framer-motion'
import { useActiveNav } from '../../../services/useActiveNav'
import { useAppContext } from '../../../services/App.context'

interface Props {
  label: string
  href: string
}

export function NavButton(props: Props) {
  const { label, href } = props
  const { color } = useAppContext()
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

  const isActive = useMemo(() => active === href, [href, active])

  const selectedColor = useMotionValue(color)

  useEffect(() => {
    animate(selectedColor, color, { ease: 'anticipate' })
  }, [selectedColor, color])

  return (
    <motion.div
      className={s.container}
      ref={(r) => setContainerElement(r)}
      animate={{ color }}
      transition={{ ease: 'anticipate' }}
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

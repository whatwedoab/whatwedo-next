import {motion} from 'framer-motion'
import React from 'react'
import s from './SlideIn.module.scss'

interface Props {
  children: any
  containerClassName?: string
  height: string
  delay?: number
  start?: boolean
  transition?: any
}

export function SlideIn(props: Props) {
  const {
    children,
    containerClassName,
    height,
    delay = 0,
    start = true,
    transition = { ease: 'anticipate' },
  } = props

  return (
    <span
      className={[s.container, containerClassName].join(' ')}
      style={{ height }}
    >
      <motion.span
        className={s.content}
        style={{ height }}
        initial={{ y: '100%' }}
        animate={{ y: start ? '0%' : '100%' }}
        transition={{ ...transition, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

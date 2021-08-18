import React from 'react'
import { motion } from 'framer-motion'
import s from './Tags.module.scss'

interface Props {
  tags: string[]
  delay?: number
  show?: boolean
  containerClassName?: string
}

export function Tags(props: Props) {
  const { tags, show = true, delay = 0, containerClassName } = props
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delay, delayChildren: delay },
    },
  }
  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.7 },
  }
  return (
    <motion.div
      className={[s.container, containerClassName].join(' ')}
      variants={container}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
    >
      {tags.map((tag) => (
        <motion.span key={tag} variants={item} className={s.tag}>
          {tag}
        </motion.span>
      ))}
    </motion.div>
  )
}

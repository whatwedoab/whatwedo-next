import React, { useMemo } from 'react'
import s from './MailtoButton.module.scss'
import { motion } from 'framer-motion'

interface Props {
  address?: string
  subject?: string
  body?: string
  className?: string
}

function buildURLQuery(obj: Record<string, string | undefined>) {
  const entries = Object.entries(obj).filter(([_, v]) => !!v) as [
    string,
    string,
  ][]
  if (!entries.length) {
    return ''
  }
  return `?${entries
    .map((pair) => pair.map(encodeURIComponent).join('='))
    .join('&')}`
}

export function MailtoButton(props: Props) {
  const { address = 'mikael@whatwedo.se', subject, body, className } = props

  const href = useMemo(
    () =>
      `mailto:${address}${buildURLQuery({
        subject,
        body,
      })}`,
    [address, subject, body],
  )

  return (
    <motion.a
      className={[s.button, className ?? ''].join(' ')}
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Contact
    </motion.a>
  )
}

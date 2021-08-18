import React from 'react'
import s from './Header.module.scss'
import Link from 'next/link'
import { useTheme } from '../../services/ThemeContext'
import { Logo } from '../Logo/Logo'
import { motion } from 'framer-motion'

export function Header() {
  const { color, showLogo } = useTheme()

  return (
    <header className={s.header}>
      <motion.div
        className={s.logoContainer}
        animate={{ fill: color, y: showLogo ? 0 : -100 }}
        initial={{ y: -100 }}
        transition={{ duration: 1, ease: 'anticipate' }}
      >
        <Link href="/" passHref={true}>
          <div>
            <Logo className={s.logoImg} height={40} />
          </div>
        </Link>
      </motion.div>
    </header>
  )
}

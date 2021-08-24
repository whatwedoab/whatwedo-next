import React from 'react'
import s from './Header.module.scss'
import Link from 'next/link'
import { Logo } from '../Logo/Logo'
import { motion } from 'framer-motion'
import { useShowLogo } from '../../services/useShowLogo'
import { useAppContext } from '../../services/App.context'

export function Header() {
  const { logoVisible } = useShowLogo()
  const { color } = useAppContext()

  return (
    <header className={s.header}>
      <motion.div
        className={s.logoContainer}
        animate={{ fill: color, y: logoVisible ? 0 : -100 }}
        initial={{ y: -100 }}
        transition={{ duration: 1, ease: 'anticipate' }}
      >
        <Link href="/" passHref={true}>
          <div>
            <Logo height={40} />
          </div>
        </Link>
      </motion.div>
    </header>
  )
}

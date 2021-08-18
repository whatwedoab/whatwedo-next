import React from 'react'
import s from './Nav.module.scss'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { NavButton } from './NavButton/NavButton'
import { useTheme } from '../../services/ThemeContext'

export function Nav() {
  const { showNav } = useTheme()

  const variants = {
    hidden: {
      x: '100%',
    },
    visible: {
      x: '0%',
    },
  }

  return (
    <AnimateSharedLayout>
      <motion.nav
        className={s.nav}
        initial="hidden"
        animate={showNav ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'anticipate' }}
      >
        <NavButton label="Portfolio" href="/portfolio" />
        <NavButton label="About" href="/about" />
        <NavButton label="Pricing" href="/pricing" />
        <NavButton label="Contact" href="/contact" />
      </motion.nav>
    </AnimateSharedLayout>
  )
}

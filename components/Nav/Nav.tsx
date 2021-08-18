import React from 'react'
import s from './Nav.module.scss'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { NavButton } from './NavButton/NavButton'
import { useShowNav } from '../../services/useShowNav'

export function Nav() {
  const { navVisible } = useShowNav()

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
        animate={navVisible ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'anticipate' }}
      >
        <NavButton label="Start" href="/" />
        <NavButton label="Portfolio" href="/portfolio" />
        <NavButton label="Pricing" href="/pricing" />
        <NavButton label="About" href="/about" />
        <NavButton label="Contact" href="/contact" />
      </motion.nav>
    </AnimateSharedLayout>
  )
}

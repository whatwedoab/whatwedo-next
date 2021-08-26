import React from 'react'
import s from './DesktopNav.module.scss'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { NavButton } from './NavButton/NavButton'
import { useShowNav } from '../../../services/useShowNav'

export function DesktopNav() {
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
        className={s.desktopNav}
        initial="hidden"
        animate={navVisible ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'anticipate' }}
      >
        <NavButton label="Start" href="/" />
        <NavButton label="Portfolio" href="/portfolio" />
        <NavButton label="Services" href="/services" />
        <NavButton label="About" href="/about" />
        <NavButton label="Contact" href="/contact" />
      </motion.nav>
    </AnimateSharedLayout>
  )
}

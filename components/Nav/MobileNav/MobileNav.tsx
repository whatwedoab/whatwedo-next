import React, { useCallback, useEffect, useMemo, useState } from 'react'
import s from './MobileNav.module.scss'
import { NavButton } from '../DesktopNav/NavButton/NavButton'
import { motion } from 'framer-motion'
import { useAppContext } from '../../../services/App.context'

export function MobileNav() {
  const [opened, setOpened] = useState<boolean>(false)
  const { color, backgroundColor, setMobileNavOpened } = useAppContext()

  useEffect(() => {
    document.body.style.overflowY = opened ? 'hidden' : 'initial'
  }, [opened, setMobileNavOpened])

  const buttonClassNames = useMemo(() => {
    const classes = [s.button]
    if (opened) {
      classes.push(s.opened)
    }
    return classes.join(' ')
  }, [opened])

  const menuClassNames = useMemo(() => {
    const classes = [s.menuContainer]
    if (opened) {
      classes.push(s.opened)
    }
    return classes.join(' ')
  }, [opened])

  const onPress = useCallback(() => setTimeout(() => setOpened(false), 500), [])

  return (
    <>
      <nav className={s.container}>
        <motion.button
          onClick={() => setOpened(!opened)}
          className={buttonClassNames}
          style={{ backgroundColor: color }}
        />
        <motion.div className={menuClassNames} style={{ backgroundColor }}>
          <ul>
            <li>
              <NavButton label="Home" href="/" onPress={onPress} />
            </li>
            <li>
              <NavButton
                label="Portfolio"
                href="/portfolio"
                onPress={onPress}
              />
            </li>
            <li>
              <NavButton label="Services" href="/services" onPress={onPress} />
            </li>
            <li>
              <NavButton label="About" href="/about" onPress={onPress} />
            </li>
            <li>
              <NavButton label="Contact" href="/contact" onPress={onPress} />
            </li>
          </ul>
        </motion.div>
      </nav>
    </>
  )
}

import React from 'react'
import s from './Nav.module.scss'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { NavButton } from './NavButton/NavButton'
import { useShowNav } from '../../services/useShowNav'

export function Nav() {
  const { navVisible } = useShowNav()
  /*
  const { headerColors } = useAppContext()
  const { scrollY } = useViewportScroll()
  const [currentScrollY, setCurrentScrollY] = useState<number>()
  useEffect(() => scrollY.onChange((v) => setCurrentScrollY(v)), [scrollY])
*/

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
        {/*<motion.div
          className={s.buttonContainer}
          style={{
            color: headerColors[0]?.color,
            maxHeight: !!currentScrollY
              ? currentScrollY + HEADER_HEIGHT - headerColors[0]?.boundary
              : 0,
          }}
        >
          <div className={s.buttonWrapper}>
            <NavButton label="Start" href="/" />
          </div>
        </motion.div>*/}
        <NavButton label="Portfolio" href="/portfolio" />
        <NavButton label="Services" href="/services" />
        <NavButton label="About" href="/about" />
        <NavButton label="Contact" href="/contact" />
      </motion.nav>
    </AnimateSharedLayout>
  )
}

import React, { useCallback, useEffect, useRef } from 'react'
import s from './Home.module.scss'
import { ImageCarousel } from '../components/ImageCarousel/ImageCarousel'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Logo } from '../components/Logo/Logo'
import { useScrollIn } from '../services/useScrollIn'
import { useColor } from '../services/useColor'
import { useActiveNav } from '../services/useActiveNav'
import { PAGE_IN_VIEW_OPTIONS } from '../services/App.context'
import { COLOR } from '../styles/COLOR'
import { useShowLogo } from '../services/useShowLogo'
import { useShowNav } from '../services/useShowNav'
import { useOffsets } from '../services/useOffsets'
import { useBackgroundColor } from '../services/useBackgroundColor'

export function Home() {
  const [inViewRef, inView, entry] = useInView(PAGE_IN_VIEW_OPTIONS)
  const ref = useRef<HTMLElement>()

  const setRefs = useCallback(
    (node: HTMLElement) => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef],
  )
  const { top, bottom } = useOffsets(ref)
  useBackgroundColor(COLOR.BLUE_LIGHT, top, bottom)
  useColor(COLOR.BLACK, top, bottom)
  useActiveNav('/', top, bottom)
  useScrollIn(inView, entry)

  const { showLogo } = useShowLogo(false)
  const { showNav } = useShowNav(false)

  useEffect(() => {
    setTimeout(() => showLogo(true), 3000)
    setTimeout(() => showNav(true), 2000)
  }, [])

  return (
    <>
      <motion.article
        key="Home"
        ref={setRefs}
        className={s.article}
        initial={{ scale: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5 } }}
          transition={{ ease: 'anticipate' }}
          className={s.h1}
        >
          Hi!
          <br />
          <br />
          I&apos;m a freelancing coder and designer. I create digital things.
          <br />
          <br />
          Feel free to browse some of my <Link href="/portfolio">work</Link>,
          read more <Link href="/about">about me</Link> or{' '}
          <Link href="/contact">get in touch</Link>.
        </motion.h1>

        <motion.section
          className={s.carouselContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <ImageCarousel
            srcs={[
              '/assets/wwd-logo-red.png',
              '/assets/culinary-canvas-magazine.jpg',
              '/assets/algomin/algomin-imac.jpg',
              '/assets/mikael3.jpg',
              '/assets/mikael2.jpg',
              '/assets/culinary-canvas-computers.jpg',
            ]}
          />
        </motion.section>
      </motion.article>
      <motion.div
        className={s.logoContainer}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
        }}
        transition={{ delay: 1 }}
      >
        <Logo style={{ fill: COLOR.CORAL }} />
      </motion.div>
    </>
  )
}

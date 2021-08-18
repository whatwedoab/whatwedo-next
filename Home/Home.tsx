import React, { useEffect } from 'react'
import s from './Home.module.scss'
import { ImageCarousel } from '../components/ImageCarousel/ImageCarousel'
import { useTheme } from '../services/ThemeContext'
import { useNavState } from '../components/Nav/NavStateContext'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Logo } from '../components/Logo/Logo'
import { SlideIn } from '../components/SlideIn/SlideIn'
import Link from 'next/link'

export function Home() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const { setShowLogo, setShowNav } = useTheme(
    { backgroundColor: '#B1F2FC', color: '#000' },
    inView,
  )
  useNavState('/', inView)

  useEffect(() => {
    setTimeout(() => setShowLogo(true), 3000)
    setTimeout(() => {
      setShowNav(true)
    }, 2000)
  }, [setShowLogo, setShowNav])

  return (
    <>
      <motion.div
        className={s.logoContainer}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
        }}
        transition={{ delay: 1 }}
      >
        <Logo style={{ fill: '#FF7276' }} />
      </motion.div>
      <div className={s.container} ref={ref}>
        <h1 className={s.h1}>
          <SlideIn height={'14vmin'} delay={2}>
            Hi 👋
          </SlideIn>
          <SlideIn height={'21vmin'} delay={3}>
            I&apos;m a digital developer and designer.
          </SlideIn>
          <SlideIn height={'21vmin'} delay={4}>
            Feel free to read more <Link href="/about">about</Link> me, browse
            some of my <Link href="/portfolio">work</Link> or{' '}
            <Link href="/contact">get in touch</Link>.
          </SlideIn>
        </h1>

        <motion.div
          className={s.carouselContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
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
        </motion.div>
      </div>
    </>
  )
}

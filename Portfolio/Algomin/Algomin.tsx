import React, { useEffect, useState } from 'react'
import s from './Algomin.module.scss'
import { useWindowSize } from '../../services/useWindowSize'
import { ImageMosaic } from '../../components/ImageMosaic/ImageMosaic'
import { Tags } from '../../components/Tags/Tags'
import { ParallaxImages } from '../../components/ParallaxImages/ParallaxImages'
import {
  motion,
  useTransform,
  useViewportScroll,
  Variants,
} from 'framer-motion'
import { Image } from '../../components/Image/Image'
import { useBackgroundColor } from '../../services/useBackgroundColor'
import { useInView } from 'react-intersection-observer'
import { useColor } from '../../services/useColor'
import { useActiveNav } from '../../services/useActiveNav'
import { COLOR } from '../../styles/COLOR'

const parallaxImages = [
  {
    alt: 'Algomin.se',
    src: '/assets/algomin/algomin-devices.jpg',
  },
  {
    alt: 'Algomin.se',
    src: '/assets/algomin/algomin-imac.jpg',
  },
]

const mosaicHrefs = Array.from(new Array(6)).map(
  (_, i) => `/assets/algomin/algomin-mosaic-${i + 1}.png`,
)

export default function Algomin() {
  const { height } = useWindowSize()
  const [mockupLoaded, setMockupLoaded] = useState<boolean>(false)
  const { ref, inView } = useInView()
  useBackgroundColor(COLOR.WHITE, inView)
  useColor(COLOR.BLACK, inView)
  useActiveNav('/portfolio', inView)
  const { scrollYProgress } = useViewportScroll()

  useEffect(() => scrollYProgress.onChange(console.log), [scrollYProgress])

  const blobb1Y = useTransform(scrollYProgress, [0, 1], ['50%', '-50%'])
  const blobb2Y = useTransform(scrollYProgress, [0, 1], ['-50%', '50%'])

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
  }

  const mockupVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      <motion.div
        ref={ref}
        className={s.backgroundMockup}
        initial="hidden"
        animate={mockupLoaded ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
        variants={mockupVariants}
      >
        <Image
          alt="Algomin phone"
          objectFit="cover"
          objectPosition="left"
          layout="fill"
          src="/assets/algomin/algomin-phone.jpg"
          priority
          onLoadingComplete={() => setMockupLoaded(true)}
        />
      </motion.div>

      <motion.div
        className={s.blobb1}
        animate={{
          rotateX: 20,
          rotateZ: 50,
          scaleX: 1.1,
          translateY: 100,
        }}
        style={{ y: blobb1Y }}
        transition={{
          ease: 'easeInOut',
          duration: 5,
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 0,
        }}
      >
        <Image
          alt="Algomin blobb"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="/assets/algomin/algomin-blobb-1.svg"
        />
      </motion.div>

      <motion.div
        className={s.blobb2}
        animate={{
          rotateX: -40,
          rotateZ: 30,
          translateY: -150,
        }}
        style={{ y: blobb2Y }}
        transition={{
          ease: 'easeInOut',
          duration: 6,
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 0,
        }}
      >
        <Image
          alt="Algomin blobb"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="/assets/algomin/algomin-blobb-2.svg"
        />
      </motion.div>

      <article className={s.article}>
        <motion.section
          className={s.nameContainer}
          initial="hidden"
          animate={mockupLoaded ? 'visible' : 'hidden'}
          transition={{ duration: 3, ease: 'anticipate' }}
          variants={nameVariants}
        >
          <a
            href="https://www.algomin.se"
            title="Algomin"
            target="_blank"
            rel="noreferrer"
          >
            <h1>Algomin</h1>
          </a>
        </motion.section>

        <Tags
          containerClassName={s.tagsContainer}
          delay={1.5}
          tags={['web design', 'responsive']}
        />

        {!!height && <ParallaxImages images={parallaxImages} />}

        <section className={s.contentContainer}>
          <ImageMosaic hrefs={mosaicHrefs} columns={3} />
        </section>

        <section className={s.contentContainer}>
          <h3>The job</h3>
          <p>
            Algomin is a leading, environment friendly producer of soil
            improvement and fertilizer, sold in stores across the nordic
            country.
          </p>
          <p>
            After having made a touch up of their branding, they reached out to
            me to give their web site a face lift.
          </p>
          <p>
            Illustrations from the packaging design were used together with a
            new water drop inspired graphical element (water is an important
            component in Algomin&apos;s products and branding)
          </p>
          <p>
            <a
              href="https://www.algomin.se"
              title="Algomin.se"
              target="_blank"
              rel="noreferrer"
            >
              https://www.algomin.se
            </a>
          </p>
        </section>
      </article>
    </>
  )
}

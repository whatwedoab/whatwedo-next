import React, { useState } from 'react'
import s from './Algomin.module.scss'
import { useWindowSize } from '../../services/useWindowSize'
import { ImageMosaic } from '../../components/ImageMosaic/ImageMosaic'
import { Tags } from '../../components/Tags/Tags'
import { ParallaxImages } from '../../components/ParallaxImages/ParallaxImages'
import { motion, Variants } from 'framer-motion'
import { Image } from '../../components/Image/Image'

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

      <section className={s.section}>
        <motion.div
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
        </motion.div>

        <Tags containerClassName={s.tagsContainer} delay={1.5} tags={['web design', 'responsive']} />

        {!!height && <ParallaxImages images={parallaxImages} />}

        <div className={s.contentContainer}>
          <ImageMosaic hrefs={mosaicHrefs} columns={3} />
        </div>

        <div className={s.contentContainer}>
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
        </div>
      </section>
    </>
  )
}

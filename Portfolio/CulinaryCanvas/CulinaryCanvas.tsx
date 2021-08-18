import React, { useState } from 'react'
import s from './CulinaryCanvas.module.scss'
import { useWindowSize } from '../../services/useWindowSize'
import { ImageMosaic } from '../../components/ImageMosaic/ImageMosaic'
import { Tags } from '../../components/Tags/Tags'
import { ParallaxImages } from '../../components/ParallaxImages/ParallaxImages'
import { motion, Variants } from 'framer-motion'
import { Image } from '../../components/Image/Image'
import { useTheme } from '../../services/ThemeContext'

const parallaxImages = [
  {
    alt: 'Culinary Canvas magazine. Photography by Johan Stahlberg',
    src: '/assets/culinary-canvas-magazine.jpg',
  },
  {
    alt: 'Culinary Canvas web pages. Photography by Johan Stahlberg',
    src: '/assets/culinary-canvas-computers.jpg',
  },
]

const mosaicHrefs = Array.from(new Array(12)).map(
  (_, i) => `/assets/culinary-canvas/mosaic/Web 1920 ${i + 1}.jpg`,
)

export default function CulinaryCanvas() {
  const { height } = useWindowSize()
  const [logoLoaded, setLogoLoaded] = useState<boolean>(false)
  useTheme({backgroundColor: '#f2cfcf'})

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className={s.section}>
      <motion.div
        className={s.triangle}
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'tween', ease: 'linear' }}
      />
      <motion.div
        className={s.logoContainer}
        initial="hidden"
        animate={logoLoaded ? 'visible' : 'hidden'}
        transition={{ type: 'tween', duration: 7, ease: 'anticipate' }}
        variants={logoVariants}
      >
        <a
          href="https://culinary-canvas.com"
          title="Culinary Canvas"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="Culinary Canvas logo"
            objectFit="contain"
            layout="fill"
            src="/assets/culinary-canvas-logo.svg"
            priority
            onLoadingComplete={() => setLogoLoaded(true)}
          />
        </a>
      </motion.div>

      <Tags
        delay={1.5}
        tags={['logo', 'branding', 'web design', 'web development', 'CMS']}
      />

      {!!height && <ParallaxImages images={parallaxImages} />}

      <div className={s.contentContainer}>
        <ImageMosaic hrefs={mosaicHrefs} />
      </div>

      <div className={s.contentContainer}>
        <h3>The job</h3>
        <p>
          Culinary Canvas celebrates the creativity of culinary and beverage
          professionals around the world. High-end editorial content with
          vibrant and eye-catching photography.
        </p>
        <h4>Logo</h4>
        <p>
          A modern brand, with lots of space for creativity. The lower stripe in
          the mark represents the shelf of an easel; the space between the shelf
          and the C symbolises the blank canvas. The logotype is made with the
          Sofia Pro type and sports all capital letters with a wide
          letter-spacing.
        </p>
        <h4>Web</h4>
        <p>
          The imagery is the star content of Culinary Canvas. Emphasis on the
          layout is therefore to give the photos room to shine. This is coupled
          with type faces that are picked to give a modern feel, while also
          offering diversity enough to create expressive article layouts.
        </p>
        <h4>Tech</h4>
        <p>
          Culinary Canvas runs in the cloud. This allows the site to scale
          without worrying about hardware capacity and limitations, but instead
          leverage the awesome computing power offered by the dragons of the
          tech industry.
        </p>
        <p>
          The content, the articles, is curated with our own custom made CMS.
          It&apos;s tailor made to fit the current needs while giving us the
          full control to adjust and tinker it to future needs.{' '}
        </p>
        <p>
          <i>
            Contact me if you&apos;re interested in learning more about the
            stack and the technical solution.
          </i>
        </p>
        <p>
          <a
            href="https://culinary-canvas.com"
            title="Culinary Canvas"
            target="_blank"
            rel="noreferrer"
          >
            https://culinary-canvas.com
          </a>
        </p>
      </div>
    </section>
  )
}

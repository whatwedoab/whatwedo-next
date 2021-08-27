import React, { useEffect, useRef } from 'react'
import s from './Algomin.module.scss'
import { Tags } from '../../components/Tags/Tags'
import { useViewportScroll } from 'framer-motion'
import { Image } from '../../components/Image/Image'
import { useBackgroundColor } from '../../services/useBackgroundColor'
import { useColor } from '../../services/useColor'
import { useActiveNav } from '../../services/useActiveNav'
import { COLOR } from '../../styles/COLOR'
import { useOffsets } from '../../services/useOffsets'

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
  const ref = useRef<HTMLDivElement>(null)
  const { top, bottom } = useOffsets(ref)
  useBackgroundColor('/algomin', COLOR.WHITE, top, bottom)
  useColor('/algomin',COLOR.ALGOMIN.BLUE, top, bottom)
  useActiveNav('/portfolio', top, bottom)
  const { scrollYProgress } = useViewportScroll()

  useEffect(() => scrollYProgress.onChange(console.log), [scrollYProgress])

  return (
    <>
      <div ref={ref} className={s.backgroundMockup}>
        <Image
          alt="Algomin phone"
          objectFit="cover"
          layout="fill"
          src="/assets/algomin/algomin-phone-mockup-1.png"
          priority
          quality={100}
        />
        <div className={s.overlay} />
      </div>

      <div className={s.blobb1}>
        <Image
          alt="Algomin blobb"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="/assets/algomin/algomin-blobb-1.svg"
        />
      </div>

      <div className={s.blobb2}>
        <Image
          alt="Algomin blobb"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="/assets/algomin/algomin-blobb-2.svg"
        />
      </div>

      <div className={s.blobb3}>
        <Image
          alt="Algomin blobb"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="/assets/algomin/algomin-blobb-2.svg"
        />
      </div>

      <article className={s.article}>
        <section className={s.nameContainer}>
          <h1>Algomin</h1>
          <Tags
            containerClassName={s.tagsContainer}
            delay={1.5}
            tags={['web design', 'responsive']}
          />
        </section>

        <section className={s.textContainer}>
          <p>
            Algomin is a leading, environment friendly producer of soil
            improvement and fertilizer, sold in stores across the nordic
            country.
          </p>
          <p>
            After having made a touch up of their branding, they reached out to
            me to give their web site a face lift.
          </p>
        </section>

        <section className={s.mockup1Container}>
          <Image
            src={'/assets/algomin/algomin-web-2.png'}
            alt="Algomin landing page"
            layout="fill"
            objectFit={'contain'}
          />
        </section>

        <section className={s.textContainer}>
          <p>
            The grass illustrations that is seen on their new package design,
            have been trimmed to fit on screen instead. They serve as a frame to
            the main screens, and brings life into the design.
          </p>
        </section>

        <section className={s.mockup2Container}>
          <Image
            src={'/assets/algomin/algomin-multidevices-mockup-1.png'}
            alt="Algomin landing page"
            layout="fill"
            objectFit="cover"
          />
          <Image
            src={'/assets/algomin/algomin-web-mobile-1.png'}
            alt="Algomin landing page"
            layout="fill"
            objectFit="cover"
          />
        </section>

        <section className={s.textContainer}>
          <p>
            It&apos;s not all about the grass though. Water is a central
            component in Algomin&apos;s products and branding, which is where
            the water drop inspired graphical element comes from. It serves as a
            backdrop to the content.
          </p>
        </section>

        <section className={s.mockup2Container}>
          <Image
            src={'/assets/algomin/algomin-web-5.png'}
            alt="Algomin landing page"
            layout="fill"
            objectFit="cover"
          />
          <Image
            src={'/assets/algomin/algomin-phone-mockup-1.png'}
            alt="Algomin landing page"
            layout="fill"
            objectFit="cover"
          />
        </section>

        <section className={s.textContainer}>
          <p>
            Visit their website at{' '}
            <a href="https://www.algomin.se" target="_blank" rel="noreferrer">
              www.algomin.se
            </a>{' '}
            to see it in action.
          </p>
        </section>
      </article>
    </>
  )
}

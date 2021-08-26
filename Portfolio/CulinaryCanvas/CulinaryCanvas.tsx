import React, { useCallback, useRef, useState } from 'react'
import s from './CulinaryCanvas.module.scss'
import { useWindowSize } from '../../services/useWindowSize'
import { Tags } from '../../components/Tags/Tags'
import { motion, Variants } from 'framer-motion'
import { Image } from '../../components/Image/Image'
import { useInView } from 'react-intersection-observer'
import { useBackgroundColor } from '../../services/useBackgroundColor'
import { useColor } from '../../services/useColor'
import { useActiveNav } from '../../services/useActiveNav'
import { COLOR } from '../../styles/COLOR'
import { PAGE_IN_VIEW_OPTIONS } from '../../services/App.context'
import { useOffsets } from '../../services/useOffsets'
import Link from 'next/link'

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
  useBackgroundColor(COLOR.CULINARY_CANVAS.PINK_LIGHT, top, bottom)
  useColor(COLOR.BLACK, top, bottom)
  useActiveNav('/portfolio', top, bottom)

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <article className={s.article} ref={setRefs}>
      <motion.div
        layoutId="triangle"
        className={s.triangle}
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'tween', ease: 'linear' }}
      />
      <section className={s.nameContainer}>
        <Image
          alt="Culinary Canvas logo"
          objectFit="contain"
          layout="fill"
          src="/assets/culinary-canvas/culinary-canvas-logo.svg"
          priority
          containerClassName={s.logoContainer}
          onLoadingComplete={() => setLogoLoaded(true)}
        />
        <Tags
          delay={1.5}
          tags={['logo', 'branding', 'web design', 'web development', 'CMS']}
          containerClassName={s.tagsContainer}
        />
      </section>

      <section className={s.textContainer}>
        <p>
          Culinary Canvas celebrates the creativity of culinary and beverage
          professionals around the world. High-end editorial content with
          vibrant and eye-catching photography.
        </p>
      </section>

      <section className={s.mockup1Container}>
        <Image
          src={'/assets/culinary-canvas/culinary-canvas-spreads-1.png'}
          alt="Culinary Canvas visual identity"
          layout="fill"
          objectFit={'contain'}
        />
      </section>

      <section className={s.textContainer}>
        <p>
          A modern brand, with lots of space for creativity. The lower stripe in
          the mark represents the shelf of an easel; the space between the shelf
          and the C symbolises the blank canvas. The logotype is made with the
          Sofia Pro type and sports all capital letters with a wide
          letter-spacing.
        </p>
      </section>

      <section className={s.mockup1Container}>
        <Image
          src={'/assets/culinary-canvas/culinary-canvas-debossed.jpg'}
          alt="Culinary Canvas"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <section className={s.textContainer}>
        <p>
          The imagery is the star content of Culinary Canvas. Emphasis on the
          layout is therefore to give the photos room to shine. This is coupled
          with type faces that are picked to give a modern feel, while also
          offering diversity enough to create expressive article layouts.
        </p>
      </section>

      <section className={s.mockup1Container}>
        <Image
          src={'/assets/culinary-canvas/culinary-canvas-web-1.png'}
          alt="Culinary Canvas web site"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <section className={s.textContainer}>
        <p>
          Culinary Canvas runs in the cloud. This allows the site to scale
          without worrying about hardware capacity and limitations, but instead
          leverage the awesome computing power offered by the dragons of the
          tech industry.
        </p>
        <p>
          The content, the articles, are created with our own custom made CMS.
          It&apos;s tailor made to fit the current needs while giving us the
          full control to adjust and tinker it to future needs.
        </p>
      </section>

      <section className={s.mockup2Container}>
        <Image
          src={'/assets/culinary-canvas/culinary-canvas-web-mobile-1.png'}
          alt="Culinary Canvas web site"
          layout="fill"
          objectFit="cover"
        />
        <Image
          src={'/assets/culinary-canvas/culinary-canvas-magazine-1.png'}
          alt="Culinary Canvas"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <section className={s.textContainer}>
        <p>
          Visit the Culinary Canvas website at{' '}
          <a
            href="https://www.culinary-canvas.com"
            target="_blank"
            rel="noreferrer"
          >
            www.culinary-canvas.com
          </a>{' '}
          to see it in action.
        </p>
        <p>
          <i>
            <Link href="/contact">Contact me</Link> if you&apos;re interested in
            learning more about the stack and the technical solution.
          </i>
        </p>
      </section>
    </article>

    /*
      <h3>The brief</h3>
      <section className={s.contentContainer}>
        <p>
          Culinary Canvas celebrates the creativity of culinary and beverage
          professionals around the world. High-end editorial content with
          vibrant and eye-catching photography.
        </p>
      </section>

      <section className={s.columnContentContainer}>
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
      </section>

      <h3>
        <a
          href="https://culinary-canvas.com"
          title="Culinary Canvas"
          target="_blank"
          rel="noreferrer"
        >
          culinary-canvas.com
        </a>
      </h3>

      <section className={s.contentContainer}>
        <ImageMosaic hrefs={mosaicHrefs} />
      </section>
    </article>
*/
  )
}

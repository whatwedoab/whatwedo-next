import React, { useCallback, useRef } from 'react'
import { PortfolioItem } from './PortfolioItem/PortfolioItem'
import { useInView } from 'react-intersection-observer'
import s from './Portfolio.module.scss'
import { PAGE_IN_VIEW_OPTIONS } from '../services/App.context'
import { useBackgroundColor } from '../services/useBackgroundColor'
import { useColor } from '../services/useColor'
import { useActiveNav } from '../services/useActiveNav'
import { COLOR } from '../styles/COLOR'
import { MorePortfolioItem } from './MorePortfolioItem/MorePortfolioItem'
import { useOffsets } from '../services/useOffsets'
import { useScrollIn } from '../services/useScrollIn'

export default function Portfolio() {
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
  useBackgroundColor(COLOR.WHITE, top, bottom)
  useColor(COLOR.BLACK, top, bottom)
  useActiveNav('/portfolio', top, bottom)
  useScrollIn(inView, entry)

  return (
    <article ref={setRefs} className={s.article}>
      <h1>Portfolio</h1>
      <PortfolioItem
        name="Culinary Canvas"
        tags={['logo', 'branding', 'web design', 'web development', 'CMS']}
        imageSrc="/assets/culinary-canvas-magazine.jpg"
        href="/culinary-canvas"
      />
      <PortfolioItem
        name="Algomin"
        tags={['web design']}
        imageSrc="/assets/algomin/algomin-devices.jpg"
        href="/algomin"
      />
      <PortfolioItem
        name="Frågvist"
        tags={['logo', 'visual identity']}
        imageSrc="/assets/fragvist/fragvist-logomark-gradient.svg"
        href="/fragvist"
      />

      <section className={s.otherContainer}>
        <h2>More</h2>

        <MorePortfolioItem
          name="Lavendo"
          linkName="lavendo.se"
          href="https://www.lavendo.se"
          description="Web design and setup in Wordpress"
          tags={['web design', 'wordpress']}
          image="/assets/portfolio-lavendo.jpg"
        />

        <MorePortfolioItem
          name="Strukturator"
          linkName="strukturator.se"
          href="https://www.strukturator.se"
          description="Logo, animations and web design. Setup in Wordpress using Elementor"
          tags={['web design', 'wordpress', 'elementor', 'logo']}
          image="/assets/portfolio-strukturator.jpg"
        />

        <MorePortfolioItem
          name="Calou"
          linkName="calou.se"
          href="https://www.strukturator.se"
          description="Setup email marketing automation in Kalviyo for Calou's Shopify web shop. 'In stock', 'Review', 'Thank you' and 'Welcome'-flows."
          tags={[
            'Email marketing',
            'Automation',
            'Email design',
            'Klaviyo',
            'Shopify',
          ]}
          image="/assets/portfolio-calou.jpg"
        />
      </section>
    </article>
  )
}

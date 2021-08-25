import React, { useCallback, useRef } from 'react'
import { PortfolioItem } from './PortfolioItem/PortfolioItem'
import { useInView } from 'react-intersection-observer'
import s from './Portfolio.module.scss'
import { PAGE_IN_VIEW_OPTIONS } from '../services/App.context'
import { useBackgroundColor } from '../services/useBackgroundColor'
import { useColor } from '../services/useColor'
import { useActiveNav } from '../services/useActiveNav'
import { COLOR } from '../styles/COLOR'
import { useOffsets } from '../services/useOffsets'
import { useScrollIn } from '../services/useScrollIn'
import { Tags } from '../components/Tags/Tags'
import { Image } from '../components/Image/Image'
import AppWindowNext from '@streamlinehq/streamlinehq/img/streamline-regular/programing-apps-websites/apps-window/app-window-next.svg'

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
        tags={[
          'logo',
          'branding',
          'web design',
          'web development',
          'Custom CMS',
          'React',
          'Firebase',
        ]}
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

      <h2>More</h2>

      <PortfolioItem
        small
        name="Lavendo"
        href="https://www.lavendo.se"
        tags={['web design', 'wordpress']}
        imageSrc="/assets/portfolio-lavendo.jpg"
      />

      <PortfolioItem
        small
        name="Strukturator"
        href="https://www.strukturator.se"
        tags={['web design', 'wordpress', 'elementor', 'logo']}
        imageSrc="/assets/portfolio-strukturator.jpg"
      />

      <PortfolioItem
        small
        name="Calou"
        href="https://www.strukturator.se"
        tags={[
          'Email marketing',
          'Automation',
          'Email design',
          'Klaviyo',
          'Shopify',
        ]}
        imageSrc="/assets/portfolio-calou.jpg"
      />

      <ul>
        <li>
          <h4>
            Abalon Relevate
            <a href="https://www.abalon.se" target="_blank" rel="noreferrer">
              <Image
                src={AppWindowNext}
                alt="Abalon web site"
                width={20}
                height={20}
                objectPosition="bottom center"
              />
            </a>
          </h4>
          <Tags
            tags={[
              'enterprise web application',
              'Management',
              'UI design',
              're-branding',
              'angularjs',
              'java',
              'mssql',
              'CRM',
              'DM automation',
            ]}
          />
        </li>
        <li>
          <h4>
            GMP 365™
            <a
              href="https://www.gmp-systems.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={AppWindowNext}
                alt="Gmp Systems web site"
                width={20}
                height={20}
                objectPosition="bottom center"
              />
            </a>
          </h4>
          <Tags
            tags={['enterprise web application', 'angular', 'java', 'mongoDb']}
          />
        </li>
      </ul>
    </article>
  )
}

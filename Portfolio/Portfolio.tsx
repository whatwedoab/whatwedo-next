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
import CulinaryCanvasPreview from './CulinaryCanvas/CulinaryCanvasPreview/CulinaryCanvasPreview'
import FragvistPreview from './Fragvist/FragvistPreview/FragvistPreview'
import AlgominPreview from './Algomin/AlgominPreview/AlgominPreview'

const HREF = '/portfolio'
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
  useBackgroundColor(HREF, COLOR.WHITE, top, bottom)
  useColor(HREF, COLOR.BLACK, top, bottom)
  useActiveNav(HREF, top, bottom)
  useScrollIn(inView, entry)

  return (
    <article ref={setRefs} className={s.article}>
      <h1>Portfolio</h1>
      <section className={s.section}>
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
          pageRenderer={() => <CulinaryCanvasPreview />}
          href="/culinary-canvas"
        />
        <PortfolioItem
          name="Algomin"
          tags={['web design']}
          pageRenderer={() => <AlgominPreview />}
          href="/algomin"
        />
        <PortfolioItem
          name="Frågvist"
          tags={['logo', 'visual identity']}
          pageRenderer={() => <FragvistPreview />}
          href="/fragvist"
        />
      </section>

      <section className={s.moreContainer}>
        <ul>
          <li>
            <h2>More references</h2>
          </li>
          <li>
            <h3>
              Lavendo
              <a href="https://www.lavendo.se" target="_blank" rel="noreferrer">
                <Image
                  src={AppWindowNext}
                  alt="Lavendo web site"
                  width={20}
                  height={20}
                  objectPosition="bottom center"
                />
              </a>
            </h3>
            <Tags tags={['web design', 'wordpress']} />
          </li>

          <li>
            <a
              href="https://www.strukturator.se"
              target="_blank"
              rel="noreferrer"
            >
              <h3>
                Strukturator
                <Image
                  src={AppWindowNext}
                  alt="Strukturator web site"
                  width={20}
                  height={20}
                  objectPosition="bottom center"
                />
              </h3>
            </a>
            <Tags
              tags={[
                'web design',
                'visual identity',
                'report design',
                'wordpress',
                'elementor',
              ]}
            />
          </li>

          <li>
            <h3>
              Calou
              <a href="https://www.calou.se" target="_blank" rel="noreferrer">
                <Image
                  src={AppWindowNext}
                  alt="Calou web site"
                  width={20}
                  height={20}
                  objectPosition="bottom center"
                />
              </a>
            </h3>
            <Tags
              tags={[
                'Email marketing',
                'Automation',
                'Email design',
                'Klaviyo',
                'Shopify',
              ]}
            />
          </li>

          <li>
            <h3>
              Trime
              <a href="https://www.trime.app" target="_blank" rel="noreferrer">
                <Image
                  src={AppWindowNext}
                  alt="Trime web site"
                  width={20}
                  height={20}
                  objectPosition="bottom center"
                />
              </a>
            </h3>
            <Tags tags={['mobile app', 'react native', 'firebase']} />
          </li>

          <li>
            <h3>
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
            </h3>
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
                'Full time employment',
              ]}
            />
          </li>

          <li>
            <h3>
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
            </h3>
            <Tags
              tags={[
                'enterprise web application',
                'angular',
                'java',
                'mongoDb',
                'Full time employment',
              ]}
            />
          </li>
        </ul>
      </section>
    </article>
  )
}

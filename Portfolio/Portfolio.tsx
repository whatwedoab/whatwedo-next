import React from 'react'
import { PortfolioItem } from './PortfolioItem/PortfolioItem'
import { useInView } from 'react-intersection-observer'
import { useScrollIn } from '../services/useScrollIn'
import s from './Portfolio.module.scss'
import { PAGE_IN_VIEW_OPTIONS } from '../services/App.context'
import { useBackgroundColor } from '../services/useBackgroundColor'
import { useColor } from '../services/useColor'
import { useActiveNav } from '../services/useActiveNav'
import { COLOR } from '../styles/COLOR'

export default function Portfolio() {
  const { ref, inView, entry } = useInView(PAGE_IN_VIEW_OPTIONS)
  useBackgroundColor(COLOR.WHITE, inView)
  useColor(COLOR.BLACK, inView)
  useActiveNav('/portfolio', inView)
  useScrollIn(inView, entry)

  return (
    <article ref={ref} className={s.article}>
      <h1 className={s.h1}>Portfolio</h1>
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
    </article>
  )
}

import React, { useCallback, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { PAGE_IN_VIEW_OPTIONS } from '../services/App.context'
import { useBackgroundColor } from '../services/useBackgroundColor'
import { useColor } from '../services/useColor'
import { useActiveNav } from '../services/useActiveNav'
import { COLOR } from '../styles/COLOR'
import s from './About.module.scss'
import { Image } from '../components/Image/Image'
import Link from 'next/link'
import { useOffsets } from '../services/useOffsets'

export function About() {
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
  useBackgroundColor(COLOR.CORAL, top, bottom)
  useColor(COLOR.YELLOW_LIGHT, top, bottom)
  useActiveNav('/about', top, bottom)

  return (
    <article className={s.container} ref={setRefs}>
      <h1>About</h1>
      <section className={s.gridContainer}>
        <p className={s.topLeftP}>
          My name is Mikael. I&apos;m a full stack developer by trade and a
          graphic designer by heart. <br />I have more than fifteen years of
          experience developing and designing apps, web sites and assets.
        </p>
        <Image
          containerClassName={s.logo}
          alt="What we do"
          src="/assets/wwd-logo-blue-yellow.svg"
          layout="fill"
          objectFit="cover"
        />
        <p className={s.bottomRightP}>
          I offer personal and flexible solutions for anyone in need of
          technical and/or graphical services. I have a thing for startups and
          small businesses and can offer full scale solutions at affordable
          prices.
          <br />
          <Link href="/contact">Contact me for inqueries</Link>
        </p>
        <Image
          containerClassName={s.mikael}
          alt="Mikael"
          src="/assets/mikael3.jpg"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <section className={s.footerContainer}>
        <hr />

        <div className={s.keyWordsContainer}>
          <span>Graphics</span>
          <span>Logo</span>
          <span>Web</span>
          <span>App</span>
          <span>Angular</span>
          <span>CMS</span>
          <span>React</span>
          <span>React Native</span>
          <span>Visualisation</span>
          <span>Email marketing</span>
          <span>Marketing automation</span>
        </div>
        <hr />

        <div className={s.keyWordsContainer}>
          <span>Stockholm, Sweden</span>
          <span>Remote</span>
        </div>
      </section>
    </article>
  )
}

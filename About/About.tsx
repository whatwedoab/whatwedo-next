import React, { useRef } from 'react'
import { useActiveNav } from '../services/useActiveNav'
import s from './About.module.scss'
import { Image } from '../components/Image/Image'
import Link from 'next/link'
import { useOffsets } from '../services/useOffsets'
import { useColor } from '../services/useColor'
import { COLOR } from '../styles/COLOR'
import { useBackgroundColor } from '../services/useBackgroundColor'

const HREF = '/about'

export function About() {
  const ref = useRef<HTMLElement>(null)
  const { top, bottom } = useOffsets(ref)
  useBackgroundColor(HREF, COLOR.CORAL, top, bottom)
  useColor(HREF, COLOR.YELLOW_LIGHT, top, bottom)
  useActiveNav(HREF, top, bottom)


  return (
    <article className={s.container} ref={ref}>
      <h1>About</h1>
      <section className={s.gridContainer}>
        <p>
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
        <p>
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
        <ul className={s.keyWordsContainer}>
          <li>Graphics</li>
          <li>Logo</li>
          <li>Web</li>
          <li>App</li>
          <li>Angular</li>
          <li>CMS</li>
          <li>React</li>
          <li>React Native</li>
          <li>Visualisation</li>
          <li>Email marketing</li>
          <li>Marketing automation</li>
        </ul>
        <hr />
        <ul className={s.keyWordsContainer}>
          <li>Stockholm, Sweden</li>
          <li>Remote</li>
        </ul>
      </section>
    </article>
  )
}

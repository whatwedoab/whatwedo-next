import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useScrollIn } from '../services/useScrollIn'
import { PAGE_IN_VIEW_OPTIONS } from '../services/App.context'
import { useBackgroundColor } from '../services/useBackgroundColor'
import { useColor } from '../services/useColor'
import { useActiveNav } from '../services/useActiveNav'
import { COLOR } from '../styles/COLOR'
import s from './About.module.scss'
import { Image } from '../components/Image/Image'

export function About() {
  const { ref, inView, entry } = useInView(PAGE_IN_VIEW_OPTIONS)
  useBackgroundColor(COLOR.CORAL, inView)
  useColor(COLOR.YELLOW_LIGHT, inView)
  useActiveNav('/about', inView)
  useScrollIn(inView, entry)

  return (
    <article ref={ref}>
      <h1>About</h1>
      <section className={s.contentContainer}>
        <p className={s.topLeftP}>
          Hi. My name is Mikael. I&apos;m a full stack developer by trade and a
          graphic designer by heart. I have more than fifteen years of
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
          Being able to offer enterprise technical solutions together with
          visual design and layout makes me a good fit for most. But probably
          mostly for smaller companies, startups or restarts, as I can offer a
          highly personal and tailor made solution without soaring costs.
        </p>
        <Image
          containerClassName={s.mikael}
          alt="Mikael"
          src="/assets/mikael3.jpg"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <section className={s.content}>
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

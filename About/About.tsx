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
import { Logo } from '../components/Logo/Logo'

export function About() {
  const { ref, inView, entry } = useInView(PAGE_IN_VIEW_OPTIONS)
  useBackgroundColor(COLOR.CORAL, inView)
  useColor(COLOR.WHITE, inView)
  useActiveNav('/about', inView)
  useScrollIn(inView, entry)

  return (
    <article ref={ref}>
      <h1 className={s.sticky}>About</h1>
      <div className={s.contentContainer}>
        <section className={s.content}>
          <p>Hi.</p>
          <p>My name is Mikael.</p>
          <p>
            I&apos;m a full stack developer by trade and a graphic designer by
            heart.
          </p>

          <h3>I&apos;m new here</h3>
          <p>
            Well sort of. Even though I have more than fifteen years of
            experience as a full stack developer, designer and creator, this is
            the first time I fly solo.
          </p>

          <h3>Services</h3>
          <p>
            I will happily develop your business&apos; visual brand identity,
            web site, or just pick the colors of your letter head. I will also
            be thrilled if you want us to create a mobile app together.
          </p>

          <h3>For startups and small businesses</h3>
          <p>
            Being solo, and having one toe dipped in the tech stuff and the
            other in design, I can offer smaller companies a personal and
            affordable one-stop-shop experience.
          </p>
          <p>
            Doesn&apos;t mean I don&apos;t like bigger companies or any other
            sort of communion. But I do have a thing for the up-and-coming with
            the future at their feet.
          </p>
        </section>

        <section className={s.content}>
          <div className={s.imageContainer}>
            <Image
              alt="Mikael"
              src="/assets/mikael2.jpg"
              layout="fill"
              objectFit="contain"
            />
            <Logo className={s.wwdLogo} />
          </div>

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
      </div>
    </article>
  )
}

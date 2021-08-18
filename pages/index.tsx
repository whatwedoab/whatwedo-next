import s from './start.module.scss'
import { Home } from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import { Contact } from '../Contact/Contact'
import { Pricing } from '../Pricing/Pricing'
import React from 'react'
import { About } from '../About/About'

export default function HomePage() {
  return (
    <main className={s.main}>
      <Home />
      <Portfolio />
      <About />
      <Pricing />
      <Contact />
    </main>
  )
}

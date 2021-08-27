import { Home } from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import { Contact } from '../Contact/Contact'
import { Services } from '../MyServices/Services'
import React from 'react'
import { About } from '../About/About'
import { COLOR } from '../styles/COLOR'
import { PageHead } from '../components/PageHead/PageHead'

export default function HomePage() {
  return (
    <>
      <PageHead title="What we do — developer and designer" />
      <style jsx global>
        {`
          body {
            background-color: ${COLOR.BLUE_LIGHT};
          }
        `}
      </style>

      <Home />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </>
  )
}

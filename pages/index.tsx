import { Home } from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import { Contact } from '../Contact/Contact'
import { Services } from '../MyServices/Services'
import React from 'react'
import { About } from '../About/About'
import Head from 'next/head'
import { DEFAULT_KEYWORDS } from '../services/App.context'
import { COLOR } from '../styles/COLOR'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>What we do — developer and designer</title>
        <meta name="keywords" content={[...DEFAULT_KEYWORDS].join(', ')} />
        <meta
          name="description"
          content="I'm a freelancing coder and designer. I create digital things. Feel free to browse some of my work, read more about me or get in touch."
        />
      </Head>
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

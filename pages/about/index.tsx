import React from 'react'
import { About } from '../../About/About'
import Head from 'next/head'
import { DEFAULT_KEYWORDS } from '../../services/App.context'
import { COLOR } from '../../styles/COLOR'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | What we do — freelance developer and designer</title>
        <meta
          name="keywords"
          content={[...DEFAULT_KEYWORDS, 'about'].join(', ')}
        />
        <meta
          name="description"
          content="I'm a full stack developer by trade and a
          graphic designer by heart. I have more than fifteen years of
          experience developing and designing apps, web sites and assets."
        />
      </Head>
      <style jsx global>
        {`
          body {
            background-color: ${COLOR.CORAL};
          }
        `}
      </style>
      <About />
    </>
  )
}

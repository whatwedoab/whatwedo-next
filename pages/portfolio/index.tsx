import React from 'react'
import Portfolio from '../../Portfolio/Portfolio'
import Head from 'next/head'
import { DEFAULT_KEYWORDS } from '../../services/App.context'
import { COLOR } from '../../styles/COLOR'

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio | What we do — freelance developer and designer</title>
        <meta
          name="keywords"
          content={[...DEFAULT_KEYWORDS, 'portfolio', 'work'].join(', ')}
        />
        <meta
          name="description"
          content="See a selection of my work — logos, web sites, branding and all else technical or visual things created by me."
        />
      </Head>
      <style jsx global>
        {`
          body {
            background-color: ${COLOR.WHITE};
          }
        `}
      </style>
      <Portfolio />
    </>
  )
}

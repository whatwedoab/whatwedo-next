import React from 'react'
import Fragvist from '../../Portfolio/Fragvist/Fragvist'
import Head from 'next/head'
import { DEFAULT_KEYWORDS } from '../../services/App.context'

export default function FragvistPage() {
  return (
    <>
      <Head>
        <title>
          Frågvist | Showcase | What we do — freelance developer and designer
        </title>
        <meta
          name="keywords"
          content={[
            ...DEFAULT_KEYWORDS,
            'portfolio',
            'work',
            'showcase',
            'logo',
            'visual identity',
            'branding',
            'fragvist',
            'frågvist',
          ].join(', ')}
        />
        <meta
          name="description"
          content="A showcase of my logo and visual brand identity work for Frågvist. You can see more of my work by clicking the Portfolio link in the menu."
        />
      </Head>
      <Fragvist />
    </>
  )
}

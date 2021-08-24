import React from 'react'
import CulinaryCanvas from '../../Portfolio/CulinaryCanvas/CulinaryCanvas'
import Head from 'next/head'
import { DEFAULT_KEYWORDS } from '../../services/App.context'

export default function CulinaryCanvasPage() {
  return (
    <>
      <Head>
        <title>
          Culinary Canvas | Showcase | What we do — freelance developer and designer
        </title>
        <meta
          name="keywords"
          content={[
            ...DEFAULT_KEYWORDS,
            'portfolio',
            'work',
            'showcase',
            'culinary canvas',
            'culinary-canvas.com',
          ].join(', ')}
        />
        <meta
          name="description"
          content="A showcase of my branding and web development work for culinary-canvas.com. You can see more of my work by clicking the Portfolio link in the menu."
        />
      </Head>
      <CulinaryCanvas />
    </>
  )
}

import React from 'react'
import Algomin from '../../Portfolio/Algomin/Algomin'
import Head from 'next/head'
import { DEFAULT_KEYWORDS } from '../../services/App.context'

export default function AlgominPage() {
  return (
    <>
      <Head>
        <title>
          Algomin | Showcase | What we do — freelance developer and designer
        </title>
        <meta
          name="keywords"
          content={[
            ...DEFAULT_KEYWORDS,
            'portfolio',
            'work',
            'showcase',
            'algomin',
            'algomin.se',
          ].join(', ')}
        />
        <meta
          name="description"
          content="A showcase of my web design work for algomin.se. You can see more of my work by clicking the Portfolio link in the menu."
        />
      </Head>
      <Algomin />
    </>
  )
}

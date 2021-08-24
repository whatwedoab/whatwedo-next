import React from 'react'
import { Services } from '../../MyServices/Services'
import Head from 'next/head'
import { DEFAULT_KEYWORDS } from '../../services/App.context'
import { COLOR } from '../../styles/COLOR'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Pricing | What we do — freelance developer and designer</title>
        <meta
          name="keywords"
          content={[
            ...DEFAULT_KEYWORDS,
            'pricing',
            'services',
            'packages',
          ].join(', ')}
        />
        <meta
          name="description"
          content="I know how difficult it can be to find a designer or developer that fits within your budget. That's why I've put together some packages including my prices — to make it easier for you to make a decision."
        />
      </Head>
      <style jsx global>
        {`
          body {
            background-color: ${COLOR.BLUE};
          }
        `}
      </style>

      <Services />
    </>
  )
}

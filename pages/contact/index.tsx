import React from 'react'
import { Contact } from '../../Contact/Contact'
import Head from 'next/head'
import { DEFAULT_KEYWORDS } from '../../services/App.context'
import { COLOR } from '../../styles/COLOR'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | What we do — freelance developer and designer</title>
        <meta
          name="keywords"
          content={[
            ...DEFAULT_KEYWORDS,
            'contact',
            'mail',
            'phone',
            'instagram',
            'facebook',
            'twitter',
            'linkedin',
            'dribbble',
            'social media',
          ].join(', ')}
        />
        <meta
          name="description"
          content="For inquiries, contact me via phone (+46 739-596 096), send me an email (mikael@whatwedo.se) or reach out on a social media platform of your choice. Get in touch!"
        />
      </Head>
      <style jsx global>
        {`
            body {
              background-color: ${COLOR.YELLOW_LIGHT};
            }
          `}
      </style>

      <Contact />
    </>
  )
}

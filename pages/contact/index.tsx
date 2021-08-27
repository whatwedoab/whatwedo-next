import React from 'react'
import { Contact } from '../../Contact/Contact'
import { COLOR } from '../../styles/COLOR'
import { PageHead } from '../../components/PageHead/PageHead'

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Contact | What we do — freelance developer and designer"
        keywords={[
          'contact',
          'mail',
          'phone',
          'instagram',
          'facebook',
          'twitter',
          'linkedin',
          'dribbble',
          'social media',
        ]}
        description="For inquiries, contact me via phone (+46 739-596 096), send me an email (mikael@whatwedo.se) or reach out on a social media platform of your choice. Get in touch!"
      />
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

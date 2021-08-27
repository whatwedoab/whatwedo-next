import React from 'react'
import { Services } from '../../MyServices/Services'
import { COLOR } from '../../styles/COLOR'
import { PageHead } from '../../components/PageHead/PageHead'

export default function ServicesPage() {
  return (
    <>
      <PageHead
        title="Services | What we do — freelance developer and designer"
        keywords={[
          'pricing',
          'services',
          'packages',
          'Responsive',
          'SEO',
          'HTML',
          'CSS',
          'Javascript',
          'Angular',
          'React',
          'Java',
          'NodeJS',
          'MongoDb',
          'Marketing assets',
          'UI',
          'Web design',
          'Email design',
          'DM automation',
          'Data visualisation',
        ]}
        description="I know how difficult it can be to find a designer or developer that fits within your budget. That's why I've put together some packages including my prices — to make it easier for you to make a decision."
      />
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

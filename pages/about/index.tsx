import React from 'react'
import { About } from '../../About/About'
import { COLOR } from '../../styles/COLOR'
import { PageHead } from '../../components/PageHead/PageHead'

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="About | What we do — developer and designer"
        keywords={['about']}
        description="I'm a full stack developer by trade and a
          graphic designer by heart. I have more than fifteen years of
          experience developing and designing apps, web sites and assets."
      />
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

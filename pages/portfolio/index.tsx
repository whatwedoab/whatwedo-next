import React from 'react'
import Portfolio from '../../Portfolio/Portfolio'
import { COLOR } from '../../styles/COLOR'
import { PageHead } from '../../components/PageHead/PageHead'

export default function PortfolioPage() {
  return (
    <>
      <PageHead
        title="Portfolio | What we do — developer and designer"
        keywords={['portfolio', 'work', 'showcase']}
        description="Browse a selection of my work — logos, web sites, branding and all else technical or visual things created by me."
      />
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

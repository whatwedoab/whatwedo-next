import React from 'react'
import Fragvist from '../../Portfolio/Fragvist/Fragvist'
import { PageHead } from '../../components/PageHead/PageHead'

export default function FragvistPage() {
  return (
    <>
      <PageHead
        title="Frågvist | Showcase | What we do — freelance developer and designer"
        keywords={[
          'portfolio',
          'work',
          'showcase',
          'logo',
          'visual identity',
          'branding',
          'fragvist',
          'frågvist',
        ]}
        description="A showcase of my logo and visual brand identity work for Frågvist. You can see more of my work by clicking the Portfolio link in the menu."
      />

      <Fragvist />
    </>
  )
}

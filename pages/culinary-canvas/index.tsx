import React from 'react'
import CulinaryCanvas from '../../Portfolio/CulinaryCanvas/CulinaryCanvas'
import { PageHead } from '../../components/PageHead/PageHead'

export default function CulinaryCanvasPage() {
  return (
    <>
      <PageHead
        title="Culinary Canvas | Showcase | What we do — freelance developer and designer"
        keywords={[
          'portfolio',
          'work',
          'showcase',
          'culinary canvas',
          'culinary-canvas.com',
        ]}
        description="A showcase of my branding and web development work for culinary-canvas.com. You can see more of my work by clicking the Portfolio link in the menu."
      />

      <CulinaryCanvas />
    </>
  )
}

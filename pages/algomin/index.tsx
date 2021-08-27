import React from 'react'
import Algomin from '../../Portfolio/Algomin/Algomin'
import { PageHead } from '../../components/PageHead/PageHead'

export default function AlgominPage() {
  return (
    <>
      <PageHead
        title="Algomin | Portfolio | What we do — freelance developer and designer"
        keywords={['portfolio', 'work', 'showcase', 'algomin', 'algomin.se']}
        description="A showcase of my web design work for algomin.se. You can see more of my work by clicking the Portfolio link in the menu."
      />
      <Algomin />
    </>
  )
}

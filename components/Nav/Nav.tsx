import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { useShowNav } from '../../services/useShowNav'
import { DesktopNav } from './DesktopNav/DesktopNav'
import { MobileNav } from './MobileNav/MobileNav'

export function Nav() {
  return (
    <AnimateSharedLayout>
      <DesktopNav />
      <MobileNav />
    </AnimateSharedLayout>
  )
}

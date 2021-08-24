import React, { createContext, useState } from 'react'
import { IntersectionOptions } from 'react-intersection-observer'

export const HEADER_HEIGHT = 100
export const PAGE_IN_VIEW_OPTIONS: IntersectionOptions = { threshold: 0.05 }
export const DEFAULT_KEYWORDS = [
  'what we do',
  'wwd',
  'design',
  'designer',
  'web design',
  'web designer',
  'visual branding',
  'app',
  'developer',
  'web developer',
  'app developer',
  'freelance',
  'freelancer',
  'self employed',
  'consultant',
]
export interface HeaderColor {
  color: string
  boundary: number
}

export interface AppContextValues {
  backgroundColor: string
  color: string
  // headerColors: HeaderColor[]
  logoVisible: boolean
  navVisible: boolean
  activeNav: string
}

export interface AppContextActions {
  setBackgroundColor: (v: string) => void
  setColor: (v: string) => void
  // setHeaderColors: (v: HeaderColor[]) => void
  showLogo: (v: boolean) => void
  showNav: (v: boolean) => void
  setActiveNav: (v: string) => void
}

export type AppContext = AppContextValues & AppContextActions

export const AppContext = createContext<AppContext | null>(null)

export function useAppContext(): AppContext {
  const context = React.useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }
  return context
}

export function useAppContextInit(values: AppContextValues): AppContext {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    values.backgroundColor,
  )
  const [color, setColor] = useState<string>(values.color)
  // const [headerColors, setHeaderColors] = useState<HeaderColor[]>([])
  const [logoVisible, showLogo] = useState<boolean>(values.logoVisible)
  const [navVisible, showNav] = useState<boolean>(values.navVisible)
  const [activeNav, setActiveNav] = useState<string>(values.activeNav)

  return {
    backgroundColor,
    setBackgroundColor,
    color,
    setColor,
    // headerColors,
    // setHeaderColors,
    logoVisible,
    showLogo,
    navVisible,
    showNav,
    activeNav,
    setActiveNav,
  }
}

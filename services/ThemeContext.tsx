// src/count-context.js
import * as React from 'react'
import { useEffect, useState } from 'react'

export interface ThemeContext {
  backgroundColor: string
  setBackgroundColor: (s: string) => void
  color: string
  setColor: (s: string) => void
  showLogo: boolean
  setShowLogo: (v: boolean) => void
  showNav: boolean
  setShowNav: (v: boolean) => void
}
export type Theme = Partial<
  Pick<ThemeContext, 'backgroundColor' | 'color' | 'showLogo' | 'showNav'>
>

export const ThemeContext = React.createContext<ThemeContext | null>(null)

export function useTheme(theme?: Theme, inView?: boolean): ThemeContext {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  const {
    setBackgroundColor,
    setColor,
    color,
    backgroundColor,
    showLogo,
    setShowLogo,
    showNav,
    setShowNav,
  } = context as ThemeContext

  useEffect(() => {
    if (theme?.showLogo !== undefined && theme?.showLogo !== null) {
      setShowLogo(theme?.showLogo)
    }
  }, [setShowLogo, showLogo, theme?.showLogo])

  useEffect(() => {
    if (theme?.showNav !== undefined && theme?.showNav !== null) {
      setShowNav(theme?.showNav)
    }
  }, [setShowNav, theme?.showNav])

  useEffect(() => {
    if (inView !== false) {
      if (!!theme?.backgroundColor) {
        setBackgroundColor(theme?.backgroundColor)
      }
      if (!!theme?.color) {
        setColor(theme?.color)
      }

      if (!!document) {
        setTimeout(() => {
          if (!!theme?.backgroundColor) {
            document.body.style.backgroundColor = theme?.backgroundColor
          }
          if (!!theme?.color) {
            document.body.style.color = theme?.color
          }
        }, 2000)
      }
    }
  }, [
    backgroundColor,
    color,
    context,
    inView,
    setBackgroundColor,
    setColor,
    theme?.backgroundColor,
    theme?.color,
  ])

  return {
    setColor,
    color: color as string,
    backgroundColor: backgroundColor as string,
    setBackgroundColor,
    showLogo,
    setShowLogo,
    showNav,
    setShowNav,
  }
}

export function useThemeInit(): ThemeContext {
  const [backgroundColor, setBackgroundColor] = useState<string>('#fff')
  const [color, setColor] = useState<string>('#000000')
  const [showLogo, setShowLogo] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(false)
  return {
    backgroundColor,
    setBackgroundColor,
    color,
    setColor,
    showLogo,
    setShowLogo,
    showNav,
    setShowNav,
  }
}

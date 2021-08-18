import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export interface NavStateContext {
  active: string
  setActive: (href: string) => any
}
export const NavStateContext = React.createContext<NavStateContext | null>(null)

export function useNavState(href?: string, inView?: boolean): NavStateContext {
  const context = React.useContext(NavStateContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  useEffect(() => {
    if (!!href && inView !== false) {
      context.setActive(href)
    }
  }, [context, href, inView])

  return context
}

export function NavStateProvider({ children }: { children: any }) {
  const router = useRouter()
  const [active, setActive] = useState<string>(router.asPath)

  useEffect(() => {
    setActive(router.asPath)
  }, [router.asPath, setActive])

  return (
    <NavStateContext.Provider value={{ active, setActive }}>
      {children}
    </NavStateContext.Provider>
  )
}

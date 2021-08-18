import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { Nav } from '../components/Nav/Nav'
import { Header } from '../components/Header/Header'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { AppContext, useAppContextInit } from '../services/App.context'
import { COLOR } from '../styles/COLOR'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const appContext = useAppContextInit({
    backgroundColor: COLOR.WHITE,
    color: COLOR.BLACK,
    navVisible: false,
    logoVisible: false,
    activeNav: router.asPath,
  })

  useEffect(() => {
    setTimeout(() => appContext.showLogo(true), 3000)
    setTimeout(() => appContext.showNav(true), 2000)
  }, [appContext])

  return (
    <AppContext.Provider value={appContext}>
      <AnimatePresence>
        <motion.main
          key={router.asPath}
          animate={{
            backgroundColor: appContext.backgroundColor,
            color: appContext.color,
          }}
          transition={{ ease: 'anticipate' }}
        >
          <Header />
          <Nav />
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </AppContext.Provider>
  )
}
export default MyApp

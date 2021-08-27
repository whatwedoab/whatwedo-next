import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { Nav } from '../components/Nav/Nav'
import { Header } from '../components/Header/Header'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { AppContext, useAppContextInit } from '../services/App.context'
import { COLOR } from '../styles/COLOR'
import Head from 'next/head'
import TagManager from 'react-gtm-module'

export const IS_PROD = process.env.VERCEL_ENV === 'production'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (IS_PROD) {
      TagManager.initialize({ gtmId: 'GTM-TZD8RDB' })
    }
  }, [])

  const router = useRouter()
  const appContext = useAppContextInit({
    backgroundColor: COLOR.WHITE,
    color: COLOR.BLACK,
    navVisible: false,
    logoVisible: false,
    activeNav: router.asPath,
  })

  useEffect(() => {
    setTimeout(() => appContext.showLogo(true), 500)
    setTimeout(() => appContext.showNav(true), 1000)
  }, [appContext])

  return (
    <AppContext.Provider value={appContext}>
      <Head>
        <title>What we do</title>
        <meta name="keywords" content="Web design, logo" />
        <meta
          name="description"
          content="We do web pages, applications and graphic design"
        />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Header />
      <Nav />
      <AnimatePresence>
        <motion.main
          key={router.asPath}
          animate={{
            color: appContext.color,
          }}
          transition={{ ease: 'anticipate' }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </AppContext.Provider>
  )
}
export default MyApp

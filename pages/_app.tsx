import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import { Nav } from '../components/Nav/Nav'
import { Header } from '../components/Header/Header'
import { ThemeContext, useThemeInit } from '../services/ThemeContext'
import { AnimatePresence, motion } from 'framer-motion'
import { NavStateProvider } from '../components/Nav/NavStateContext'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useThemeInit()

  return (
    <NavStateProvider>
      <ThemeContext.Provider value={theme}>
        <AnimatePresence>
          <motion.div
            className="page"
            animate={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
            transition={{ duration: 1 }}
          >
            <Header />
            <Nav />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeContext.Provider>
    </NavStateProvider>
  )
}
export default MyApp

import React from 'react'
import { Logo } from '../../components/Logo/Logo'
import s from './SplashScreen.module.scss'

export function SplashScreen() {
  return <Logo className={s.logo} />
}

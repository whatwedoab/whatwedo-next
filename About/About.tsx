import React from 'react'
import s from './About.module.scss'
import { useTheme } from '../services/ThemeContext'
import { useInView } from 'react-intersection-observer'
import { useNavState } from '../components/Nav/NavStateContext'

export function About() {
  const { ref, inView } = useInView()
  useTheme({ backgroundColor: '#FF7276', color: '#ffffff' }, inView)
  useNavState('/about', inView)

  return (
    <section className={s.container} ref={ref}>
      <h1>About</h1>
    </section>
  )
}

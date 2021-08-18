import React, { useCallback, useState } from 'react'
import s from './Portfolio.module.scss'
import { PortfolioItem } from './PortfolioItem/PortfolioItem'
import { useTheme } from '../services/ThemeContext'
import { useNavState } from '../components/Nav/NavStateContext'
import { useInView } from 'react-intersection-observer'

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const [show, setShow] = useState<number>(0)

  const onInView = useCallback((name: string, inView: boolean) => {
    if (name === 'Frågvist') {
      setShow(inView ? 3 : 2)
    } else if (name === 'Algomin') {
      setShow(inView ? 2 : 1)
    } else {
      setShow(inView ? 1 : 0)
    }
  }, [])

  useTheme(
    {
      backgroundColor: '#fff',
      color: '#000',
    },
    inView,
  )
  useNavState('/portfolio', inView)

  return (
    <div className={s.container} ref={ref}>
      <h2>Portfolio</h2>
      <div style={{ position: 'sticky', top: 0 }}>
        <h3>{show}</h3>
      </div>
      <PortfolioItem
        name="Culinary Canvas"
        tags={['logo', 'branding', 'web design', 'web development', 'CMS']}
        imageSrc="/assets/culinary-canvas-magazine.jpg"
        href="/culinary-canvas"
        onInView={onInView}
        show={show === 1}
        hide={show > 1}
      />
      <PortfolioItem
        name="Algomin"
        tags={['web design']}
        imageSrc="/assets/algomin/algomin-devices.jpg"
        href="/algomin"
        onInView={onInView}
        show={show === 2}
        hide={show > 2}
      />
      <PortfolioItem
        name="Frågvist"
        tags={['logo', 'branding', 'web design', 'web development', 'CMS']}
        imageSrc="/assets/culinary-canvas-logo.svg"
        href="/culinary-canvas"
        onInView={onInView}
        show={show === 3}
        hide={show > 3}
      />
    </div>
  )
}

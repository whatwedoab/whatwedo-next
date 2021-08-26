import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Tags } from '../../components/Tags/Tags'
import s from './PortfolioItem.module.scss'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Link from 'next/link'

interface Props {
  name: string
  tags: string[]
  imageSrc: string
  href: string
  small?: boolean
  pageRenderer: () => JSX.Element
}

export function PortfolioItem(props: Props) {
  const { name, tags, imageSrc, pageRenderer, href, small = false } = props
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useViewportScroll()
  const [offsetTop, setOffsetTop] = useState(0)

  const external = useMemo(() => href.includes('http'), [href])

  const containerClassNames = useMemo(() => {
    const classNames = [s.container]
    if (small) {
      classNames.push(s.small)
    }
    return classNames.join(' ')
  }, [small])

  useEffect(() => {
    if (!!ref.current) {
      setOffsetTop(ref.current.offsetTop)
    }
  }, [ref])

  const imageY = useTransform(
    scrollY,
    [offsetTop - 1000, offsetTop + 500],
    ['-10%', '10%'],
  )

  return (
    <Link href={href} passHref>
      <motion.section ref={ref} className={containerClassNames}>
        <div className={s.imageContainer}>
          {pageRenderer()}
          <div className={s.imageHoverEffect} />
        </div>

        <div className={s.textContainer}>
          <h2>{name}</h2>
          <Tags tags={tags} containerClassName={s.tagsContainer} />
        </div>
      </motion.section>
    </Link>
  )
}

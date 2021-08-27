import React, { useRef } from 'react'
import { Tags } from '../../components/Tags/Tags'
import s from './PortfolioItem.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  name: string
  tags: string[]
  href: string
  pageRenderer: () => JSX.Element
}

export function PortfolioItem(props: Props) {
  const { name, tags, pageRenderer, href } = props
  const ref = useRef<HTMLElement>(null)

  return (
    <Link href={href} passHref>
      <motion.section ref={ref} className={s.container}>
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

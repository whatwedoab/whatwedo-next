import React, { useMemo, useState } from 'react'
import s from './ImageMosaic.module.scss'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Image } from '../Image/Image'

interface Props {
  hrefs: string[]
  backgroundColor?: string
  columns?: number
}

export function ImageMosaic(props: Props) {
  const { hrefs, backgroundColor = 'transparent', columns = 4 } = props
  const [loaded, setLoaded] = useState(new Set<string>())

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const image: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  }

  const { ref, inView } = useInView()

  const gridTemplateColumns = useMemo(
    () =>
      Array.from(new Array(columns))
        .map(() => '1fr')
        .join(' '),
    [columns],
  )

  return (
    <motion.div
      ref={ref}
      className={s.container}
      style={{
        backgroundColor,
        gridTemplateColumns,
      }}
      variants={container}
      initial="hidden"
      animate={inView && loaded.size === hrefs.length ? 'visible' : 'hidden'}
    >
      {hrefs.map((href) => (
        <motion.div key={href} className={s.cell} variants={image}>
          <Image
            alt={href}
            src={href}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            onLoadingComplete={() => loaded.add(href)}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

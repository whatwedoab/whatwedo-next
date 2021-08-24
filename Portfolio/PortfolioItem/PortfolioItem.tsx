import React, { useEffect, useRef, useState } from 'react'
import { Tags } from '../../components/Tags/Tags'
import s from './PortfolioItem.module.scss'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Link from 'next/link'
import { Image } from '../../components/Image/Image'

interface Props {
  name: string
  tags: string[]
  imageSrc: string
  href: string
}

export function PortfolioItem(props: Props) {
  const { name, tags, imageSrc, href } = props
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useViewportScroll()
  const [offsetTop, setOffsetTop] = useState(0)

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

  const [hovering, setHovering] = useState<boolean>(false)

  return (
    <>
      <Link href={href}>
        <motion.section
          ref={ref}
          className={s.container}
          onMouseOver={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className={s.imageContainer}>
            <motion.div className={s.imageWrapper} style={{ y: imageY }}>
              <Image
                className={s.image}
                alt={name}
                objectFit="cover"
                objectPosition="center"
                layout="fill"
                src={imageSrc}
                quality={100}
                priority
              />
            </motion.div>
            <motion.div
              className={s.imageCover}
              initial={{ borderRadius: 0, scale: 0 }}
              animate={
                hovering
                  ? { borderRadius: 999, scale: 1 }
                  : { borderRadius: 0, scale: 0 }
              }
            />
          </div>

          <div className={s.textContainer}>
            <h3>{name}</h3>
            <Tags tags={tags} containerClassName={s.tagsContainer} />
          </div>
        </motion.section>
      </Link>
    </>
  )
}

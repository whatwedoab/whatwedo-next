import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Tags } from '../../components/Tags/Tags'
import s from './PortfolioItem.module.scss'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Link from 'next/link'
import { Image } from '../../components/Image/Image'
import AppWindowNext from '@streamlinehq/streamlinehq/img/streamline-regular/programing-apps-websites/apps-window/app-window-next.svg'

interface Props {
  name: string
  tags: string[]
  imageSrc: string
  href: string
  small?: boolean
}

export function PortfolioItem(props: Props) {
  const { name, tags, imageSrc, href, small = false } = props
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
    <>
      <Link href={href}>
        <motion.section ref={ref} className={containerClassNames}>
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
            {!external && <div className={s.imageHoverEffect} />}
          </div>

          <div className={s.textContainer}>
            <h3>
              {name}
              {external && (
                <a href={href} target="_blank" rel="noreferrer">
                  <Image
                    src={AppWindowNext}
                    alt={`${name} web site`}
                    width={20}
                    height={20}
                    objectPosition="bottom center"
                  />
                </a>
              )}
            </h3>
            <Tags tags={tags} containerClassName={s.tagsContainer} />
          </div>
        </motion.section>
      </Link>
    </>
  )
}

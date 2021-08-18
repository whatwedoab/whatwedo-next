import React, { useEffect } from 'react'
import { Tags } from '../../components/Tags/Tags'
import s from './PortfolioItem.module.scss'
import { motion } from 'framer-motion'
import { Image } from '../../components/Image/Image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

interface Props {
  name: string
  tags: string[]
  imageSrc: string
  href: string
  onInView: (name: string, v: boolean) => void
  show: boolean
  hide: boolean
}

export function PortfolioItem(props: Props) {
  const { name, tags, imageSrc, href, onInView, show, hide } = props
  /*const { scrollY } = useViewportScroll()
  const ref = useRef<HTMLDivElement>(null)
  const [offsetTop, setOffsetTop] = useState(0)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (!!ref.current) {
      setOffsetTop(ref.current.offsetTop)
      setHeight(ref.current.clientHeight)
    }
  }, [ref])

  useEffect(() => {
    const stop = scrollY.onChange((v) => {
      const start = offsetTop - height
      const end = offsetTop + height * 0.5
      if (v > start && v < end) {
        setShow(true)
        setHide(false)
      } else if (v > end) {
        setHide(true)
        setShow(false)
      } else {
        setHide(false)
        setShow(false)
      }
    })
    return () => stop()
  }, [height, offsetTop, scrollY])
*/

  const { ref, inView, entry } = useInView({ threshold: 0.5 })

  useEffect(() => {
    onInView(name, inView)
    console.log(name, inView)
  }, [onInView, inView, name])

  const containerVariants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.5, delay: 0.5 } },
  }

  const imageVariants = {
    initial: { x: '100%' },
    visible: { x: '0%' },
    hidden: { x: '0%' },
  }

  return (
    <motion.div
      ref={ref}
      className={s.container}
      variants={containerVariants}
      animate={hide ? 'hidden' : show ? 'visible' : 'initial'}
      transition={{ delay: 0.5 }}
      initial="initial"
      style={{
        borderColor: name === 'Culinary Canvas' ? 'blue' : 'red',
        borderWidth: name === 'Culinary Canvas' ? '4px' : 1,
      }}
    >
      <div>
        <h3>
          <Link href={href}>{name}</Link>
        </h3>
        <Tags tags={tags} />
      </div>
      <motion.div
        className={s.imageContainer}
        variants={imageVariants}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <Image
          className={s.image}
          alt={name}
          objectFit="contain"
          layout="fill"
          src={imageSrc}
          priority
        />
      </motion.div>
    </motion.div>
  )
}

import React, { useEffect, useState } from 'react'
import s from './ImageCarousel.module.scss'
import { Image } from '../Image/Image'

interface Props {
  srcs: string[]
}

export function ImageCarousel(props: Props) {
  const { srcs } = props
  const [showIndex, setShowIndex] = useState<number>(0)
  const [started, setStarted] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true)
      setShowIndex(showIndex === srcs.length - 1 ? 0 : showIndex + 1)
    }, 800)
    return () => clearInterval(timeout)
  }, [started, showIndex, srcs])

  return (
    <div className={s.container}>
      {srcs.map((src, i) => (
        <Image
          key={src}
          alt="What we do"
          src={src}
          layout="fill"
          objectFit="cover"
          priority
          className={i !== showIndex ? s.hidden : ''}
          containerStyle={{ display: 'hidden' }}
        />
      ))}
    </div>
  )
}

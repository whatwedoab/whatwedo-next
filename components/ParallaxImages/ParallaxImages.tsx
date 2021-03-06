import React from 'react'
import s from './ParallaxImages.module.scss'
import Image from 'next/image'
import { ParallaxItem } from '../ParallaxItem/ParallaxItem'

interface Props {
  images: { src: string; alt: string }[]
}

export function ParallaxImages(props: Props) {
  const { images } = props

  return (
    <div className={s.container}>
      {images.map(({ src, alt }, i) => {
        const even = i % 2 === 0
        return (
          <ParallaxItem key={src} power={0.1} direction={'up'}>
            <Image alt={alt} objectFit="contain" layout="fill" src={src} quality={100}/>
          </ParallaxItem>
        )
      })}
    </div>
  )
}

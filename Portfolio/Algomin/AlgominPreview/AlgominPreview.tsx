import React from 'react'
import s from './AlgominPreview.module.scss'
import { Image } from '../../../components/Image/Image'

export default function AlgominPreview() {
  return (
    <>
      <Image
        alt="Algomin phone"
        objectFit="cover"
        layout="fill"
        src="/assets/algomin/algomin-phone-mockup-1.png"
        priority
      />

      <div className={s.blobb1}>
        <Image
          alt="Algomin blobb"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="/assets/algomin/algomin-blobb-1.svg"
        />
      </div>

      <div className={s.blobb2}>
        <Image
          alt="Algomin blobb"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="/assets/algomin/algomin-blobb-2.svg"
        />
      </div>
    </>
  )
}

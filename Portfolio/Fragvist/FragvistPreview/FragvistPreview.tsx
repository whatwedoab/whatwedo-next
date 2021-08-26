import React from 'react'
import s from './FragvistPreview.module.scss'
import { motion } from 'framer-motion'
import { Image } from '../../../components/Image/Image'

export default function FragvistPreview() {
  return (
    <article className={s.article}>
      <motion.section className={s.logoContainer}>
        <Image
          alt="Frågvist logo"
          objectFit="contain"
          layout="fill"
          src="/assets/fragvist/fragvist-logo.svg"
          priority
        />
      </motion.section>
      <div className={s.piecesContainer}>
        <div className={s.pieceYellow}>
          <Image
            src="/assets/fragvist/fragvist-piece-yellow.svg"
            layout="fill"
            objectFit="contain"
            alt="Frågvist"
          />
        </div>
        <div className={s.piecePink}>
          <Image
            src="/assets/fragvist/fragvist-piece-pink.svg"
            layout="fill"
            objectFit="contain"
            alt="Frågvist"
          />
        </div>
        <div className={s.pieceGreen}>
          <Image
            src="/assets/fragvist/fragvist-piece-green.svg"
            layout="fill"
            objectFit="contain"
            alt="Frågvist"
          />
        </div>
        <div className={s.pieceBlue}>
          <Image
            src="/assets/fragvist/fragvist-piece-blue.svg"
            layout="fill"
            objectFit="contain"
            alt="Frågvist"
          />
        </div>
      </div>
    </article>
  )
}

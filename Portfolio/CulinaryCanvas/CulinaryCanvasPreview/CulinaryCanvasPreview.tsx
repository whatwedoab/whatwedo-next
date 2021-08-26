import React, { useState } from 'react'
import s from './CulinaryCanvasPreview.module.scss'
import { useWindowSize } from '../../../services/useWindowSize'
import { motion } from 'framer-motion'

export default function CulinaryCanvas() {
  return (
    <motion.div className={s.container}>
      <motion.div
        layoutId="triangle"
        className={s.triangle}
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'tween', ease: 'linear' }}
      />
    </motion.div>
  )
}

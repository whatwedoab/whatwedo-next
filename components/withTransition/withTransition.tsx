import React from 'react'
import { motion } from 'framer-motion'
import s from './withTransition.module.scss'
import { NextComponentType, NextPageContext } from 'next'

export default function withTransition(
  OriginalComponent: NextComponentType<NextPageContext, any, {}>,
) {
  return (
      <OriginalComponent />
  )
}

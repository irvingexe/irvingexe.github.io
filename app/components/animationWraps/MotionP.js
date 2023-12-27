import React from 'react'
import {motion} from 'framer-motion'

export const MotionP = ({animate = true, delay = 0, once = false, children}) => {

  const pFadeIn = {
    initial: {
      transform: 'translateX(8rem) skewX(30deg)',
      opacity: 0,
    },
    animate: {
      transform: 'translateX(0) skewX(0deg)',
      opacity: 1
    }
  }

  return (
    <motion.div
      className='origin-top-left w-full'
      variants={pFadeIn}
      transition={{duration: .5, delay: delay}}
      initial={animate ? 'initial' : 'animate'}
      whileInView={animate && 'animate'}
      viewport={{ once: once }}
    >
      {children}
    </motion.div>
  )
}

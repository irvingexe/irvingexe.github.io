import React from 'react'
import {motion} from 'framer-motion'

export const MotionP = ({isInView, animate = true, delay = 0, once = false, children}) => {

  const pFadeIn = {
    initial: {
      transform: 'translateX(8rem) skewX(30deg)',
      opacity: 0,
      transition: 'none'
    },
    animate: {
      transform: 'translateX(0rem) skewX(0deg)',
      opacity: 1
    }
  }

  return (
    <motion.div
      className={`${(isInView || !animate) ? 'go' : ''} anim-p origin-top-left w-full`}
      variants={pFadeIn}
      transition={{duration: .5, delay: delay}}
      initial={animate ? 'initial' : 'animate'}
      {...((isInView === undefined) && {whileInView: animate && 'animate'})}
      animate={(isInView || !animate) ? 'animate' : 'initial'}
      viewport={{ once: once }}
    >
      {children}
    </motion.div>
  )
}

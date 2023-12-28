import React from 'react'
import {motion} from 'framer-motion'

export const MotionDiv = ({isInView, animate = true, children, duration = .5, delay = 0, once = false, distance = 0}) => {

  const fadeInAnimation = {
    initial: {
      transform: `translateX(${distance + 4}em)`,
      opacity: 0
    },
    animate: {
      transform: 'translate(0)',
      opacity: 1
    }
  }

  return (
    <motion.div 
      variants={fadeInAnimation}
      transition={{ duration: duration, delay: delay}}
      initial={animate ? 'initial' : 'animate'}
      {...((isInView === undefined) && {whileInView: animate && 'animate'})}
      animate={(isInView || !animate) ? 'animate' : 'initial'}
      viewport={{ once: once }}
    >
      {children}
    </motion.div>
  )
}

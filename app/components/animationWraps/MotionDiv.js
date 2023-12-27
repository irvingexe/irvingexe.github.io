import React from 'react'
import {motion} from 'framer-motion'

export const MotionDiv = ({animate = true, children, delay = 0, once = false, distance = 0}) => {

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
      transition={{ duration: .5, delay: delay}}
      initial={animate ? 'initial' : 'animate'}
      whileInView={animate && 'animate'}
      viewport={{ once: once }}
    >
      {children}
    </motion.div>
  )
}

import React from 'react'
import {motion} from 'framer-motion'

export const MotionDiv = ({children, delay = 0, once = false, distance = 0}) => {

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
      initial={'initial'}
      whileInView={'animate'}
      viewport={{ once: once }}
      delay={5000}
    >
      {children}
    </motion.div>
  )
}

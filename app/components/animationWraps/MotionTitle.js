import React from 'react'
import {motion} from 'framer-motion'

const fadeInAnimation = {
  initial: {
    transform: 'translateX(1em)',
    opacity: 0
  },
  animate: {
    transform: 'translateX(0em)',
    opacity: 1
  }
}

export const MotionTitle = ({children, delay = 0, once = false}) => {
  return (
    <div className='flex whitespace-break-spaces'>
      {children.split('').map((e, i) => (
        <motion.div
          key={i}
          variants={fadeInAnimation}
          transition={{ duration: .5, delay: delay + i * 0.03}}
          initial={'initial'}
          whileInView={'animate'}
          viewport={{ once: once }}
        >
          {e}
        </motion.div>
      ))}
    </div>
  )
}

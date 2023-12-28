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

export const MotionTitle = ({isInView, animate = true, children, delay = 0, once = false}) => {
  return (
    <div className='flex whitespace-break-spaces'>
      {children.split('').map((e, i) => (
        <motion.div
          key={i}
          variants={fadeInAnimation}
          transition={{ duration: .5, delay: delay + i * 0.03}}
          initial={animate ? 'initial' : 'animate'}
          {...((isInView === undefined) && {whileInView: animate && 'animate'})}
          animate={(isInView || !animate) ? 'animate' : 'initial'}
          viewport={{ once: once }}
        >
          {e}
        </motion.div>
      ))}
    </div>
  )
}

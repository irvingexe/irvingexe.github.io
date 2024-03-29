import React from 'react'
import {motion} from 'framer-motion'

const fadeInAnimation = {
  initial: {
    transform: 'translateX(1em)',
    opacity: 0,
    transition: 'none'
  },
  animate: {
    transform: 'translateX(0em)',
    opacity: 1
  }
}

export const MotionTitle = ({isInView, animate = true, children, delay = 0, once = false}) => {
  return (
    <div className='flex flex-wrap whitespace-break-spaces'>
      {children.split('').map((e, i) => (
        e === '\n' 
          ? <div key={i} className='grow' style={{flexBasis: '100%', height: '0.4em'}}/> 
          : e === ' ' 
            ? <div key={i} style={{width: '.3em'}}/>
            : <motion.div
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

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
      {children.split('\n').map((line, lineIndex) => (
        <div key={lineIndex} className='flex flex-wrap'>
          {line.split('').map((char, charIndex) => (
            char === ' ' 
              ? <div key={charIndex} style={{width: '.3em'}}/>
              : <motion.div
                  key={charIndex}
                  variants={fadeInAnimation}
                  transition={{ duration: .4, delay: delay + (charIndex + 10 * lineIndex) * 0.02}}
                  initial={animate ? 'initial' : 'animate'}
                  {...((isInView === undefined) && {whileInView: animate && 'animate'})}
                  animate={(isInView || !animate) ? 'animate' : 'initial'}
                  viewport={{ once: once }}
                >
                  {char}
                </motion.div>
            ))}
          <div key={lineIndex} className='grow' style={{flexBasis: '100%', height: '0.4em'}}/> 
        </div>
      ))}
    </div>
  )
}

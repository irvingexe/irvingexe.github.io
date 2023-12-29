import React, { useRef } from 'react'
import styles from '../styles.module.scss'
import { MotionDiv } from '@/app/components/animationWraps/MotionDiv'
import {motion} from 'framer-motion'

export const IdoContainer = ({title, children, index, isInView, isOpen, setItemOpen}) => {
  const pRef = useRef(null);

  const variants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  }

  return (
    <motion.div
      className={`${styles['ido-container']} ${isOpen && styles.open}`} 
      onClick={() => setItemOpen(index)}
      style={!index ? {borderTop: '1px solid #4b4b4b'} : {}}
      variants={variants}
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
    >
      <MotionDiv duration={.8} distance={(index + 1) * 10} isInView={isInView}>
        <div className={styles.title}>
          <h2>{title}</h2>
          <svg className={`${styles['img-plus']} ${isOpen && styles.open}`} width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="22" x2="22" y2="43" stroke="#D2D2D2" strokeOpacity="0.9" strokeWidth="2"/>
            <line x1="43" y1="22" y2="22" stroke="#D2D2D2" strokeOpacity="0.9" strokeWidth="2"/>
          </svg>
          <p ref={pRef} className='text-xl'>{children}</p>
        </div>
        <div className={styles.expand} style={isOpen ? {height: `calc(3rem + ${pRef.current.offsetHeight}px)`} : {}}/>
      </MotionDiv>
    </motion.div>
  )
}

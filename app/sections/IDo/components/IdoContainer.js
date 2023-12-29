import Image from 'next/image'
import React, { useRef } from 'react'
import styles from '../styles.module.scss'
import plus from '@/app/assets/plus.svg'
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
          <Image alt='+' src={plus} className={`${styles['img-plus']} ${isOpen && styles.open}`}/>
          <p ref={pRef} className='text-xl'>{children}</p>
        </div>
        <div className={styles.expand} style={isOpen ? {height: `calc(3rem + ${pRef.current.offsetHeight}px)`} : {}}/>
      </MotionDiv>
    </motion.div>
  )
}

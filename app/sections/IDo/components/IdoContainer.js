import React, { useRef } from 'react'
import styles from '../styles.module.scss'
import {motion} from 'framer-motion'

export const IdoContainer = ({title, children, index, isInView, isOpen, setItemOpen}) => {
  const pRef = useRef(null);

  const variants = {
    initial: {
      opacity: 0,
      transition: 'none'
    },
    animate: {
      opacity: 1
    }
  }

  const variants2 = {
    initial: {
      opacity: 0,
      transform: `translateX(min(4em, 10vw))`,
      transition: 'none'
    },
    animate: {
      opacity: 1,
      transform: 'translateX(0em)'
    }
  }

  const variants3 = {
    initial: {
      opacity: 0,
      transform: `translateX(calc(0px - min(4em, 10vw)))`,
      transition: 'none'
    },
    animate: {
      opacity: 1,
      transform: 'translateX(0em)'
    }
  }

  return (
    <motion.div
      className={`${styles['ido-container']} ${isOpen ? styles.open : ''}`} 
      onClick={() => setItemOpen(index)}
      style={!index ? {borderTop: '1px solid #4b4b4b'} : {}}
      variants={variants}
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
    >
      <div className={styles.title}>
        <motion.div 
          variants={variants2}
          transition={{ duration: .4, delay: (index + 1) * .1}}
          initial='initial'
          animate={isInView ? 'animate' : 'initial'}
        >
          <h2>{title}</h2>
        </motion.div>
        
        <motion.div 
          variants={variants3}
          transition={{ duration: .4, delay: (index + 1) * .1}}
          initial='initial'
          animate={isInView ? 'animate' : 'initial'}
        >
          <div className={styles.img}>
            <svg className={`${styles['img-plus']} ${isOpen ? styles.open : ''}`} width="33" height="33" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="22" x2="22" y2="43" strokeOpacity="1" strokeWidth="3"/>
              <line x1="43" y1="22" y2="22" strokeOpacity="1" strokeWidth="3"/>
            </svg>
          </div>
        </motion.div>
        <p ref={pRef} className='text-xl'>{children}</p>
      </div>
      <div className={styles.expand} style={isOpen ? {height: `calc(3rem + ${pRef.current.offsetHeight}px)`} : {}}/>
    </motion.div>
  )
}

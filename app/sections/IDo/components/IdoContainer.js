import Image from 'next/image'
import React, { useRef, useState } from 'react'
import styles from '../styles.module.scss'
import plus from '@/app/assets/plus.svg'
import { MotionDiv } from '@/app/components/animationWraps/MotionDiv'

export const IdoContainer = ({title, children, index, isOpen, setItemOpen}) => {
  const pRef = useRef(null);

  return (
    <MotionDiv delay={.3} distance={index * 2}>
      <div
        className={`${styles['ido-container']} ${isOpen && styles.open}`} 
        onClick={() => setItemOpen(index)}
        style={!index ? {borderTop: '1px solid #4b4b4b'} : {}}
      >
        <div className={styles.title}>
          <h2>{title}</h2>
          <Image alt='+' src={plus} className={`${styles['img-plus']} ${isOpen && styles.open}`}/>
          <p ref={pRef} className='text-xl'>{children}</p>
        </div>
        <div className={styles.expand} style={isOpen ? {height: pRef.current.offsetHeight} : {}}/>
      </div>
    </MotionDiv>
  )
}

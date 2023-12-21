import Image from 'next/image'
import React, { useRef, useState } from 'react'
import styles from '../styles.module.scss'
import plus from '@/app/assets/plus.svg'
import { MotionDiv } from '@/app/components/animationWraps/MotionDiv'

export const IdoContainer = ({title, children, index}) => {
  const [isItemOpen, setItemOpen] = useState(false);
  const pRef = useRef(null);

  return (
    <MotionDiv delay={index * .1 + .3}>
      <div
        className={`${styles['ido-container']} ${isItemOpen && styles.open}`} 
        onClick={() => setItemOpen(!isItemOpen)}
        style={!index ? {borderTop: '1px solid #4b4b4b'} : {}}
      >
        <div className={styles.title}>
          <h2>{title}</h2>
          <Image alt='+' src={plus} className={`${styles['img-plus']} ${isItemOpen && styles.open}`}/>
          <p ref={pRef}>{children}</p>
        </div>
        <div className={styles.expand} style={isItemOpen ? {height: pRef.current.offsetHeight} : {}}/>
      </div>
    </MotionDiv>
  )
}

'use client'

import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import plus from '@/app/assets/plus.svg'

export const IDo = () => {
  const [isItemOpen, setItemOpen] = useState([false, false, false]);
  const feRef = useRef();
  const ciRef = useRef();
  const idRef = useRef();

  return (
    <div id={styles.ido}>
      <div className={styles['ido-title']}>What I do</div>
      <div>
        <div 
          className={`${styles['ido-container']} ${isItemOpen[0] && styles.open}`} 
          onClick={() => setItemOpen([!isItemOpen[0], false, false])}
        >
          <div className={styles.title}>
            <h2>Front-Ent Development</h2>
            <Image alt='+' src={plus} className={`${styles['img-plus']} ${isItemOpen[0] && styles.open}`}/>
            <p ref={feRef}>I plan, design, build, test and maintain scalable Front-End web applications.</p>
          </div>
          <div className={styles.expand} style={isItemOpen[0] ? {height: feRef.current.offsetHeight} : {}}/>
        </div>
        <div 
          className={`${styles['ido-container']} ${isItemOpen[1] && styles.open}`} 
          onClick={() => setItemOpen([false, !isItemOpen[1], false])}
        >
          <div className={styles.title}>
            <h2>Creative implementation</h2>
            <Image alt='+' src={plus} className={`${styles['img-plus']} ${isItemOpen[1] && styles.open}`}/>
            <p ref={ciRef}>I collaborate with designers to plan and execute interactions / animations on web applications.</p>
          </div>
          <div className={styles.expand} style={isItemOpen[1] ? {height: ciRef.current.offsetHeight} : {}}/>
        </div>
        <div 
          className={`${styles['ido-container']} ${isItemOpen[2] && styles.open}`} 
          onClick={() => setItemOpen([false, false, !isItemOpen[2]])}
        >
          <div className={styles.title}>
            <h2>Interaction Design & Animation</h2>
            <Image alt='+' src={plus} className={`${styles['img-plus']} ${isItemOpen[2] && styles.open}`}/>
            <p ref={idRef}>I build layouts and interactions optimizing for performance and usabilty.</p>
          </div>
          <div className={styles.expand} style={isItemOpen[2] ? {height: idRef.current.offsetHeight} : {}}/>
        </div>
      </div>
    </div>
  )
}

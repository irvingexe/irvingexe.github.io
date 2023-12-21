import React from 'react'
import styles from './styles.module.scss'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import { IdoContainer } from './components/IdoContainer'

export const IDo = () => {

  return (
    <div id={styles.ido}>
      <div className={styles['ido-title']}>
        <MotionTitle>What I do</MotionTitle>
      </div>
      <div className='overflow-hidden'>
        <IdoContainer title='Front-Ent Development' index={0}>
          I plan, design, build, test and maintain scalable Front-End web applications.
        </IdoContainer>
        <IdoContainer title='Creative implementation' index={1}>
          I collaborate with designers to plan and execute interactions / animations on web applications.
        </IdoContainer>
        <IdoContainer title='Interaction Design & Animation' index={2}>
          I build layouts and interactions optimizing for performance and usabilty.
        </IdoContainer>
      </div>
    </div>
  )
}

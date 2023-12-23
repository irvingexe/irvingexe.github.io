'use client'

import React from 'react'
import styles from './styles.module.scss'
import projects from '@/app/assets/projects';
import { Card } from './components/Card';
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle';

export const Work = ({onProjectOpen}) => {
  
  return (
    <div id={styles.work}>
      <div className={`items-center ${styles.project}`} style={{minHeight: '80vh'}}><h2><MotionTitle>Selected work</MotionTitle></h2></div>
      {[...projects.values()].map((e, i) => (
        <Card key={i} onProjectOpen={onProjectOpen} e={e} i={i}/>
      ))}
    </div>
  )
}

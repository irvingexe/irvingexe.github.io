'use client'

import React from 'react'
import styles from './styles.module.scss'
import projects from '@/app/assets/projects';
import { Card } from './components/Card';

export const Work = ({onProjectOpen}) => {
  
  return (
  <div id={styles.work}>
      {[...projects.values()].map((e, i) => (
        <Card key={i} onProjectOpen={onProjectOpen} e={e} i={i}/>
      ))}
    </div>
  )
}

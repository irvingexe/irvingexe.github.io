import React from 'react'
import styles from './styles.module.scss'

export const Transition = ({play}) => {
  
  return (
    <div className={styles['transition-container']}>
      <div className={`${styles.transition} ${play ? styles.play : ''}`}></div>
    </div>
  )
}

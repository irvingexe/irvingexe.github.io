import React from 'react'
import styles from './styles.module.scss'

export const ProjectContainer = ({children, inner}) => {
  return (
    <div id={styles['project-container']} className={!inner && styles.landing}>
      {children}
    </div>
  )
}

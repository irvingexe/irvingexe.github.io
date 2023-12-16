import React from 'react'
import styles from '../styles.module.scss'

export const ProjectHeader = ({project}) => {
  return (
    <>
      <div className={styles.desc}>{project.subtitle}</div>
      <h2 className={styles.title}>{project.name}</h2>
      <div className={styles.roles}>
        {project.role.map((role, i) => <div key={i} className={styles.role}>{role}</div>)}
      </div>
    </>
  )
}

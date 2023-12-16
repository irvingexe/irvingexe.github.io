import Image from 'next/image'
import React from 'react'
import arrowSkew from '../../assets/arrow-skew.svg'
import styles from '../styles.module.scss'
import { ProjectHeader } from './ProjectHeader'

export const ProjectContent = ({project, nextImg, nextProject, next}) => {
  return (
    <div className={styles['project-detail']}>
      <div className={styles['project-desc']}>
        <p>{project.description}</p>
        <a href={project.URL} target="_"><button className={styles.button}>VISIT WEBSITE <Image alt='>' src={arrowSkew}/></button></a>
      </div>
      <div className={styles['project-about']}>
        <Image alt={project.name} src={require(`../../assets/projects/${project.index-1}/1.webp`)} className={styles['first-image']}/>
        <div className={styles['about-content']}>
          <div className={styles.about}>
            <h3>About</h3>
            <p>{project.about}</p>
          </div>
          <div className={styles['about-sub']}>
            <div>
              <h4>Role</h4>
              {project.roleLong.map((e, i) => (<div key={i}>{e}</div>))}
            </div>
            {project.team && <div>
              <h4>Team</h4>
              <a href={project.teamURL} target="_">{project.team}<Image alt='>' src={arrowSkew}/></a>
            </div>}
          </div>
        </div>
      </div>
      <div className={styles['project-image']}><Image alt={project.name} src={require(`../../assets/projects/${project.index-1}/2.webp`)}/></div>
      <div className={styles['next-project']}>
        <div className={styles['next-title']}><h3>Next work</h3></div>
        <div className={styles['next-container']} onClick={next}>
          <Image alt='Next' src={nextImg}/>
          <div className={styles['next-name']}>
            <div className={styles.gradient}/>
            <ProjectHeader project={nextProject}/>
            <h2 className={styles.number}>0{nextProject.index}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

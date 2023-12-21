import Image from 'next/image'
import React from 'react'
import arrowSkew from '../../assets/arrow-skew.svg'
import styles from '../styles.module.scss'
import { ProjectHeader } from './ProjectHeader'
import { MotionP } from '@/app/components/animationWraps/MotionP'
import { MotionDiv } from '@/app/components/animationWraps/MotionDiv'
import {motion} from 'framer-motion'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'

export const ProjectContent = ({project, nextImg, nextProject, next}) => {
  const fadeInAnimation = {
    initial: {
      transform: 'scale(1.1)'
    },
    animate: {
      transform: 'scale(1)'
    }
  }

  const fadeInDetail = {
    initial: {
      transform: 'translateY(4rem)'
    },
    animate: {
      transform: 'translateY(0)'
    }
  }

  return (
    <div className={styles['project-detail']}>
      <div className={styles['project-desc']}>
        <MotionP delay={.3} once={true}><p>{project.description}</p></MotionP>
        <MotionDiv delay={.55} once={true}><a href={project.URL} target="_"><button className={styles.button}>VISIT WEBSITE <Image alt='>' src={arrowSkew}/></button></a></MotionDiv>
      </div>
      <motion.div 
        className={styles['detail-container']}
        variants={fadeInDetail}
        transition={{duration: .5, delay: .65}}
        initial='initial'
        animate= "animate"
      >
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
          <div className={styles['next-title']}><h3><MotionTitle>Next work</MotionTitle></h3></div>
          <div className={styles['next-container']} onClick={next}>
            <motion.div 
              className='h-full'
              variants={fadeInAnimation}
              initial='initial'
              whileInView='animate'
              transition={{duration: .5}}
            >
              <Image alt='Next' src={nextImg}/>
            </motion.div>
            <div className={styles['next-name']}>
              <div className={styles.gradient}/>
              <ProjectHeader project={nextProject}/>
              <h2 className={styles.number}>0{nextProject.index}</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

import React from 'react'
import styles from '../styles.module.scss'
import { ProjectHeader } from '../../components/ProjectCard/components/ProjectHeader'
import { MotionP } from '@/app/components/animationWraps/MotionP'
import { MotionDiv } from '@/app/components/animationWraps/MotionDiv'
import {motion} from 'framer-motion'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import { ImgPlaceholder } from '@/app/components/ImgPlaceholder'

export const ProjectContent = ({noImages, animate, project, nextImg, nextProject, next = () => null}) => {
  const fadeInAnimation = {
    initial: {
      transform: 'scale(1.1)',
      transition: 'none'
    },
    animate: {
      transform: 'scale(1)'
    }
  }

  const fadeInDetail = {
    initial: {
      opacity: 0,
      transform: 'translateY(4rem)',
      transition: 'none'
    },
    animate: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }

  return (
    <div className={styles['project-detail']}>
      <div className={styles['project-desc']}>
        <MotionP delay={1} once={true} animate={animate}><p>{project.description}</p></MotionP>
        <div className={`w-fit ${styles['website-btn']}`}>
          <MotionDiv delay={1.3} once={true} animate={animate}>
            <a href={project.URL} target="_">
              <button className={styles.button}>
                VISIT WEBSITE 
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6908 0.495819H2.19498L2.19498 1.69373L8.63903 1.69797L0.0710297 10.266L0.920609 11.1156L9.48861 2.54755L9.49286 8.99161L10.6908 8.99161V0.495819Z" fill="#D2D2D2"/>
                </svg>
              </button>
            </a>
          </MotionDiv>
        </div>
      </div>
      <motion.div 
        className={styles['detail-container']}
        variants={fadeInDetail}
        transition={{duration: .5, delay: 1.5}}
        initial={animate ? 'initial' : 'animate'}
        animate={animate && 'animate'}
      >
        <div className={styles['project-about']}>
          <ImgPlaceholder 
            sizes={'(max-width: 1000px) 100vw, (max-width: 1600px) 50vw, 550px'}
            noImage={noImages}
            alt={project.name}
            src={require(`../../assets/images/projects/${project.index-1}/1.webp`)}
            className={styles['first-image']}
          />
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
                <a href={project.teamURL} target="_">
                  {project.team}
                  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6908 0.495819H2.19498L2.19498 1.69373L8.63903 1.69797L0.0710297 10.266L0.920609 11.1156L9.48861 2.54755L9.49286 8.99161L10.6908 8.99161V0.495819Z" fill="#D2D2D2"/>
                  </svg>
                </a>
              </div>}
            </div>
          </div>
        </div>
        <div className={styles['project-image']}>
          <ImgPlaceholder 
            noImage={noImages} 
            alt={project.name} 
            src={require(`../../assets/images/projects/${project.index-1}/2.webp`)}
            sizes={'(max-width: 1600px) 100vw, 1500px'}
          />
        </div>
        <div className={styles['next-project']}>
          <div className={styles['next-title']}><h3><MotionTitle>Next work</MotionTitle></h3></div>
          <div className={styles['next-container']} onClick={next}>
            <motion.div 
              className={`h-full ${styles['next-image']}`}
              variants={fadeInAnimation}
              initial='initial'
              whileInView='animate'
              transition={{duration: .5}}
            >
              <ImgPlaceholder 
                noImage={noImages} 
                alt='Next' 
                src={nextImg}
                sizes={'(max-width: 1600px) 100vw, 1500px'}
              />
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

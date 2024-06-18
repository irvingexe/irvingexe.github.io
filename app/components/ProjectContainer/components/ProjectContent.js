
import React, { useEffect, useState } from 'react'
import styles from '../styles.module.scss'
import { ProjectHeader } from './ProjectHeader'
import { MotionP } from '@/app/components/animationWraps/MotionP'
import { MotionDiv } from '@/app/components/animationWraps/MotionDiv'
import {motion} from 'framer-motion'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import { ImgPlaceholder } from '@/app/components/ImgPlaceholder'
import Placeholder from '../../Placeholder'
import useWindowSize from '@/app/utils/useWindowSize'

export const ProjectContent = ({noImages, animate, project, nextImg, nextProject, next = () => null}) => {
  const [isClient, setClient] = useState(null);
  const [nextPlaceholder, setNextPlaceholder] = useState(false);
  const windowSize = useWindowSize();

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

  const handleNext = () => {
    setNextPlaceholder(true);
    next();
  }

  useEffect(() => {
    setClient(true);
  }, [setClient])

  return (
    <div className={styles['project-detail']}>
      <div className={styles['project-desc']}>
        {<MotionP delay={.5} once={true} animate={animate} variant='light'>
          <p>
            <Placeholder loading={!project} lines={4} height={'.9em'}>
              {project && project.description}
            </Placeholder>
          </p>
        </MotionP>}
        {project && project.URL && <div className={`w-fit ${styles['website-btn']}`}>
          <MotionDiv delay={1.3} once={true} animate={animate}>
            <a href={project.URL} target="_">
              <button className={styles.button}>
                VISIT WEBSITE 
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6908 0.495819H2.19498L2.19498 1.69373L8.63903 1.69797L0.0710297 10.266L0.920609 11.1156L9.48861 2.54755L9.49286 8.99161L10.6908 8.99161V0.495819Z" fill="#252524"/>
                </svg>
              </button>
            </a>
          </MotionDiv>
        </div>}
      </div>
      <motion.div 
        className={styles['detail-container']}
        variants={fadeInDetail}
        transition={{duration: .5, delay: .8}}
        initial={animate ? 'initial' : 'animate'}
        animate={animate && 'animate'}
      >
        <div className={styles['project-about']}>
          {<ImgPlaceholder 
            loading="lazy"
            sizes={'(max-width: 1000px) 100vw, (max-width: 1600px) 50vw, 550px'}
            noImage={noImages}
            alt={project ? project.name : ''}
            src={noImages ? '' : `portfolio/projects/${project.index-1}/1`}
            className={styles['first-image']}
            width={windowSize.width < 600
                    ? windowSize.width * 2 
                    : (windowSize.width < 1000
                      ? windowSize.width * 1.2
                      : (windowSize.width < 1600
                        ? windowSize.width * .5
                        : 600))}
            height={windowSize.width * .5}
          />}
          <div className={styles['about-content']}>
            <div className={styles.about}>
              <Placeholder loading={!project} fit><h3>About</h3></Placeholder>
              <Placeholder loading={!project} lines={4}><p>{project && project.about}</p></Placeholder>
            </div>
            <div className={styles['about-sub']}>
              <div>
                <Placeholder loading={!project}><h4 className='text-sm'>ROLE</h4></Placeholder>
                {project && project.roleLong.map((e, i) => (<div key={i}>— {e}</div>))}
              </div>
              {project && project.team && <div>
                <h4 className='text-sm'>TEAM</h4>
                <a href={project.teamURL} target="_">
                  {project.team}
                  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6908 0.495819H2.19498L2.19498 1.69373L8.63903 1.69797L0.0710297 10.266L0.920609 11.1156L9.48861 2.54755L9.49286 8.99161L10.6908 8.99161V0.495819Z" fill="#252524"/>
                  </svg>
                </a>
              </div>}
            </div>
          </div>
        </div>
        <div className={styles['project-image']}>
          {isClient && 
            <ImgPlaceholder 
              noImage={noImages} 
              alt={project ? project.name : ''}
              src={noImages ? '' : `portfolio/projects/${project.index-1}/2`}
              sizes={'(max-width: 1600px) 10vw, 1500px'}
              width={windowSize.width < 600
                      ? windowSize.width * 2 
                      : (windowSize.width < 1600
                        ? windowSize.width * 1.2
                        : 1500)}
              height={windowSize.width}
            />
          }
        </div>
        <div className={styles['next-project']}>
          <div className={styles['next-title']}><h3><MotionTitle>Next work</MotionTitle></h3></div>
          <div className={styles['next-container']} onClick={handleNext}>
            <motion.div 
              className={`h-full ${styles['next-image']}`}
              variants={fadeInAnimation}
              initial='initial'
              whileInView='animate'
              transition={{duration: .5}}
            >
            {isClient && 
              <ImgPlaceholder 
                noImage={noImages} 
                alt='Next' 
                src={nextImg}
                sizes={'(max-width: 1600px) 100vw, 1500px'}
                width={windowSize.width < 600
                        ? windowSize.width * 2 
                        : (windowSize.width < 1600
                          ? windowSize.width * 1.2
                          : 1500)}
                height={windowSize.width * .5}
              />
            }
            </motion.div>
            {project && 
            <div className={styles['next-name']}>
              <div className={styles.gradient}/>
              <ProjectHeader project={nextProject}/>
              {nextPlaceholder &&
              <ProjectContent
                animate={true}
                noImages={true}
              />}
            </div>}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

'use client'

import React, { useEffect, useRef, useState } from 'react'
import projects from '../assets/projects';
import App from '../page';
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation';
import { ProjectContent } from './components/ProjectContent';
import { ProjectCard } from '../components/ProjectCard';
import { useLastRoute } from '../contexts/LastRouteProvider';

const Project = ({params}) => {
  const [animate, setAnimate] = useState(false);
  const [spring, setSpring] = useState(false)
  const [close, setClose] = useState(false);
  const [next, setNext] = useState(false);
  const [scrollNext, setScrollNext] = useState(false);
  const router = useRouter();
  const project = projects.get(params.projectId);
  const {setRoute} = useLastRoute();

  const returnHome = () => {
    setClose(true);
    //setAnimate(false);
    setTimeout(() => {
      setRoute('/');
      router.push(`/#work-${params.projectId}`);
    }, 900);
  }

  const handleNext = () => {
    setScrollNext(true)
    setTimeout(() => {
      setNext(true);
      setTimeout(() => {
        //setNext(false);
        //setClose(true)
        setRoute(project.next);
        router.push(`${project.next}`);
      }, 1000);
    }, 300);
  }
  
  if (!projects.get(params.projectId)) {
    return (<App/>);
  }

  return (
    <div id={styles.work} className={`${spring && styles.spring} ${close && styles.close} ${next && styles.next}`}>
      <ProjectCard styles={styles} i={project.index - 1} e={project} close={close} inner={true} returnHome={returnHome} next={scrollNext}>
        <ProjectContent 
          project={project} 
          nextImg={require(`../assets/projects/${project.nextIndex-1}/0.webp`)}
          nextProject={projects.get(project.next)}
          next={handleNext}
          animate={false}
        />
      </ProjectCard>
    </div>
  )
}

export default Project;
'use client'

import React, { useEffect, useRef, useState } from 'react'
import projects from '../assets/projects';
import App from '../page';
import Image from 'next/image';
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation';
import back from '../assets/arrow-back.svg'
import { ProjectContent } from './components/ProjectContent';
import { ProjectHeader } from './components/ProjectHeader';
import Lenis from '@studio-freight/lenis';

const Project = ({params}) => {
  const [animate, setAnimate] = useState(false);
  const [spring, setSpring] = useState(false)
  const [close, setClose] = useState(false);
  const [next, setNext] = useState(false);
  const router = useRouter();
  const scrollContainer = useRef();
  const project = projects.get(params.projectId);
  const scrollRef = useRef();

  const returnHome = () => {
    setClose(true);
    setAnimate(false);
    setTimeout(() => {
      router.push(`/#work-${params.projectId}`);
    }, 1000);
  }

  const handleNext = () => {
    scrollContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    setTimeout(() => {
      setNext(!next);
      setTimeout(() => {
        router.push(`${project.next}`);
      }, 700);
    }, 300);
  }

  useEffect(() => {
    setSpring(true);
    setTimeout(() => {
      setSpring(false);
      setAnimate(true);
    }, 700);
  }, [])

  useEffect(() => {
    const lenis = new Lenis({wrapper: scrollRef.current, content: scrollContainer.current})

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [scrollRef])
  

  if (!projects.get(params.projectId)) {
    return (<App/>);
  }

  return (
    <div id={styles.work} className={`${spring && styles.spring} ${animate && styles.open} ${close && styles.close} ${next && styles.next}`}>
      <div className={styles.project}>
        <div className={styles.card}>
          <h2 className={styles.number}>0{project.index}</h2>
          <Image alt={project.name} src={require(`../assets/projects/${project.index-1}/0.webp`)} className={styles.bg}/>
          <button className={`${styles.back} ${styles.button}`} onClick={returnHome}><Image alt='<' src={back}/>BACK</button>
          <div className={styles.blur} ref={scrollRef}>
            <div className={styles.gradient}/>
            <div className={styles['card-content']} ref={scrollContainer}>
              <ProjectHeader project={project}/>
              <ProjectContent 
                project={project} 
                nextImg={require(`../assets/projects/${project.nextIndex-1}/0.webp`)}
                nextProject={projects.get(project.next)}
                next={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
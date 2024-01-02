'use client'

import React, { useEffect, useState } from 'react'
import projects from '../../assets/projects';
import App from '../../page';
import styles from '../../components/ProjectContainer/styles.module.scss'
import { useRouter } from 'next/navigation';
import { ProjectContent } from '../../components/ProjectContainer/components/ProjectContent';
import { ProjectCard } from '../../components/ProjectContainer/components/ProjectCard';
import { useLastRoute } from '../../contexts/LastRouteProvider';
import { enablePageScroll } from 'scroll-lock';
import { ProjectContainer } from '../../components/ProjectContainer';

const ProjectDetail = ({ projectId }) => {
  const [close, setClose] = useState(false);
  const [next, setNext] = useState(false);
  const [scrollNext, setScrollNext] = useState(false);
  const router = useRouter();
  const {setRoute} = useLastRoute();
  const project = projects.get(projectId);

  const returnHome = () => {
    setClose(true);
    setTimeout(() => {
      setRoute('/');
      router.push(`/#work-${projectId}`);
    }, 900);
  }

  const handleNext = () => {
    setScrollNext(true)
    setTimeout(() => {
      setNext(true);
      setTimeout(() => {
        setRoute(project.next);
        router.push(`${project.next}`);
      }, 1000);
    }, 300);
  }

  useEffect(() => {
    enablePageScroll();
  }, [])
  
  if (!projects.get(projectId)) {
    return (<App/>);
  }

  return (
    <ProjectContainer inner={true}>
      <ProjectCard 
        styles={styles} 
        i={project.index - 1} 
        e={project} 
        close={close} 
        inner={true} 
        returnHome={returnHome} 
        scrollNext={scrollNext}
        next={next}
      >
        <ProjectContent 
          project={project} 
          nextImg={require(`../../assets/images/projects/${project.nextIndex-1}/0.webp`)}
          nextProject={projects.get(project.next)}
          next={handleNext}
          animate={false}
        />
      </ProjectCard>
    </ProjectContainer>
  )
}

export default ProjectDetail;
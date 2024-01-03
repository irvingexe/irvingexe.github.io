'use client'

import React, { useEffect, useState } from 'react'
import styles from '../../components/ProjectContainer/styles.module.scss'
import projects from '@/app/assets/projects';
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle';
import { ProjectCard } from '@/app/components/ProjectContainer/components/ProjectCard';
import { ProjectContent } from '@/app/components/ProjectContainer/components/ProjectContent';
import { ProjectContainer } from '@/app/components/ProjectContainer';

export const Work = () => {
  const [open, setOpen] = useState(false);
  const [isClient, setClient] = useState(null);

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    setClient(true)
  }, [])
  
  return (
    <ProjectContainer>
      <div className={`items-center ${styles.project}`} style={{minHeight: '80vh'}}>
        <h2 className='leading-none'>
          {isClient && <MotionTitle>{`Selected${(window.innerWidth < 600) ? '\n' : ' '}work`}</MotionTitle>}
        </h2>
      </div>
      {[...projects.values()].map((e, i) => (
        <ProjectCard styles={styles} key={i} onProjectOpen={handleOpen} e={e} i={i}>
          {open && <ProjectContent
            project={e} 
            nextImg={`portfolio/projects/${e.nextIndex-1}/0`}
            nextProject={projects.get(e.next)}
            animate={true}
            noImages={true}
          />}
        </ProjectCard>
      ))}
    </ProjectContainer>
  )
}

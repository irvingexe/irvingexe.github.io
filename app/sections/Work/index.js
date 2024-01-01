'use client'

import React, { useState } from 'react'
import styles from '../../components/ProjectContainer/styles.module.scss'
import projects from '@/app/assets/projects';
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle';
import { ProjectCard } from '@/app/components/ProjectContainer/components/ProjectCard';
import { ProjectContent } from '@/app/components/ProjectContainer/components/ProjectContent';
import { ProjectContainer } from '@/app/components/ProjectContainer';

export const Work = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }
  
  return (
    <ProjectContainer>
      <div className={`items-center ${styles.project}`} style={{minHeight: '80vh'}}>
        <h2 className='leading-none'>
          <MotionTitle>{`Selected${((typeof window !== 'undefined') && (window.innerWidth < 600)) ? '\n' : ' '}work`}</MotionTitle>
        </h2>
      </div>
      {[...projects.values()].map((e, i) => (
        <ProjectCard styles={styles} key={i} onProjectOpen={handleOpen} e={e} i={i}>
          {open && <ProjectContent
            project={e} 
            nextImg={require(`../../assets/images/projects/${e.nextIndex-1}/0.webp`)}
            nextProject={projects.get(e.next)}
            animate={true}
            noImages={true}
          />}
        </ProjectCard>
      ))}
    </ProjectContainer>
  )
}

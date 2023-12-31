'use client'

import React, { useState } from 'react'
import styles from '../../[projectId]/styles.module.scss'
import projects from '@/app/assets/projects';
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle';
import { ProjectCard } from '@/app/components/ProjectCard';
import { ProjectContent } from '@/app/[projectId]/components/ProjectContent';

export const Work = ({onProjectOpen}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    onProjectOpen();
    setOpen(true)
  }
  
  return (
    <div id={styles.work} className={styles.landing}>
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
    </div>
  )
}

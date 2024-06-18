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

  //text-8xl font-medium uppercase font-extrabold
  
  return (
    <ProjectContainer>
      <div className={`${styles['work-title']} ${open ? styles.open : ''} items-center`}>
        <h2 className='leading-none text-3xl font-medium'>
          {isClient && <MotionTitle>{`Selected work`}</MotionTitle>}
        </h2>
      </div>
      {[...projects.values()].map((e, i) => (
        <ProjectCard styles={styles} key={i} onProjectOpen={handleOpen} e={e} i={i}>
          {open && <ProjectContent
            animate={true}
            noImages={true}
          />}
        </ProjectCard>
      ))}
    </ProjectContainer>
  )
}

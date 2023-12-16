'use client'

import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import projects from '@/app/assets/projects';
import { useRouter } from 'next/navigation';

export const Work = ({onProjectOpen}) => {
  const router = useRouter();

  const openProject = (projectId) => {
    onProjectOpen();
    setTimeout(() => {
      router.push(`${projectId}`);
    }, 500);
  }

  return (
  <div id={styles.work}>
      {[...projects.values()].map((e, i) => (
        <div key={i} id={`work-${e.route}`} className={styles.project}>
          <a className={styles.card} href={`#work-${e.route}`} onClick={() => openProject(e.route)}>
            <Image alt={e.name} src={require(`../../assets/projects/${i}/0.webp`)} className={styles.bg}/>
            <div className={styles.blur}>
              <div className={styles.gradient}/>
              <div className={styles['card-content']}>
                <div className={styles.desc}>{e.subtitle}</div>
                <h2 className={styles.title}>{e.name}</h2>
                <div className={styles.roles}>
                  {e.role.map((role, i) => <div key={i} className={styles.role}>{role}</div>)}
                </div>
                <h2 className={styles.number}>0{i+1}</h2>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

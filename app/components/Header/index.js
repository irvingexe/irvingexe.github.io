'use client'

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import {home} from '../../sections/Home/styles.module.scss'
import work from '../../components/ProjectContainer/styles.module.scss'
import {who} from '../../sections/Who/styles.module.scss'
import {contact} from '../../sections/Contact/styles.module.scss'
import {ido} from '../../sections/IDo/styles.module.scss'
import { Transition } from '../Transition'
import { useUI } from '@/app/contexts/UIProvider'
const projectContainer = work['project-container']

export const Header = () => {
  const [open, setOpen] = useState();
  const [playTransition, setPlayTransition] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const {isUIHidden} = useUI();

  const handleTransition = () => {
    setPlayTransition(true);
    setTimeout(() => {
      setPlayTransition(false);
    }, 1000);
  }

  const handleScroll = (sectionId) => {
    handleTransition();
    setOpen(false);
    setTimeout(() => document.getElementById(sectionId).scrollIntoView({ }), 750);
  }

  useEffect(() => {
    setFirstRender(false);
  }, [])
  
  return (
    <>
      <div 
        id={styles.header} 
        className={`${(isUIHidden || firstRender) ? styles.hidden : ''} ${open ? styles.open : ''}`}
      >
        <div className={styles['header-container']}>
          <div className={styles['header-content']}>
            <div className={`${styles['desktop-item']} a`} onClick={() => handleScroll(home)}>
              <svg className={styles.logo} width="1em" height="1em" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0222 19.7033L13 0.5" stroke="#D2D2D2" strokeWidth="4"/>
                <path d="M22 1L4 1" stroke="#D2D2D2" strokeWidth="2" strokeLinecap="round"/>
                <path d="M19 20L1 20" stroke="#D2D2D2" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={`${styles['mobile-item']} a`} onClick={() => handleScroll(contact)}>Contact</div>
            <div className={`${styles['header-center']} ${styles['desktop-item']}`}>
              <div className='a' onClick={() => handleScroll(projectContainer)}>Work</div>
              <div className='a' onClick={() => handleScroll(ido)}>I do</div>
              <div className='a' onClick={() => handleScroll(who)}>Who</div>
            </div>
            <div>
              <div className={`${styles['desktop-item']} a`} onClick={() => handleScroll(contact)}>Contact</div>
                <svg className={styles['mobile-item']} onClick={() => setOpen(!open)} width="46" height="20" viewBox="0 0 46 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1_6_215" fill="white">
                  <path d="M0 0H46V20H0V0Z"/>
                  </mask>
                  <path d="M0 1H46V-1H0V1ZM46 19H0V21H46V19Z" fill="#D2D2D2" mask="url(#path-1-inside-1_6_215)"/>
                </svg>
            </div>
          </div>
          <div className={styles['header-mobile']}>
            <div className='a' onClick={() => handleScroll(home)}>Home</div>
            <div className='a' onClick={() => handleScroll(work)}>Work</div>
            <div className='a' onClick={() => handleScroll(ido)}>I do</div>
            <div className='a' onClick={() => handleScroll(who)}>Who</div>
          </div>
        </div>
      </div>
      <Transition play={playTransition}/>
    </>
  )
}

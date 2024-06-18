'use client'

import React, { useEffect, useState } from 'react'
import styles from '../styles.module.scss'
import {home} from '../../../sections/Hero/styles.module.scss'
import {who} from '../../../sections/Me/styles.module.scss'
import {contact} from '../../../sections/Contact/styles.module.scss'
import {ido} from '../../../sections/IDo/styles.module.scss'
import { Transition } from '../../Transition'
import { useUI } from '@/app/contexts/UIProvider'
import MobileMenu from './MobileMenu'

export const Menu = ({type, maskTop, maskBottom, scrollPosition, windowHeight}) => {
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
  
        // `rect(${type === 'home' ? 0 : maskTop}% 100% ${type === 'home' ? maskTop : 100}% 0%)`
        // dark `rect(${maskTop}% 100% ${maskBottom}% 0%)`
        // bottom `rect(${maskBottom}% 100% ${100 - maskTop}% 0%)`
        // top `rect(${100 - maskBottom}% 100% ${maskTop}% 0%)`
  return (
    <>
      <div
        id={styles.navbar} 
        style={{clipPath: type !== 'home' 
          ? `rect(${maskTop}% 100% ${maskBottom}% 0%)`
          : scrollPosition > windowHeight
            ? `rect(${maskBottom}% 100% ${100 - maskTop}% 0%)`
            : `rect(${100 - maskBottom}% 100% ${maskTop}% 0%)`}}
      >
        <div 
          id={styles.header}
          className={`${styles[type]} ${styles['container']} ${(isUIHidden || firstRender) ? styles.hidden : ''} ${open ? styles.open : ''}`}
        >
          {type !== 'home' &&
          <div className={styles['nav-blur']}>
            <div/>
            <div/>
            <div/>
            <div/>
          </div>}
          <div className={styles['header-container']}>
            <div className={styles['header-content']}>
              <div className={`${styles['desktop-item']} a`} onClick={() => handleScroll(home)}>
                <svg className={styles.logo} width="1em" height="1em" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0222 19.7033L13 0.5" stroke="#e3e3e3" strokeWidth="4"/>
                  <path d="M22 1L4 1" stroke="#e3e3e3" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19 20L1 20" stroke="#e3e3e3" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className={`${styles['mobile-item']} a`} onClick={() => handleScroll(contact)}>Contact</div>
              <div className={`${styles['header-center']} ${styles['desktop-item']}`}>
                <div className='a' onClick={() => handleScroll('work-formula1')}>Work</div>
                <div className='a' onClick={() => handleScroll(ido)}>I do</div>
                <div className='a' onClick={() => handleScroll(who)}>Who</div>
              </div>
              <div>
                <div className={`${styles['desktop-item']} a`} onClick={() => handleScroll(contact)}>Contact</div>
                  <svg className={styles['mobile-item']} onClick={() => setOpen(!open)} width="46" height="20" viewBox="0 0 46 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_6_215" fill="white">
                    <path d="M0 0H46V20H0V0Z"/>
                    </mask>
                    <path d="M0 1H46V-1H0V1ZM46 19H0V21H46V19Z" fill="#e3e3e3" mask="url(#path-1-inside-1_6_215)"/>
                  </svg>
              </div>
            </div>
            <MobileMenu handleScroll={handleScroll} />
          </div>
        </div>
        {/*<svg height="0">
          <defs>
            <mask id="mask-linear">
              <rect width="400" height="300" fill="url(#l1)"></rect>
              <linearGradient id="l1" x1="0" y1="0" x2="0" y2="1">
                <stop stop-color="white" offset="0%"/>
                <stop stop-color="black" offset="30%"/>
                <stop stop-color="white" offset="100%"/>
              </linearGradient>
            </mask>
            <filter id="mask-filtre">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
            </filter>
          </defs>
          </svg>*/}
      </div>
      <Transition play={playTransition}/>
    </>
  )
}

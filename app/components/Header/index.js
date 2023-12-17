import React, { useState } from 'react'
import styles from './styles.module.scss'
import {home} from '../../sections/Home/styles.module.scss'
import {work} from '../../sections/Work/styles.module.scss'
import {who} from '../../sections/Who/styles.module.scss'
import {contact} from '../../sections/Contact/styles.module.scss'
import {ido} from '../../sections/IDo/styles.module.scss'
import Image from 'next/image'
import menu from '@/app/assets/menu.svg'
import logo from '../../assets/logo.svg'
import { Transition } from '../Transition'

export const Header = ({hidden}) => {
  const [open, setOpen] = useState();
  const [playTransition, setPlayTransition] = useState(false);

  const handleTransition = () => {
    setPlayTransition(true);
    setTimeout(() => {
      setPlayTransition(false);
    }, 1000);
  }

  const handleScroll = (sectionId) => {
    handleTransition();
    setOpen(false);
    setTimeout(() => document.getElementById(sectionId).scrollIntoView({ }), 500);
  }
  
  return (
    <>
      <div id={styles.header} className={`${hidden && styles.hidden} ${open && styles.open}`}>
        <div className={styles['header-container']}>
          <div className={styles['header-content']}>
            <div className={`${styles['desktop-item']} a`} onClick={() => handleScroll(home)}>
              <Image alt='Home' src={logo} className={styles.logo}/>
            </div>
            <div className={`${styles['mobile-item']} a`} onClick={() => handleScroll(contact)}>Contact</div>
            <div className={`${styles['header-center']} ${styles['desktop-item']}`}>
              <div className='a' onClick={() => handleScroll(work)}>Work</div>
              <div className='a' onClick={() => handleScroll(ido)}>I do</div>
              <div className='a' onClick={() => handleScroll(who)}>Who</div>
            </div>
            <div>
              <div className={`${styles['desktop-item']} a`} onClick={() => handleScroll(contact)}>Contact</div>
              <Image alt='menu' src={menu} className={styles['mobile-item']} onClick={() => setOpen(!open)}/>
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

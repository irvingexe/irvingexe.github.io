import React, { useState } from 'react'
import styles from './styles.module.scss'
import {home} from '../../sections/Home/styles.module.scss'
import {work} from '../../sections/Work/styles.module.scss'
import {who} from '../../sections/Who/styles.module.scss'
import {contact} from '../../sections/Contact/styles.module.scss'
import {ido} from '../../sections/IDo/styles.module.scss'
import Image from 'next/image'
import menu from '@/app/assets/menu.svg'

export const Header = ({hidden}) => {
  const [open, setOpen] = useState();
  
  return (
    <div id={styles.header} className={`${hidden && styles.hidden} ${open && styles.open}`}>
      <div className={styles['header-container']}>
        <div className={styles['header-content']}>
          <a className={styles['desktop-item']} href={`#${home}`}>Home</a>
          <a className={styles['mobile-item']} href={`#${contact}`}>Contact</a>
          <div className={`${styles['header-center']} ${styles['desktop-item']}`}>
            <a href={`#${work}`}>Work</a>
            <a href={`#${ido}`}>I do</a>
            <a href={`#${who}`}>Who</a>
          </div>
          <div>
            <a className={styles['desktop-item']} href={`#${contact}`}>Contact</a>
            <Image alt='menu' src={menu} className={styles['mobile-item']} onClick={() => setOpen(!open)}/>
          </div>
        </div>
        <div className={styles['header-mobile']}>
          <a href={`#${home}`} onClick={() => setOpen(false)}>Home</a>
          <a href={`#${work}`} onClick={() => setOpen(false)}>Work</a>
          <a href={`#${ido}`} onClick={() => setOpen(false)}>I do</a>
          <a href={`#${who}`} onClick={() => setOpen(false)}>Who</a>
        </div>
      </div>
    </div>
  )
}

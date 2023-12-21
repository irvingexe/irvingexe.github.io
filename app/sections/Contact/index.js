'use client'

import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
import linkedin from '../../assets/LinkedIn.svg'
import github from '../../assets/GitHub.svg'
import whatsapp from '../../assets/WhatsApp.svg'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import { MotionDiv } from '@/app/components/animationWraps/MotionDiv'

export const Contact = () => {
  return (
    <div id={styles.contact}>
      <h2 className={styles['form-title']}><MotionTitle>{"Let's Talk"}</MotionTitle></h2>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <MotionDiv delay={0.35}>
          <div className={`form-item ${styles['form-item']}`}>
            <label htmlFor="form-name" >Name </label>
            <div className='input-background'></div>
            <input type="text" name="name" id='form-name'/>
          </div>
        </MotionDiv>
        <MotionDiv delay={0.4}>
          <div className={`form-item ${styles['form-item']}`}>
            <label htmlFor="form-email" >Email </label>
            <div className='input-background'></div>
            <input type="text" name="email" id='form-email'/>
          </div>
        </MotionDiv>
        <MotionDiv delay={0.45}>
          <div className={`form-item ${styles['form-item']}`}>
            <label htmlFor="form-message" >Message </label>
            <div className='input-background textarea'></div>
            <textarea rows={4} cols={50} name="message" id='form-message'></textarea>
          </div>
        </MotionDiv>
        <MotionDiv delay={0.5}>
          <button type='submit'>SEND</button>
        </MotionDiv>
      </form>
      <div className={styles['contact-info']}>
        <div className={styles.links}>
          <MotionDiv delay={0.3}>
            <a href="https://www.linkedin.com/in/irving-mariscales" target="_">
              <Image src={linkedin} alt='LinkedIn'/>
            </a>
          </MotionDiv>
          <MotionDiv delay={0.35}>
            <a href="https://github.com/irvingexe/" target="_">
              <Image src={github} alt='GitHub'/>
            </a>
          </MotionDiv>
          <MotionDiv delay={0.4}>
            <a href="tel:+526871305206" target="_">
              <Image src={whatsapp} alt='WhatsApp'/>
            </a>
          </MotionDiv>
        </div>
        <div className={styles.mailnphone}>
          <MotionDiv delay={0.35}><a href="mailto:hello@irving.work" target="_">hello@irving.work</a></MotionDiv>
          <MotionDiv delay={0.4}><a href="tel:+526871305206" target="_">{'(+52) 687 130 5206'}</a></MotionDiv>
        </div>
      </div>
    </div>
  )
}

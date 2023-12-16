'use client'

import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
import linkedin from '../../assets/LinkedIn.svg'
import github from '../../assets/GitHub.svg'
import whatsapp from '../../assets/WhatsApp.svg'

export const Contact = () => {
  return (
    <div id={styles.contact}>
      <h2 className={styles['form-title']}>{"Let's Talk"}</h2>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={`form-item ${styles['form-item']}`}>
          <label htmlFor="form-name" >Name </label>
          <div className='input-background'></div>
          <input type="text" name="name" id='form-name'/>
        </div>
        <div className={`form-item ${styles['form-item']}`}>
          <label htmlFor="form-email" >Email </label>
          <div className='input-background'></div>
          <input type="text" name="email" id='form-email'/>
        </div>
        <div className={`form-item ${styles['form-item']}`}>
          <label htmlFor="form-message" >Message </label>
          <div className='input-background textarea'></div>
          <textarea rows={4} cols={50} name="message" id='form-message'></textarea>
        </div>
        <button type='submit'>SEND</button>
      </form>
      <div className={styles['contact-info']}>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/irving-mariscales" target="_">
            <Image src={linkedin} alt='LinkedIn'/>
          </a>
          <a href="https://github.com/irvingexe/" target="_">
            <Image src={github} alt='GitHub'/>
          </a>
          <a href="tel:+526871305206" target="_">
            <Image src={whatsapp} alt='WhatsApp'/>
          </a>
        </div>
        <div className={styles.mailnphone}>
          <a href="mailto:hello@irving.work">hello@irving.work</a>
          <a href="tel:+526871305206">{'(+52) 687 130 5206'}</a>
        </div>
      </div>
    </div>
  )
}

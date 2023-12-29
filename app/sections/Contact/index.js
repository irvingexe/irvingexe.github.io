'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import linkedin from '../../assets/LinkedIn.svg'
import github from '../../assets/GitHub.svg'
import whatsapp from '../../assets/WhatsApp.svg'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import { MotionDiv } from '@/app/components/animationWraps/MotionDiv'
import { useInView } from 'framer-motion'
import { ValidationError, useForm } from '@formspree/react'
import { MotionP } from '@/app/components/animationWraps/MotionP'

export const Contact = () => {
  const fadeInAnchor = useRef();
  const isInView = useInView(fadeInAnchor, {margin: "-50% 0% -50% 0%"});
  let isOffView = useInView(fadeInAnchor, {margin: "-10% 0% -10% 0%"});
  isOffView = !isOffView;
  const [animate, setAnimate] = useState();
  const [state, handleSubmit] = useForm("xyyryyzq");

  const onSubmit = (e) => {
    handleSubmit(e);
  }
  
  useEffect(() => {
    if (isInView && !animate) {
      setAnimate(true)
    } else if (isOffView && animate) {
      setAnimate(false)
    }
  }, [isInView, isOffView, animate])
  
  return (
    <div id={styles.contact} ref={fadeInAnchor}>
      <h2 className={styles['form-title']}><MotionTitle isInView={animate}>{"Let's Talk"}</MotionTitle></h2>
      <form className={`relative ${styles.form} ${state.succeeded && styles.disabled}`} onSubmit={onSubmit}>
        <div className='absolute w-full'>
          <h2 className={styles['thanks']}>
            <MotionTitle delay={1.2} isInView={animate && state.succeeded}>
              {"Thank you!"}
            </MotionTitle>
          </h2>
          <MotionP delay={1.4} isInView={animate && state.succeeded}>
            <p className={`mt-20 ${styles.lead}`}>
              {`It's great to hear from you! I will get back to you soon.`}
            </p>
          </MotionP>
        </div>
        <MotionDiv delay={0.4} isInView={animate && !state.succeeded}>
          <div className={`form-item ${styles['form-item']}`}>
            <label htmlFor="form-name" >Name </label>
            <div className='input-background'></div>
            <input type="text" name="name" id='form-name' required/>
          </div>
        </MotionDiv>
        <MotionDiv delay={0.5} isInView={animate && !state.succeeded}>
          <div className={`form-item ${styles['form-item']}`}>
            <label htmlFor="form-email" >Email </label>
            <div className='input-background'></div>
            <input type="email" name="email" id='form-email' required/>
          </div>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </MotionDiv>
        <MotionDiv delay={0.6} isInView={animate && !state.succeeded}>
          <div className={`form-item ${styles['form-item']}`}>
            <label htmlFor="message" >Message </label>
            <div className='input-background textarea'></div>
            <textarea rows={4} cols={50} name="message" id='message' required></textarea>
          </div>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </MotionDiv>
        <MotionDiv delay={0.7} isInView={animate && !state.succeeded}>
          <button type='submit' disabled={state.submitting} className={`${styles.submit} ${state.submitting && styles.submitting}`}>
            <div className={`${styles.loading} relative`}><div className="lds-dual-ring"/></div>
            <div>SEND</div>
          </button>
        </MotionDiv>
      </form>
      <div className={styles['contact-info']}>
        <div className={styles.links}>
          <MotionDiv delay={0.3} isInView={animate}>
            <a href="https://www.linkedin.com/in/irving-mariscales" target="_">
              <Image src={linkedin} alt='LinkedIn'/>
            </a>
          </MotionDiv>
          <MotionDiv delay={0.4} isInView={animate}>
            <a href="https://github.com/irvingexe/" target="_">
              <Image src={github} alt='GitHub'/>
            </a>
          </MotionDiv>
          <MotionDiv delay={0.5} isInView={animate}>
            <a href="tel:+526871305206" target="_">
              <Image src={whatsapp} alt='WhatsApp'/>
            </a>
          </MotionDiv>
        </div>
        <div className={styles.mailnphone}>
          <MotionDiv delay={0.4} isInView={animate}><a href="mailto:hello@irving.work" target="_">hello@irving.work</a></MotionDiv>
          <MotionDiv delay={0.5} isInView={animate}><a href="tel:+526871305206" target="_">{'(+52) 687 130 5206'}</a></MotionDiv>
        </div>
      </div>
    </div>
  )
}

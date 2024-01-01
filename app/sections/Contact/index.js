'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
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
  const [animate, setAnimate] = useState(false);
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
      <div>
        <h2 className={styles['form-title']}><MotionTitle isInView={animate}>{"Let's Talk"}</MotionTitle></h2>
        <form className={`relative ${styles.form} ${state.succeeded && styles.disabled}`} onSubmit={onSubmit}>
          <div className={`absolute w-full flex flex-col ${styles.sent}`}>
            <h2 className={styles['thanks']}>
              <MotionTitle delay={1.2} isInView={animate && state.succeeded}>
                {"Thank you for\nyour message!"}
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
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.9675 0H0.931573C0.417026 0 0 0.417026 0 0.931573V23.9674C0 24.4821 0.417026 24.8991 0.931573 24.8991H23.9678C24.4824 24.8991 24.8994 24.482 24.8994 23.9674V0.931573C24.8991 0.417026 24.482 0 23.9675 0ZM6.61513 20.4888C6.61513 20.8319 6.33718 21.1097 5.99408 21.1097H3.50771C3.16491 21.1097 2.88666 20.8318 2.88666 20.4888V9.62128C2.88666 9.27813 3.16491 9.00023 3.50771 9.00023H5.99408C6.33718 9.00023 6.61513 9.27813 6.61513 9.62128V20.4888ZM6.61513 6.46819C6.61513 6.81134 6.33718 7.08924 5.99408 7.08924H3.50771C3.16491 7.08924 2.88666 6.81129 2.88666 6.46819V4.26037C2.88666 3.91722 3.16491 3.63932 3.50771 3.63932H5.99408C6.33718 3.63932 6.61513 3.91722 6.61513 4.26037V6.46819ZM22.0125 20.4888C22.0125 20.8319 21.7343 21.1097 21.3914 21.1097H18.905C18.5619 21.1097 18.284 20.8318 18.284 20.4888V15.9001C18.284 14.3785 18.2045 13.3945 18.0449 12.9476C17.8856 12.5008 17.627 12.1536 17.2686 11.9062C16.9103 11.6584 16.4792 11.5348 15.9749 11.5348C15.3291 11.5348 14.7496 11.7117 14.2366 12.0654C13.7236 12.4194 13.3721 12.888 13.1818 13.4718C12.9917 14.0556 12.8967 15.135 12.8967 16.7093V20.4888C12.8967 20.8319 12.6185 21.1097 12.2757 21.1097H9.78927C9.44648 21.1097 9.16823 20.8318 9.16823 20.4888V9.62128C9.16823 9.27813 9.44643 9.00023 9.78927 9.00023H12.0102C12.3533 9.00023 12.6312 9.27813 12.6312 9.62128V10.4491C12.6312 10.7923 12.7993 10.8475 13.0299 10.5938C14.19 9.31913 15.6051 8.68164 17.2754 8.68164C18.098 8.68164 18.8498 8.82975 19.5311 9.12601C20.2121 9.42223 20.7275 9.80044 21.0769 10.2603C21.4262 10.7202 21.6697 11.2422 21.8066 11.826C21.9436 12.4098 22.0125 13.2457 22.0125 14.3338V20.4888H22.0125Z" fill="#D2D2D2" fillOpacity="0.9"/>
                </svg>
              </a>
            </MotionDiv>
            <MotionDiv delay={0.4} isInView={animate}>
              <a href="https://github.com/irvingexe/" target="_">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0C19.3759 0 24.9497 5.71432 24.9497 12.7646C24.9497 18.403 21.3866 23.1862 16.4428 24.8757C15.8116 25.0014 15.5875 24.6028 15.5875 24.2629C15.5875 23.8421 15.6024 22.4677 15.6024 20.7596C15.6024 19.5694 15.2041 18.7926 14.7571 18.3967C17.5297 18.0805 20.4429 17.001 20.4429 12.0983C20.4429 10.704 19.9598 9.56611 19.1606 8.67223C19.29 8.34978 19.7171 7.05144 19.0386 5.29355C19.0386 5.29355 17.9953 4.95152 15.6186 6.60235C14.6239 6.31974 13.5582 6.17754 12.5 6.17256C11.4418 6.17754 10.3773 6.31974 9.38382 6.60235C7.00469 4.95152 5.95892 5.29355 5.95892 5.29355C5.2829 7.05144 5.70992 8.34978 5.83815 8.67223C5.04262 9.56611 4.55584 10.704 4.55584 12.0983C4.55584 16.9886 7.46284 18.0846 10.2279 18.4071C9.87185 18.7258 9.5494 19.288 9.43736 20.1134C8.72773 20.4396 6.92501 21.0041 5.81449 19.0532C5.81449 19.0532 5.15591 17.8268 3.90596 17.7372C3.90596 17.7372 2.69212 17.721 3.8213 18.5128C3.8213 18.5128 4.63676 18.905 5.20322 20.3803C5.20322 20.3803 5.93402 22.6585 9.39752 21.8866C9.40375 22.9536 9.41495 23.9591 9.41495 24.2629C9.41495 24.6003 9.18587 24.9952 8.56463 24.8769C3.61712 23.1899 0.050293 18.4043 0.050293 12.7646C0.050293 5.71432 5.62526 0 12.5 0Z" fill="#D2D2D2" fillOpacity="0.9"/>
                </svg>
              </a>
            </MotionDiv>
            <MotionDiv delay={0.5} isInView={animate}>
              <a href="tel:+526871305206" target="_">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.7973 17.5803C19.4972 18.4296 18.3045 19.1323 17.3534 19.3377C16.7022 19.476 15.8532 19.5853 12.9922 18.3998C9.77897 17.0685 5.31701 12.3264 5.31701 9.1707C5.31701 7.56421 6.24326 5.69354 7.86297 5.69354C8.64232 5.69354 8.81412 5.70874 9.07059 6.32393C9.37062 7.04873 10.1027 8.83445 10.1898 9.01751C10.5496 9.76845 9.82378 10.2081 9.29716 10.8619C9.12909 11.0586 8.93862 11.2714 9.15151 11.6375C9.36316 11.9962 10.0952 13.1893 11.1708 14.1469C12.5602 15.3848 13.6869 15.78 14.0903 15.9481C14.3903 16.0727 14.7489 16.0436 14.968 15.8095C15.2456 15.5094 15.5905 15.0114 15.9416 14.5208C16.1893 14.1696 16.5043 14.1257 16.8342 14.2503C17.0571 14.3275 19.8894 15.6428 20.0089 15.8533C20.0973 16.0065 20.0973 16.731 19.7973 17.5803ZM12.5528 0H12.5465C5.68302 0 0.100586 5.58412 0.100586 12.4497C0.100586 15.172 0.978297 17.6977 2.47101 19.7462L0.919781 24.3723L5.7042 22.8435C7.67249 24.1461 10.0217 24.8994 12.5528 24.8994C19.4163 24.8994 25 19.3153 25 12.4497C25 5.58412 19.4163 0 12.5528 0Z" fill="#D2D2D2" fillOpacity="0.9"/>
                </svg>
              </a>
            </MotionDiv>
          </div>
          <div className={styles.mailnphone}>
            <MotionDiv delay={0.4} isInView={animate}><a href="mailto:hello@irving.work" target="_">hello@irving.work</a></MotionDiv>
            <MotionDiv delay={0.5} isInView={animate}><a href="tel:+526871305206" target="_">{'(+52) 687 130 5206'}</a></MotionDiv>
          </div>
        </div>
      </div>
    </div>
  )
}

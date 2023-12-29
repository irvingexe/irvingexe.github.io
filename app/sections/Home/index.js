import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import {work} from '../../[projectId]/styles.module.scss'
import { MotionP } from '@/app/components/animationWraps/MotionP'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import { MotionDiv } from '@/app/components/animationWraps/MotionDiv'
import { useInView } from 'framer-motion'

export const Home = () => {
  const fadeInAnchor = useRef();
  const isInView = useInView(fadeInAnchor, {margin: "-50% 0% -50% 0%"});
  let isOffView = useInView(fadeInAnchor, {margin: "-10% 0% -10% 0%"});
  isOffView = !isOffView;
  const [animate, setAnimate] = useState();

  const handleScroll = () => {
    document.getElementById(work).scrollIntoView({ behavior: 'smooth' });
  }
  
  useEffect(() => {
    if (isInView && !animate) {
      setAnimate(true)
    } else if (isOffView && animate) {
      setAnimate(false)
    }
  }, [isInView, isOffView, animate])
  
  return (
    <div id={styles.home} ref={fadeInAnchor}>
      <div className={styles.container}>
        <h2><MotionTitle isInView={animate}>Hello</MotionTitle></h2>
        <br/>
        <MotionP delay={.2} isInView={animate}>
          <p className={styles.lead}>
            I’m Irving Mariscales, Front-End Engineer and Interaction Designer.
            <br/><br/>
            Here I present some of my projects, feel free to take a look.
          </p>
        </MotionP>
      </div>
      <div className={`${styles.scroll} a`} onClick={handleScroll}>
        <MotionDiv delay={.45} isInView={animate}>Scroll</MotionDiv>
        <MotionDiv delay={.5} isInView={animate}>
          <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="10.9659" y2="-0.5" transform="matrix(0.683941 -0.729537 0.545602 0.838044 7.5 9)" stroke="#8DAD93" strokeOpacity="0.8"/>
            <line y1="-0.5" x2="10.9659" y2="-0.5" transform="matrix(0.683941 0.729537 -0.545602 0.838044 0 1)" stroke="#8DAD93" strokeOpacity="0.8"/>
          </svg>
        </MotionDiv>
      </div>
    </div>
  )
}

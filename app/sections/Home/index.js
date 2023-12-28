import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import arrow from '../../assets/arrow-down.svg'
import {work} from '../../sections/Work/styles.module.scss'
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
        <MotionDiv delay={.5} isInView={animate}><Image alt='arrow' src={arrow} /></MotionDiv>
      </div>
    </div>
  )
}

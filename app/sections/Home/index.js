import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import arrow from '../../assets/arrow-down.svg'
import {work} from '../../sections/Work/styles.module.scss'
import { MotionP } from '@/app/components/animationWraps/MotionP'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import { MotionDiv } from '@/app/components/animationWraps/MotionDiv'

export const Home = () => {
  const handleScroll = () => {
    document.getElementById(work).scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <div id={styles.home}>
      <div className={styles.container}>
        <h2><MotionTitle>Hello</MotionTitle></h2>
        <br/>
        <MotionP delay={.2}>
          <p className={styles.lead}>
            I’m Irving Mariscales, Front-End Engineer and Interaction Designer.
            <br/><br/>
            Here I present some of my projects, feel free to take a look.
          </p>
        </MotionP>
      </div>
      <div className={`${styles.scroll} a`} onClick={handleScroll}>
        <MotionDiv delay={.4}>Scroll</MotionDiv>
        <MotionDiv delay={.45}><Image alt='arrow' src={arrow} /></MotionDiv>
      </div>
    </div>
  )
}

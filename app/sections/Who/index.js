'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import {motion, useInView} from 'framer-motion'
import { MotionP } from '@/app/components/animationWraps/MotionP'
import { CldImage } from 'next-cloudinary'

export const Who = () => {
  const fadeInAnchor = useRef();
  const isInView = useInView(fadeInAnchor, {margin: "-50% 0% -50% 0%"});
  let isOffView = useInView(fadeInAnchor, {margin: "-10% 0% -10% 0%"});
  isOffView = !isOffView;
  const [animate, setAnimate] = useState(false);

  const imgContainerFadeIn = {
    initial: {
      opacity: 0,
      clipPath: 'circle(0% at 0% 80%)',
      transform: 'translate(-2rem, 2rem)',
      transition: 'none'
    },
    animate: {
      opacity: 1,
      clipPath: 'circle(200% at 0% 100%)',
      transform: 'translate(0rem, 0rem)'
    }
  }

  const imgFadeIn = {
    initial: {
      transform: 'scale(1.2)',
      transition: 'none'
    },
    animate: {
      transform: 'scale(1)'
    }
  }

  const imgFadeInCircle = {
    initial: {
      opacity: 0,
      transform: 'translateX(4rem)',
      transition: 'none'
    },
    animate: {
      opacity: 1,
      transform: 'translateX(0rem)'
    }
  }
  
  useEffect(() => {
    if (isInView && !animate) {
      setAnimate(true)
    } else if (isOffView && animate) {
      setAnimate(false)
    }
  }, [isInView, isOffView, animate])
  

  return (
    <div id={styles.who} ref={fadeInAnchor}>
      <div>
        <motion.div
          className={`${styles['img-main-container']} overflow-hidden`}
          variants={imgContainerFadeIn}
          transition={{duration: .5}}
          initial={'initial'}
          animate={animate ? 'animate' : 'initial'}
        >
          <motion.div
            variants={imgFadeIn}
            transition={{duration: .5}}
            initial={'initial'}
            animate={animate ? 'animate' : 'initial'}
          >
            <CldImage 
              src='portfolio/portrait'
              width={350}
              height={500}
              sizes={'(max-width: 1500px) 40vw, 350px'}
              className={styles['img-main']} 
              alt='Irving Mariscales' 
            />
          </motion.div>
        </motion.div>
        <div className={styles['txt-container']}>
          <div className={styles.title}>
            <h2><MotionTitle delay={0.15} isInView={animate}>Hey</MotionTitle></h2>
            <motion.div
              variants={imgFadeInCircle}
              transition={{duration: .5, delay: .15}}
              initial={'initial'}
              animate={animate ? 'animate' : 'initial'}
              className={`${styles['img-mobile-wrapper']} w-fit max-h-24`}
            >
              <CldImage 
                src='portfolio/portrait'
                width={200}
                height={200}
                className={styles['img-mobile']} 
                alt='Irving Mariscales' 
                sizes={'50vw'}
              />
            </motion.div>
          </div>
            <div>
              <MotionP delay={.3} isInView={animate}>
                <p className='text-2xl font-light'>
                  {"Thanks for stopping by! I'm Irving, Software Engineer."}
                  <br/><br/>
                  {"As a developer, I'm passionate about building user-centric products.\nGreat digital products don't happen by chance. I leverage data and user insights to build experiences that drive user engagement and business growth."}
                </p>
              </MotionP>
            </div>
        </div>
      </div>
    </div>
  )
}

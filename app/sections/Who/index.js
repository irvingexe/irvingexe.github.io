import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import me from '../../assets/images/me.webp'
import meRound from '../../assets/images/meRound.webp'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import {motion, useInView} from 'framer-motion'
import { MotionP } from '@/app/components/animationWraps/MotionP'

export const Who = () => {
  const fadeInAnchor = useRef();
  const isInView = useInView(fadeInAnchor, {margin: "-50% 0% -50% 0%"});
  let isOffView = useInView(fadeInAnchor, {margin: "-10% 0% -10% 0%"});
  isOffView = !isOffView;
  const [animate, setAnimate] = useState();

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
      transform: 'translate(0, 0)'
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
      transform: 'translate(4rem, 0)',
      transition: 'none'
    },
    animate: {
      opacity: 1,
      transform: 'translate(0, 0)'
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
            <Image className={styles['img-main']} alt='Irving Mariscales' src={me}/>
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
            >
              <Image className={styles['img-mobile']} alt='Irving Mariscales' src={meRound}/>
            </motion.div>
          </div>
            <div>
              <MotionP delay={.3} isInView={animate}>
                <p>
                  {"Thanks for stopping by. I'm Irving, Software Engineer."}
                  <br/><br/>
                  {"As a multidisciplinary developer crafting web applications, I'm majorly involved in Front-End development specializing in visual and interactive web experiences."}
                  <br/><br/>
                  {'My expertise lies in creating robust digital solutions that not only look stunning but care about scalability and performance to deliver the best experience.'}
                </p>
              </MotionP>
            </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import me from '../../assets/me.webp'
import meRound from '../../assets/meRound.webp'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import {motion} from 'framer-motion'
import { MotionP } from '@/app/components/animationWraps/MotionP'

export const Who = () => {

  const imgContainerFadeIn = {
    initial: {
      opacity: 0,
      clipPath: 'circle(0% at 0% 80%)',
      transform: 'translate(-2rem, 2rem)'
    },
    animate: {
      opacity: 1,
      clipPath: 'circle(200% at 0% 100%)',
      transform: 'translate(0, 0)'
    }
  }

  const imgFadeIn = {
    initial: {
      transform: 'scale(1.2)'
    },
    animate: {
      transform: 'scale(1)'
    }
  }

  return (
    <div id={styles.who}>
      <motion.div
        className={`${styles['img-main-container']} overflow-hidden`}
        variants={imgContainerFadeIn}
        transition={{duration: .5}}
        initial={'initial'}
        whileInView={'animate'}
      >
        <motion.div
          variants={imgFadeIn}
          transition={{duration: .5}}
          initial={'initial'}
          whileInView={'animate'}
        >
          <Image className={styles['img-main']} alt='Irving Mariscales' src={me}/>
        </motion.div>
      </motion.div>
      <div className={styles['txt-container']}>
        <div className={styles.title}>
          <h2><MotionTitle delay={0.15}>Hey</MotionTitle></h2>
          <Image className={styles['img-mobile']} alt='Irving Mariscales' src={meRound}/>
        </div>
          <div className='overflow-hidden'>
            <MotionP delay={.3}>
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
  )
}

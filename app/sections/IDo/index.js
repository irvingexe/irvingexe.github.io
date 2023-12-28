import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import { IdoContainer } from './components/IdoContainer'
import { MotionP } from '@/app/components/animationWraps/MotionP'
import { useInView } from 'framer-motion'
import { IdoList } from './components/IdoList'

export const IDo = () => {
  const fadeInAnchor = useRef();
  const isInView = useInView(fadeInAnchor, {margin: "-50% 0% -50% 0%"});
  let isOffView = useInView(fadeInAnchor, {margin: "-10% 0% -10% 0%"});
  isOffView = !isOffView;
  const [animate, setAnimate] = useState();
  
  useEffect(() => {
    if (isInView && !animate) {
      setAnimate(true)
    } else if (isOffView && animate) {
      setAnimate(false)
    }
  }, [isInView, isOffView, animate])

  return (
    <div id={styles.ido}>
      <div ref={fadeInAnchor}>
        <div className={styles['ido-title']}>
          <MotionTitle isInView={animate}>What I do</MotionTitle>
        </div>
        <div className={`${styles['ido-content']}`}>
          <MotionP delay={.2} isInView={animate}>
            <p className='text-xl whitespace-break-spaces'>
              {`Along the way, I've worn different hats and explored many tech tools.\n\nTaking part from concept to implementation, my focus is on web development and user interaction.`}
            </p>
          </MotionP>
        </div>
      </div>
      <IdoList/>
    </div>
  )
}

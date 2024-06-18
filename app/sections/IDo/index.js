'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { MotionP } from '@/app/components/animationWraps/MotionP'
import { useInView } from 'framer-motion'
import { IdoList } from './components/IdoList'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import useWindowSize from '@/app/utils/useWindowSize'

export const IDo = () => {
  const fadeInAnchor = useRef();
  const isInView = useInView(fadeInAnchor, {margin: "-40% 0% -30% 0%"});
  let isOffView = useInView(fadeInAnchor, {margin: "-10% 0% 0% 0%"});
  isOffView = !isOffView;
  const [animate, setAnimate] = useState(false);
  const windowSize = useWindowSize();
  
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
        <div className={`${styles['ido-content']}`}>
          <h2 className={styles.head}>
            <MotionTitle isInView={animate}>
              {windowSize.width < 1220 
              ? `Blending artistry and\nfunctionality to craft\nengaging experiences`
              : `Blending artistry and functionality\nto craft engaging experiences`}
            </MotionTitle>
          </h2>
          <MotionP delay={.2} isInView={animate} className='flex justify-end'>
            <div className={`${styles.sub} flex gap-16 justify-end`}>
              <div className='text-5xl font-bold leading-3'>—</div>
                <p className='text-2xl text-balance whitespace-break-spaces text-md'>
                  {`Great digital products don't happen by chance. I laverage data and user insights to build experiences that drive user engagement and business growth.`}
                </p>
            </div>
          </MotionP>
        </div>
      </div>
      <IdoList/>
    </div>
  )
}

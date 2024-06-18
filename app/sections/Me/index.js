'use client'

import { MotionP } from "@/app/components/animationWraps/MotionP"
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from './styles.module.scss'
import { MotionTitle } from "@/app/components/animationWraps/MotionTitle";
import {motion} from 'framer-motion'
import { CldImage } from "next-cloudinary";
import useWindowSize from "@/app/utils/useWindowSize";

export default function Me() {
  const fadeInAnchor = useRef();
  const isInView = useInView(fadeInAnchor, {margin: "-10% 0% -30% 0%"});
  let isOffView = useInView(fadeInAnchor, {margin: "-10% 0% 0% 0%"});
  isOffView = !isOffView;
  const [animate, setAnimate] = useState(false);
  const windowSize = useWindowSize();

  const variants = {
    initial: {
      transform: 'translateY(calc(100% + 2px))',
      transition: 'none'
    },
    animate: {
      transform: 'translateY(0%)'
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
    <div id={styles.who}>
      <div>
        {/*<div className={styles['ido-title']}>
          <h2><MotionTitle isInView={animate}>What I do</MotionTitle></h2>
        </div>*/}
        <div className={`${styles['ido-content']} relative`} ref={fadeInAnchor}>
          <div>
            <h2 className={styles.head}>
              <MotionTitle isInView={animate}>
              {windowSize.width < 940 
                ? `Pasionate about\nbuilding user-\ncentric products` 
                : `Pasionate about building\nuser-centric products`}
              </MotionTitle>
            </h2>
          </div>
          <MotionP delay={.2} isInView={animate}>
            <div className={`${styles.sub} flex gap-16`}>
              <div className='text-5xl font-bold leading-3'>—</div>
                <p className='text-2xl text-balance whitespace-break-spaces text-md'>
                  {`First of all is amazing having you here, welcome. I'm Irving, Software Engineer.\n\nMy belief is that everything starts with a good idea. My goal is to turn those good ideas into great digital products that drive brands and businesses.`}
                </p>
            </div>
          </MotionP>
          <div className={`${styles.portrait} absolute overflow-hidden`}>
            <motion.figure 
              variants={variants}
              transition={{ duration: 1.5, delay: .3, ease: [0.43, 0.005, 0, 1]}}
              initial='initial'
              animate={animate ? 'animate' : 'initial'}
            >
              <CldImage 
                priority={true} 
                alt={'Irving Mariscales'} 
                src={`portfolio/polaroid`} 
                width={562}
                height={799}
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </div>
  )
}

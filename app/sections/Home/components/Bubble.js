import React, { useEffect, useRef } from 'react'
import styles from '../styles.module.scss'
import {motion, useMotionValue, useScroll, useTransform, useVelocity} from 'framer-motion'

export const Bubble = ({position, direction = 1, intensityX = 1, intensityY = 1}) => {
  const bubbleRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const moveX = useMotionValue(0);
  const moveY = useMotionValue(0);

  const {scrollYProgress} = useScroll({
    target: bubbleRef.current,
    offset: ['0 1', '1 0']
  })
  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);
  const translateXProgress = useTransform(scrollYProgress, [0, 1], [-300 * direction * intensityX, 3000 * direction * intensityX])
  const translateYProgress = useTransform(scrollYProgress, [0, 1], [-400 * intensityY, 4000 * intensityY])
  const xVelocity = useTransform(velocityX, [-7000, 0, 7000], [-400, 0, 600])
  const yVelocity = useTransform(velocityY, [-5000, 0, 5000], [800, 0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0])
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(-e.clientX * intensityX);
      y.set(-e.clientY * intensityY);
      moveX.set(((window.innerWidth / 2) - (e.clientX * Math.pow(intensityX, 2))) * 0.03);
      moveY.set(((window.innerHeight / 2) - (e.clientY * Math.pow(intensityY, 2))) * 0.03);
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInAnimation = {
    initial: {
      opacity: 0,
      transform: `translate(${3000 * direction * intensityX * 0.3}px, ${4000 * intensityY * 0.3}px)`
    },
    animate: {
      opacity: 1,
      transform: `translate(0px, 0px)`
    }
  }
  
  return (
    <div ref={bubbleRef}>
      <motion.div
        variants={fadeInAnimation}
        transition={{duration: 1.5, ease: [0.230, 0.190, 0.010, 1]}}
        initial='initial'
        animate='animate'
      >
        <motion.div
          className={styles.move}
          style={{
            translateX: moveX,
            translateY: moveY,
          }}
        >
          <motion.div
            style={{
              translateX: translateXProgress,
              translateY: translateYProgress,
              opacity: opacity
            }}
          >
            <div className='absolute' style={{left: position.x, top: position.y}}>
              <div className='relative'>
                <motion.div
                  className={styles.motion}
                  style={{
                    translateX: xVelocity,
                    translateY: xVelocity
                  }}
                >
                  <div className={`absolute ${styles['bubble-wrap']} ${styles.magenta}`}>
                    <div 
                      className={`rounded-full ${styles.bubble} ${styles.magenta}`} 
                    />
                  </div>
                </motion.div>
                <motion.div
                  className={styles.motion}
                  style={{
                    translateX: xVelocity,
                    translateY: yVelocity,
                  }}
                >
                  <div className={`absolute ${styles['bubble-wrap']} ${styles.yellow}`}>
                    <div 
                      className={`rounded-full ${styles.bubble} ${styles.yellow}`}
                    />
                  </div>
                </motion.div>
                <motion.div
                  className={styles.motion}
                  style={{
                    translateX: yVelocity,
                    translateY: yVelocity
                  }}
                >
                  <div className={`absolute ${styles['bubble-wrap']} ${styles.cian}`}>
                    <div 
                      className={`rounded-full ${styles.bubble} ${styles.cian}`}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

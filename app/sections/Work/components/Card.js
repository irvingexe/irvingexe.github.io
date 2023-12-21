import Image from 'next/image'
import React, { useRef } from 'react'
import styles from '../styles.module.scss'
import { useScroll, useTransform, useVelocity } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"

export const Card = ({onProjectOpen, e, i}) => {
  const imgRef = useRef(null)
  const router = useRouter();

  const handleScroll = (projectId) => {
    document.getElementById(`work-${projectId}`).scrollIntoView({ behavior: 'smooth' });
  }

  const openProject = (projectId) => {
    handleScroll(projectId);
    onProjectOpen();
    setTimeout(() => {
      router.push(`${projectId}`);
    }, 500);
  }

  const fadeInAnimation = {
    initial: {
      clipPath: 'rect(20% 80% 80% 20%)',
      opacity: 0,
      transform: 'scale(1.2)'
    },
    animate: {
      clipPath: 'rect(0% 100% 100% 0%)',
      opacity: 1,
      transform: 'scale(1)'
    }
  }

  const {scrollYProgress} = useScroll({
    target: imgRef,
    offset: ['0 1', '1 0']
  })

  const xVelocity = useVelocity(scrollYProgress)
  const translateProgress = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const skewVelocity = useTransform(xVelocity, [-1, -0.1, 0.1, 1], [-4, 0, 0, 4])
  const skewVelocity2 = useTransform(xVelocity, [-1, -0.1, 0.1, 1], [4, 0, 0, -4])

  return (
    <motion.div key={i} id={`work-${e.route}`} className={styles.project} style={{skewY: skewVelocity}}>
      <motion.div 
        className={styles.card} 
        onClick={() => openProject(e.route)}
        variants={fadeInAnimation}
        transition={{ duration: .3}}
        initial={'initial'}
        whileInView={'animate'}
      >
        <motion.div
          className={styles['bg-container']}
          ref={imgRef} 
          style={{
            translateY: translateProgress,
            skewY: skewVelocity2
          }}
        >
          <Image alt={e.name} ref={imgRef} src={require(`../../../assets/projects/${i}/0.webp`)} className={styles.bg}/>
        </motion.div>
        <div className={styles.blur}>
          <div className={styles.gradient}/>
          <div className={styles['card-content']}>
            <div className={styles.desc}>{e.subtitle}</div>
            <h2 className={styles.title}>{e.name}</h2>
            <div className={styles.roles}>
              {e.role.map((role, i) => <div key={i} className={styles.role}>{role}</div>)}
            </div>
            <h2 className={styles.number}>0{i+1}</h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

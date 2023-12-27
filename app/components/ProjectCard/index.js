import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, useVelocity } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { ProjectHeader } from '@/app/components/ProjectCard/components/ProjectHeader'
import back from '../../assets/arrow-back.svg'
import Lenis from '@studio-freight/lenis'
import { useLastRoute } from '@/app/contexts/LastRouteProvider'

export const ProjectCard = ({close, next, styles, children, onProjectOpen = () => null, e, i, inner, returnHome = () => null}) => {
  const imgRef = useRef(null)
  const router = useRouter();
  const scrollContainer = useRef();
  const scrollRef = useRef();
  const {lastRoute, setRoute} = useLastRoute();
  const [open, setOpen] = useState(inner && (lastRoute === '/'));
  const [fadeIn, setFadeIn] = useState()

  const handleScroll = (projectId) => {
    //todo: scroll to the current scroll position first
    document.getElementById(`work-${projectId}`).scrollIntoView({ behavior: 'smooth' });
  }

  const openProject = (projectId) => {
    handleScroll(projectId);
    onProjectOpen();
    setOpen(true);
    setTimeout(() => {
      document.getElementById(`work-${projectId}`).scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setRoute(projectId);
        router.push(`${projectId}`);
      }, 1500);
    }, 500);
  }

  const handleBack = () => {
    setTimeout(() => {
      setOpen(false);
      returnHome();
    }, scrollRef.current.scrollTop ? 550 : 0);
    scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
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
  const translateProgress = useTransform(scrollYProgress, [0, 1], [-95, 105])
  const skewVelocity = useTransform(xVelocity, [-1, -0.1, 0.1, 1], [-2, 0, 0, 2])
  const skewVelocity2 = useTransform(xVelocity, [-1, -0.1, 0.1, 1], [2, 0, 0, -2])

  useEffect(() => {
    if (next) scrollContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
  }, [next])

  useEffect(() => {
    if (inner) {
      const lenis = new Lenis({wrapper: scrollRef.current, content: scrollContainer.current})

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }
  }, [scrollRef, inner])

  //console.log(lastRoute, e.route, fadeIn)

  useEffect(() => {
    //setFadeIn(lastRoute !== e.route)
  }, [lastRoute, e.route])
  
  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true)
    }, 500);
  }, [])

  useEffect(() => {
    setOpen(inner);
  }, [])
  
  
  return (
    <motion.div key={i} id={`work-${e.route}`} className={`${styles.project} ${close && styles.close} ${open && styles.open}`} style={(!inner || fadeIn) && {skewY: skewVelocity}}>
      <motion.div 
        className={styles.card} 
        onClick={() => {if (!inner) openProject(e.route)}}
        variants={!(open || inner) && fadeInAnimation}
        transition={{ duration: .7, ease: [0.65, 0, 0.35, 1]}}
        initial={fadeIn ? 'initial' : 'animate'}
        animate={fadeIn ? 'initial' : 'animate'}
        whileInView={fadeIn && 'animate'}
      >
        <h2 className={styles.number}>0{e.index}</h2>
        <motion.div
          className={styles['bg-container']}
          ref={imgRef} 
          style={{
            translateY: translateProgress,
            skewY: (!inner && fadeIn) && skewVelocity2
          }}
        >
          <Image alt={e.name} ref={imgRef} src={require(`../../assets/projects/${i}/0.webp`)} className={styles.bg}/>
        </motion.div>
        {(open || inner) && <button className={`${styles.back} ${styles.button}`} onClick={handleBack}><Image alt='<' src={back}/>BACK</button>}
        <div className={styles.blur} ref={scrollRef}>
          <div className={styles.gradient}/>
          <div className={styles['card-content']} ref={scrollContainer}>
            <ProjectHeader project={e}/>
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

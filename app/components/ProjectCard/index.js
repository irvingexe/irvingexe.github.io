import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, useVelocity } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { ProjectHeader } from '@/app/components/ProjectCard/components/ProjectHeader'
import Lenis from '@studio-freight/lenis'
import { useLastRoute } from '@/app/contexts/LastRouteProvider'
import { useUI } from '@/app/contexts/UIProvider'

export const ProjectCard = ({close, next, styles, children, onProjectOpen = () => null, e, i, inner, returnHome = () => null}) => {
  const imgRef = useRef(null)
  const router = useRouter();
  const scrollContainer = useRef();
  const scrollRef = useRef();
  const {lastRoute, setRoute} = useLastRoute();
  const [open, setOpen] = useState(inner && (lastRoute === '/'));
  const [fadeIn, setFadeIn] = useState()
  const {hideUI} = useUI();

  const handleScroll = (projectId) => {
    document.getElementById(`work-${projectId}`).scrollIntoView({ behavior: 'smooth' });
  }

  const openProject = (projectId) => {
    /*
    window.addEventListener('wheel', (event) => {
      event.preventDefault();
    });
    document.addEventListener('touchmove', (event) => {
      event.preventDefault();
    });
    */

    handleScroll(projectId);
    onProjectOpen();
    hideUI(true);
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
    hideUI(false);
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
      transform: 'scale(1.2)',
      transition: 'none'
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

  const translateProgress = useTransform(scrollYProgress, [0, 1], [-95, 105])
  
  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true)
    }, 500);
  }, [])

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

  useEffect(() => {
  }, [lastRoute, e.route])

  useEffect(() => {
    setOpen(inner);
  }, [inner])
  
  return (
    <motion.div key={i} id={`work-${e.route}`} className={`${styles.project} ${close && styles.close} ${open && styles.open}`}>
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
          }}
        >
          <Image 
            priority={inner} 
            placeholder='blur' 
            sizes={'(max-width: 1600px) 80vw, 1500px'}
            alt={e.name} 
            ref={imgRef} 
            src={require(`../../assets/images/projects/${i}/0.webp`)} 
            className={styles.bg}
            style={inner ? {overflow: 'auto'} : {}}
          />
        </motion.div>
        {(open || inner) && 
          <button className={`${styles.back} ${styles.button}`} onClick={handleBack} >
            <svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_197_692)">
              <path d="M12.5979 7.7051C12.5425 7.70503 12.4876 7.7138 12.4365 7.73089C12.3855 7.74798 12.3394 7.77304 12.3009 7.80455L6.22977 12.7647C6.15553 12.8251 6.11402 12.9059 6.11402 12.9899C6.11402 13.074 6.15553 13.1548 6.22977 13.2152L12.3273 18.1955C12.3643 18.228 12.4092 18.2544 12.4594 18.273C12.5096 18.2915 12.564 18.302 12.6194 18.3036C12.6748 18.3052 12.7301 18.2981 12.7819 18.2825C12.8337 18.2669 12.881 18.2433 12.9209 18.213C12.9609 18.1827 12.9927 18.1464 13.0144 18.1062C13.0361 18.066 13.0473 18.0228 13.0474 17.9791C13.0474 17.9354 13.0363 17.8921 13.0146 17.8519C12.993 17.8117 12.9612 17.7753 12.9213 17.745L7.10015 12.9903L12.8949 8.25565C12.9511 8.20974 12.9889 8.15182 13.0036 8.08911C13.0183 8.0264 13.0093 7.96167 12.9776 7.90298C12.9459 7.84429 12.8931 7.79423 12.8255 7.75905C12.758 7.72386 12.6789 7.7051 12.5979 7.7051Z" fill="#AEAEAE"/>
              <path d="M32.5875 12.6653L6.5256 12.6653C6.4162 12.6653 6.31127 12.6995 6.23392 12.7605C6.15656 12.8214 6.1131 12.9041 6.1131 12.9903C6.1131 13.0765 6.15656 13.1591 6.23392 13.2201C6.31127 13.281 6.4162 13.3153 6.5256 13.3153L32.5875 13.3153C32.6969 13.3153 32.8018 13.2811 32.8792 13.2201C32.9565 13.1592 33 13.0765 33 12.9903C33 12.9041 32.9565 12.8214 32.8792 12.7605C32.8018 12.6995 32.6969 12.6653 32.5875 12.6653Z" fill="#AEAEAE"/>
              </g>
              <defs>
              <clipPath id="clip0_197_692">
                <rect width="33" height="26" fill="white" transform="translate(33 26) rotate(-180)"/>
              </clipPath>
              </defs>
            </svg>
            BACK
          </button>}
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

import React, { useEffect, useRef, useState } from 'react'
import { IdoContainer } from './IdoContainer'
import { useInView } from 'framer-motion';

export const IdoList = () => {
  const [openItem, setOpenItem] = useState(null);
  const fadeInAnchor = useRef();
  const isInView = useInView(fadeInAnchor, {margin: "-30% 0% -20% 0%"});
  let isOffView = useInView(fadeInAnchor, {margin: "0% 0% 0% 0%"});
  isOffView = !isOffView;
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    if (isInView && !animate) {
      setAnimate(true)
    } else if (isOffView && animate) {
      setAnimate(false)
    }
  }, [isInView, isOffView, animate])

  return (
    <div className='overflow-hidden' ref={fadeInAnchor}>
      <IdoContainer title='Web Development' index={0} isInView={animate} isOpen={openItem === 0} setItemOpen={(e) => setOpenItem(openItem === e ? null : e)}>
        I plan, design, build, test and maintain scalable Front-End web applications.
      </IdoContainer>
      <IdoContainer title='Creative implementation' index={1} isInView={animate} isOpen={openItem === 1} setItemOpen={(e) => setOpenItem(openItem === e ? null : e)}>
        I collaborate with designers to plan and execute interactions / animations on web applications.
      </IdoContainer>
      <IdoContainer title='Interaction Design & Animation' index={2} isInView={animate} isOpen={openItem === 2} setItemOpen={(e) => setOpenItem(openItem === e ? null : e)}>
        I build layouts and interactions optimizing for performance and usabilty.
      </IdoContainer>
    </div>
  )
}

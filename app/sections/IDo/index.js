import React, { useState } from 'react'
import styles from './styles.module.scss'
import { MotionTitle } from '@/app/components/animationWraps/MotionTitle'
import { IdoContainer } from './components/IdoContainer'
import { MotionP } from '@/app/components/animationWraps/MotionP'

export const IDo = () => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div id={styles.ido}>
      <div className={styles['ido-title']}>
        <MotionTitle>What I do</MotionTitle>
      </div>
      <div className={`${styles['ido-content']}`}>
        <MotionP delay={.2}>
          <p className='text-xl whitespace-break-spaces'>
            {`Along the way, I've worn different hats and explored many tech tools.\n\nTaking part from concept to implementation, my focus is on web development and user interaction.`}
          </p>
        </MotionP>
      </div>
      <div className='overflow-hidden'>
        <IdoContainer title='Front-Ent Development' index={0} isOpen={openItem === 0} setItemOpen={(e) => setOpenItem(openItem === e ? null : e)}>
          I plan, design, build, test and maintain scalable Front-End web applications.
        </IdoContainer>
        <IdoContainer title='Creative implementation' index={1} isOpen={openItem === 1} setItemOpen={(e) => setOpenItem(openItem === e ? null : e)}>
          I collaborate with designers to plan and execute interactions / animations on web applications.
        </IdoContainer>
        <IdoContainer title='Interaction Design & Animation' index={2} isOpen={openItem === 2} setItemOpen={(e) => setOpenItem(openItem === e ? null : e)}>
          I build layouts and interactions optimizing for performance and usabilty.
        </IdoContainer>
      </div>
    </div>
  )
}

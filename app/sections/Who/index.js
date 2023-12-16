import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import me from '../../assets/me.webp'
import meRound from '../../assets/meRound.webp'

export const Who = () => {
  return (
    <div id={styles.who}>
      <Image className={styles['img-main']} alt='Irving Mariscales' src={me}/>
      <div className={styles['txt-container']}>
        <div className={styles.title}>
          <h2>Hey</h2>
          <Image className={styles['img-mobile']} alt='Irving Mariscales' src={meRound}/>
        </div>
        <p>
          {'First of all is amazing having you here, welcome.'}
          <br/><br/>
          {"As a developer crafting web applications, I'm majorly involved in Front-End development specializing in visual and interactive web experiences."}
          <br/><br/>
          {'My expertise lies in creating robust digital solutions that not only look stunning but care about scalability and performance to deliver the best experience.'}
        </p>
      </div>
    </div>
  )
}

import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import arrow from '../../assets/arrow-down.svg'
import {work} from '../../sections/Work/styles.module.scss'

export const Home = () => {
  return (
    <div id={styles.home}>
      <div className={styles.container}>
        <h2>Hello</h2>
        <br/>
        <p className={styles.lead}>
          I’m Irving Mariscales, Front-End Engineer and Interaction Designer.
          <br/><br/>
          Here I present some of my projects, feel free to take a look.
        </p>
      </div>
      <a href={`#${work}`} className={styles.scroll}>
        Scroll
        <Image alt='arrow' src={arrow} />
      </a>
    </div>
  )
}

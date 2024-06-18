'use client'

import styles from './styles.module.scss'
import useScroll from '@/app/utils/useScroll';
import { CldImage } from 'next-cloudinary';

export default function Hero() {
  useScroll();
  
  return (
    <div id={styles.home} className='relative'>
      <div className={`${styles.image} fixed`}>
        <figure className={styles.img}>
          <CldImage 
            priority={true} 
            alt={'Irving Mariscales'} 
            src={`portfolio/mountain`} 
            width={656}
            height={676}
            sizes={'(max-width: 700px) 50vw, 656px'}
          />
        </figure>
      </div>
      <div className={styles['content-container']}>
        <div className={styles.content}>
          <h1 className={styles.hello}>I bring creative visions to life</h1>
          <div>
            <p className={`${styles.name} text-lg font-medium`}>Irving Mariscales —</p>
            <p className={`${styles.role} leading-7`}><span>Web Developer</span> & <span>UI Designer</span></p>
          </div>
          <div className={styles.scroll}>
            <div>Scroll to discover</div>
            <div className={styles.bounce} />
          </div>
        </div>
      </div>
    </div>
  )
}

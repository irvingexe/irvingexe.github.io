import {home} from '../../../sections/Hero/styles.module.scss'
import {who} from '../../../sections/Me/styles.module.scss'
import {ido} from '../../../sections/IDo/styles.module.scss'
import styles from '../styles.module.scss'

export default function MobileMenu({handleScroll}) {
  return (
    <div className={styles['header-mobile']}>
      <div className='a' onClick={() => handleScroll(home)}>Home</div>
      <div className='a' onClick={() => handleScroll('work-formula1')}>Work</div>
      <div className='a' onClick={() => handleScroll(ido)}>I do</div>
      <div className='a' onClick={() => handleScroll(who)}>Who</div>
    </div>
  )
}

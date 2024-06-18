import styles from './styles.module.scss'

export default function Placeholder({children, loading, height, lines = 1, fit}) {
  const placeholder = []
  for (let i = 0; i < lines; i++) {
    placeholder.push(
      <div 
        style={{height, minHeight: `min(${height || '1em'}, 1em)`}}
        className={`${styles.placeholder} ${loading ? 'animate-pulse' : ''} ${fit ? styles.fit : ''}`} 
        key={i}>
        <div style={{opacity: 0}}>{children}</div>
      </div>)
  }

  return (
    loading
    ? <div className='flex gap-5 flex-col'>{placeholder}</div>
    : children
  )
}

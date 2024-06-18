import React from 'react'

export default function usePageHeight() {
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    const handleResize = () => {
      setHeight(document.body.clientHeight)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return height
}

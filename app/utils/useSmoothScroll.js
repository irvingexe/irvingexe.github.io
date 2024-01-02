'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'

export const useSmoothScroll = () => {
  let lenis = useRef();

  useEffect(() => {
    lenis.current = new Lenis();

    function raf(time) {
      lenis.current.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [lenis])

  return lenis.current
}

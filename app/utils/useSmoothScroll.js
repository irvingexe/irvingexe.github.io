'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect, useMemo } from 'react'

export const useSmoothScroll = () => {
  let lenis = useMemo(() => new Lenis(), []);

  useEffect(() => {

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [lenis])

  return lenis
}

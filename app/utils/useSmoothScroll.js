'use client'

import Lenis from '@studio-freight/lenis'
import React, { useEffect } from 'react'

export const useSmoothScroll = () => {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return null
}

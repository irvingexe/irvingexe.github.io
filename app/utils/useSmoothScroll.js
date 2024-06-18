'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect, useState } from 'react'
import { useLenisScroll } from '../contexts/ScrollProvider';

export const useSmoothScroll = () => {
  const [lenis, setLenis] = useState();
  const {scroll} = useLenisScroll();

  useEffect(() => {
    if (!scroll) {
      if (lenis) {
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
      } else {
        setLenis(new Lenis());
      }
    }
  }, [lenis, scroll])

  return lenis
}

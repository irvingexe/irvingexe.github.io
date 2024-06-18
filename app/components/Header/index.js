'use client'

import useScrollPosition from "@/app/utils/useScrollPosition";
import { Menu } from "./components/Menu"
import { useEffect, useState } from "react";
import useWindowSize from "@/app/utils/useWindowSize";

export const Header = () => {
  const windowSize = useWindowSize();
  const [pageHeight, setPageHeight] = useState(0);
  const scrollPosition = useScrollPosition();
  const topRelativePosition = windowSize.height - scrollPosition;
  const maskTop = topRelativePosition >= 0 ? topRelativePosition <= 128 ? topRelativePosition : 128 : 0;
  const maskTopPercent = maskTop * 100 / 128;
  const bottomRelativePosition = pageHeight - (scrollPosition + windowSize.height);
  const maskBottom = bottomRelativePosition >= 128 ? 128 : bottomRelativePosition;

  const maskBottomPercent = maskBottom * 100 / 128;

  useEffect(() => {
    setPageHeight(document.body.clientHeight);
  }, [windowSize])
  
  return (
    <>
      <Menu 
        type='home' 
        maskTop={maskTopPercent} 
        maskBottom={maskBottomPercent} 
        scrollPosition={scrollPosition} 
        windowHeight={windowSize.height}
      />
      <Menu 
        maskTop={maskTopPercent} 
        maskBottom={maskBottomPercent} 
        scrollPosition={scrollPosition} 
        windowHeight={windowSize.height}
      />
    </>
  )
}

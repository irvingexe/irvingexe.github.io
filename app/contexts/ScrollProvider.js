'use client'

import React, { createContext, useContext, useState } from 'react'

const ScrollContext = createContext({});

export const ScrollProvider = ({children}) => {
  const [scroll, setScroll] = useState();

  return (
    <ScrollContext.Provider value={{scroll, setScroll}}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useLenisScroll = () => {
  return useContext(ScrollContext)
}
 
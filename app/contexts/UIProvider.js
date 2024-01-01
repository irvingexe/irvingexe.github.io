'use client'

import React, { createContext, useContext, useState } from 'react'

const UIContext = createContext({});

export const UIProvider = ({children}) => {
  const [isUIHidden, hideUI] = useState();

  return (
    <UIContext.Provider value={{isUIHidden, hideUI}}>
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => {
  return useContext(UIContext)
}
 
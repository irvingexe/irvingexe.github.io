'use client'

import React, { createContext, useContext, useState } from 'react'

const LastRouteContext = createContext({});

export const LastRouteProvider = ({children}) => {
  const [lastRoute, setLastRoute] = useState();
  const [currentRoute, setCurrentRoute] = useState();

  const setRoute = (route) => {
    setLastRoute(currentRoute);
    setCurrentRoute(route);
  }

  return (
    <LastRouteContext.Provider value={{lastRoute, setRoute}}>
      {children}
    </LastRouteContext.Provider>
  )
}

export const useLastRoute = () => {
  return useContext(LastRouteContext)
}
 
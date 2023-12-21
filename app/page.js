'use client'

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Contact } from "./sections/Contact";
import { Home } from "./sections/Home";
import { IDo } from "./sections/IDo";
import { Who } from "./sections/Who";
import { Work } from "./sections/Work";
import Lenis from '@studio-freight/lenis'

export default function App() {
  const [hideInterface, setHideInterface] = useState();

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  

  return (
      <div className="App">
        <Header hidden={hideInterface}/>
        <Home/>
        <Work onProjectOpen={() => setHideInterface(true)}/>
        <IDo/>
        <Who/>
        <Contact/>
      </div>
  )
}

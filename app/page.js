'use client'

import { useState } from "react";
import { Header } from "./components/Header";
import { Contact } from "./sections/Contact";
import { Home } from "./sections/Home";
import { IDo } from "./sections/IDo";
import { Who } from "./sections/Who";
import { Work } from "./sections/Work";

export default function App() {
  const [hideInterface, setHideInterface] = useState();

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

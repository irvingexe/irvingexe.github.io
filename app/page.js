import React from "react";
import { Header } from "./components/Header";
import { Contact } from "./sections/Contact";
import { Home } from "./sections/Home";
import { IDo } from "./sections/IDo";
import { Who } from "./sections/Who";
import { Work } from "./sections/Work";
import GoogleAnalytics from "./components/GoogleAnalytics";

export default function App() {
  return (
      <div className="App">
      <GoogleAnalytics/>
      <Header/>
      <Home/>
      <Work/>
      <IDo/>
      <Who/>
      <Contact/>
    </div>
  )
}

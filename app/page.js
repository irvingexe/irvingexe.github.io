import React from "react";
import { Header } from "./components/Header";
import { Contact } from "./sections/Contact";
import { Work } from "./sections/Work";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Hero from "./sections/Hero";
import Me from "./sections/Me";
import { IDo } from "./sections/IDo";

export default function App() {
  return (
      <div className="App">
      <GoogleAnalytics/>
      <Header/>
      <Hero/>
      <div className="top-sections">
        <div className="dark-bg">
          <Work/>
          <IDo/>
          <Me/>
        </div>
        <Contact/>
      </div>
    </div>
  )
}

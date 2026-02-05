import { useState, useEffect } from 'react';
import "./global/global.css"

import Hero from './components/Hero/Hero';
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Education from "./components/Education/Education"
import Footer from "./components/Footer/Footer"
import Experience from "./components/Experience/Exp"


export default function App() {


  return (
    <>
      <Hero />
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Footer/>
    </>
  );
}

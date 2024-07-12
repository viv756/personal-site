import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiance from "./components/Experience";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Experiance />
      <About/>
    </div>
  )
}

export default App;
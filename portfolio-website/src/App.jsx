import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProfileLinks from "./components/Profiles";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import React from "react";
import Skills from "./components/Skills";

 function App() {
  return (
    <>
      <Hero />
      <About />
       <Skills />
      <Projects />
    <ProfileLinks />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

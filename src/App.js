import React from "react";
import Home from "./Components/Home";
import SkillsList from "./Components/Skills";
import ProjectsList from "./Components/Projecst";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import CertificatesList from "./Components/Certificates";
import Footer from "./Components/Footer"


import { certificates } from "./data";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <ProjectsList/>
      <SkillsList/>
      <CertificatesList certificates={certificates} />
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;

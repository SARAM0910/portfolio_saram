import React from "react";

import Home from "./Components/Home";


import Skills from "./Components/Skills";
import ProjectsList from "./Components/Projecst";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <ProjectsList/>
      <Contact/>
    </div>
  );
}

export default App;

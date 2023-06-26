import React from "react";
import "./App.css";
import Home from "./Components/Home/home";
import Nav from "./Components/Nav/nav";
import Experience from "./Components/Experience/experience";
import Portfolio from "./Components/Portfolio/portfolio";
import Contact from "./Components/Contact/contact";
import Skills from "./Components/Skills/skills";

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

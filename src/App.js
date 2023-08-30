import React from "react";
import Banner from "./components/Banner/Banner.js";
import Introduction from "./components/Introduction/Introduction.js";
import Skill from "./components/Skill/Skill.js";
import Project from "./components/Project/Project.js";
import Footer from "./components/Footer/Footer.js";
import Contact from "./components/Contact/Contact.js";
import AOS from "aos";
import { useState } from "react";
import Menu from "./components/Menu/Menu.js";
import "aos/dist/aos.css";
function App() {
  AOS.init();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Banner menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Introduction />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

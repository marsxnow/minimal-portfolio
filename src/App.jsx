import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";
import { Parallax, ParallaxLayer } from "@react-spring/web";

function App() {
  const ref = useRef();
  return (
    <div className="App">
      <Sidebar />
      <Intro />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

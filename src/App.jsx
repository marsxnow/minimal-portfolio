import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

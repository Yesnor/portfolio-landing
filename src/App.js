import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ArrowToTop from "./components/ArrowToTop";
import Curtain from "./components/Curtain";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Curtain />
      <Portfolio />
      <Contact />
      <ArrowToTop />
    </>
  );
}

export default App;

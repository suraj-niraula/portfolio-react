import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
  <>
    <BrowserRouter>
      {/* Header */}
        <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
};

export default App;

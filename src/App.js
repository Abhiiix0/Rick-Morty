import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./HeroSection";
import Characters from "./Characters";
import Episodes from "./Episodes";
import CharaterInfo from "./CharaterInfo";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HeroSection />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/episodes" element={<Episodes />}></Route>
        <Route path="/characterInfo" element={<CharaterInfo />}></Route>
      </Routes>
    </>
  );
};

export default App;

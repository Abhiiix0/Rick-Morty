import React from "react";
import { Link } from "react-router-dom";
// import vd from "./rickmorty.mp4";
const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        {/* <div> */}
        <h1>Welcome to the Rick and Morty Website</h1>
        <p>Explore the multiverse with your favorite animated duo</p>
        <Link to="/characters">Get Started</Link>
        {/* </div> */}
      </section>
    </>
  );
};

export default HeroSection;

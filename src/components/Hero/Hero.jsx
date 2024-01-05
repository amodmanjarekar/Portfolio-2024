import React from "react";
import ThreeArea from "./ThreeArea";
import Cover from "./Cover";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <ThreeArea />
      <Cover />
    </div>
  );
}

export default Hero;

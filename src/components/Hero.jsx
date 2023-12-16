import React from "react";

import Nav from "./Nav";

import "./css/hero.css";

const Hero = () => {
  return (
    <>
      <Nav />

      <section id="gallery">
        <h1>Gallery</h1>
      </section>
      <section id="code">
        <h1>Code</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>
      <section id="about">
        <h1>About</h1>
      </section>
    </>
  );
};

export default Hero;

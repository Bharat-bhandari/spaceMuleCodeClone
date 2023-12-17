import React from "react";

import Nav from "./Nav";

import "./css/hero.css";
import CodeStyle from "./CodeStyle";
import About from "./About";

const Hero = () => {
  return (
    <>
      <Nav />

      <div className="content">
        <section id="code">
          <CodeStyle />
        </section>
        <section id="about">
          <About />
        </section>
      </div>
    </>
  );
};

export default Hero;

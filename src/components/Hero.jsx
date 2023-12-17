import React from "react";

import Nav from "./Nav";

import "./css/hero.css";
import CodeStyle from "./CodeStyle";

const Hero = () => {
  return (
    <>
      <Nav />

      <div className="content">
        <section id="code">
          <CodeStyle />
        </section>
      </div>
    </>
  );
};

export default Hero;

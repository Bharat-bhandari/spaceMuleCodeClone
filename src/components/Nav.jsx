import React from "react";

import "./css/nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="navElements">
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#code">Code Style</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

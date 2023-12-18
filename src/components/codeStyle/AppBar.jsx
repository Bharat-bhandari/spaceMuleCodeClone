import React from "react";
import "./demo.css";
import DemoNav from "./DemoNav";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const AppBar = () => {
  return (
    <div className="demo">
      <DemoNav />
      <div className="mainDemoContent">
        <div>
          <h1>App bar</h1>
          <p>
            The app bar provides content and actions related to the current
            screen. It's used for branding, screen titles, navigation and
            actions.
          </p>
        </div>
        <div className="screen">
          <section className="screenNav">
            <div>
              <RxHamburgerMenu className="demoIcons" />
              <p>App bar</p>
            </div>
            <div>
              <FaRegHeart className="demoIcons" />
              <IoSearch className="demoIcons" />
              <BsThreeDotsVertical className="demoIcons" />
            </div>
          </section>
          <section className="home">
            <p>Home</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AppBar;

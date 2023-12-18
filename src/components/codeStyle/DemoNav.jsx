import React from "react";
import "./demo.css";

import { Link } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { MdFullscreen } from "react-icons/md";

const DemoNav = () => {
  return (
    <>
      <div className="demoNav">
        <Link to={"/"}>
          <IoArrowBack className="demoIcons" />
        </Link>
        <div>
          <IoMdInformationCircle className="demoIcons" />
          <MdFullscreen className="demoIcons" />
        </div>
      </div>
    </>
  );
};

export default DemoNav;

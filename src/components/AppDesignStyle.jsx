import React, { useState } from "react";
import "./css/appDesignStyle.css";
import { Link } from "react-router-dom";

import material from "../assets/CodeStyle/material.png";
import cuper from "../assets/CodeStyle/cupertino.png";
import reference from "../assets/CodeStyle/reference.png";

import { TbLayoutNavbarFilled } from "react-icons/tb";
import { FiLoader } from "react-icons/fi";
import { MdTypeSpecimen } from "react-icons/md";

const AppDesignStyle = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="columns">
      <section className="styleColumns">
        <div
          className="title"
          onClick={() => {
            setOpen1(!open1);
          }}
        >
          <img src={material} alt="material" />
          <h3>MATERIAL</h3>
        </div>
        <hr />

        <div className={`styleList ${open1 ? "active" : "inactive"}`}>
          <Link to={"app-bar"} className="eachList">
            <TbLayoutNavbarFilled className="styleIcons" />
            <div>
              <div className="eachListTitle">App bar</div>
              <p>
                Displays information and actions relating to the current screen
              </p>
              <hr />
            </div>
          </Link>
          <Link to={"app-bar"} className="eachList">
            <TbLayoutNavbarFilled className="styleIcons" />
            <div>
              <div className="eachListTitle">App bar</div>
              <p>
                Displays information and actions relating to the current screen
              </p>
              <hr />
            </div>
          </Link>
          <Link to={"app-bar"} className="eachList">
            <TbLayoutNavbarFilled className="styleIcons" />
            <div>
              <div className="eachListTitle">App bar</div>
              <p>
                Displays information and actions relating to the current screen
              </p>
              <hr />
            </div>
          </Link>
          <Link to={"app-bar"} className="eachList">
            <TbLayoutNavbarFilled className="styleIcons" />
            <div>
              <div className="eachListTitle">App bar</div>
              <p>
                Displays information and actions relating to the current screen
              </p>
              <hr />
            </div>
          </Link>
          <Link to={"app-bar"} className="eachList">
            <TbLayoutNavbarFilled className="styleIcons" />
            <div>
              <div className="eachListTitle">App bar</div>
              <p>
                Displays information and actions relating to the current screen
              </p>
              <hr />
            </div>
          </Link>
          <Link to={"app-bar"} className="eachList">
            <TbLayoutNavbarFilled className="styleIcons" />
            <div>
              <div className="eachListTitle">App bar</div>
              <p>
                Displays information and actions relating to the current screen
              </p>
              <hr />
            </div>
          </Link>
          <Link to={"app-bar"} className="eachList">
            <TbLayoutNavbarFilled className="styleIcons" />
            <div>
              <div className="eachListTitle">App bar</div>
              <p>
                Displays information and actions relating to the current screen
              </p>
              <hr />
            </div>
          </Link>
          <Link to={"app-bar"} className="eachList">
            <TbLayoutNavbarFilled className="styleIcons" />
            <div>
              <div className="eachListTitle">App bar</div>
              <p>
                Displays information and actions relating to the current screen
              </p>
              <hr />
            </div>
          </Link>
          <Link to={"app-bar"} className="eachList">
            <TbLayoutNavbarFilled className="styleIcons" />
            <div>
              <div className="eachListTitle">App bar</div>
              <p>
                Displays information and actions relating to the current screen
              </p>
              <hr />
            </div>
          </Link>
        </div>
      </section>
      <section className="styleColumns">
        <div
          className="title"
          onClick={() => {
            setOpen2(!open2);
          }}
        >
          <img src={cuper} alt="material" />
          <h3>CUPERTINO</h3>
        </div>
        <hr />

        <div className={`styleList ${open2 ? "active" : "inactive"}`}>
          <Link to={"/activity-indicator"} className="eachList">
            <FiLoader className="styleIcons" />
            <div>
              <div className="eachListTitle">Activity indicator</div>
              <p>iOS-style activity indicators</p>
              <hr />
            </div>
          </Link>
          <Link to={"/activity-indicator"} className="eachList">
            <FiLoader className="styleIcons" />
            <div>
              <div className="eachListTitle">Activity indicator</div>
              <p>iOS-style activity indicators</p>
              <hr />
            </div>
          </Link>
          <Link to={"/activity-indicator"} className="eachList">
            <FiLoader className="styleIcons" />
            <div>
              <div className="eachListTitle">Activity indicator</div>
              <p>iOS-style activity indicators</p>
              <hr />
            </div>
          </Link>
          <Link to={"/activity-indicator"} className="eachList">
            <FiLoader className="styleIcons" />
            <div>
              <div className="eachListTitle">Activity indicator</div>
              <p>iOS-style activity indicators</p>
              <hr />
            </div>
          </Link>
          <Link to={"/activity-indicator"} className="eachList">
            <FiLoader className="styleIcons" />
            <div>
              <div className="eachListTitle">Activity indicator</div>
              <p>iOS-style activity indicators</p>
              <hr />
            </div>
          </Link>
          <Link to={"/activity-indicator"} className="eachList">
            <FiLoader className="styleIcons" />
            <div>
              <div className="eachListTitle">Activity indicator</div>
              <p>iOS-style activity indicators</p>
              <hr />
            </div>
          </Link>
          <Link to={"/activity-indicator"} className="eachList">
            <FiLoader className="styleIcons" />
            <div>
              <div className="eachListTitle">Activity indicator</div>
              <p>iOS-style activity indicators</p>
              <hr />
            </div>
          </Link>
          <Link to={"/activity-indicator"} className="eachList">
            <FiLoader className="styleIcons" />
            <div>
              <div className="eachListTitle">Activity indicator</div>
              <p>iOS-style activity indicators</p>
              <hr />
            </div>
          </Link>
        </div>
      </section>
      <section className="styleColumns">
        <div
          className="title"
          onClick={() => {
            setOpen3(!open3);
          }}
        >
          <img src={reference} alt="material" />
          <h3>STYLES AND OTHER</h3>
        </div>
        <hr />

        <div className={`styleList ${open3 ? "active" : "inactive"}`}>
          <Link to={"typography"} className="eachList">
            <MdTypeSpecimen className="styleIcons" />
            <div>
              <div className="eachListTitle">Typography</div>
              <p>All of the predefined text styles</p>
              <hr />
            </div>
          </Link>
          <Link to={"typography"} className="eachList">
            <MdTypeSpecimen className="styleIcons" />
            <div>
              <div className="eachListTitle">Typography</div>
              <p>All of the predefined text styles</p>
              <hr />
            </div>
          </Link>
          <Link to={"typography"} className="eachList">
            <MdTypeSpecimen className="styleIcons" />
            <div>
              <div className="eachListTitle">Typography</div>
              <p>All of the predefined text styles</p>
              <hr />
            </div>
          </Link>
          <Link to={"typography"} className="eachList">
            <MdTypeSpecimen className="styleIcons" />
            <div>
              <div className="eachListTitle">Typography</div>
              <p>All of the predefined text styles</p>
              <hr />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AppDesignStyle;

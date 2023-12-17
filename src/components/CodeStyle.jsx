import React from "react";

import "./css/codeStyle.css";
import appUI from "../assets/images/appUI.png";
import jj from "../assets/images/jandj.png";
import iq from "../assets/images/iqvia.png";
import gl from "../assets/images/home-bg.jpg";
import loop from "../assets/images/loop.jpeg";
import shade from "../assets/images/shade-logo-smarthub.png";
import thebar from "../assets/images/thebar.webp";
import min from "../assets/images/minlandsby_logo.png";
import et from "../assets/images/etiya_logo.jpg";
import bear from "../assets/images/bearpeak_logo.jpeg";
import reply from "../assets/CodeStyle/reply_card_dark.png";
import crane from "../assets/CodeStyle/crane_card_dark.png";
import fort from "../assets/CodeStyle/fortnightly_card_dark.png";
import shrine from "../assets/CodeStyle/shrine_card_dark.png";

import AppDesignStyle from "./AppDesignStyle";

const CodeStyle = () => {
  return (
    <>
      <h1>App Design Styles</h1>
      <div>
        <AppDesignStyle />
      </div>
      <h1>Custom Software That Solves Your Business Challenges</h1>
      <div className="aboutMule">
        <div>
          <p>
            At Spacemulecode, we are not just your average software development
            company. We pride ourselves on being a small yet mighty team that
            delivers outstanding results. With a deliberate choice to maintain a
            limited client base, we ensure that each project receives our
            undivided attention and expertise.
          </p>
          <p>
            Our mission is simple: to put our clients' needs at the forefront of
            everything we do. We believe that great software is not just about
            lines of code, but about understanding and fulfilling the unique
            requirements of each client. By keeping our focus on the project at
            hand, we can provide a singular personal experience that is tailored
            to your specific goals.
          </p>
          <p>
            Integrity and transparency are the guiding principles that shape our
            operations. We believe in fostering trust and building long-term
            relationships with our clients. From the initial consultation to the
            final product delivery, we strive to maintain open and honest
            communication every step of the way. You can count on us to be
            reliable, accountable, and committed to your success.
          </p>
          <p>
            When you choose Spacemulecode, you're not just hiring a software
            development company, you're joining forces with a passionate team
            that will go above and beyond to bring your vision to life.
            Experience the difference of working with a small company that
            delivers big results. Let's embark on a journey together and
            transform your ideas into exceptional software solutions.
          </p>
          <p>-Headquarter in Florida, Veteran Owned.</p>
        </div>

        <img src={appUI} alt="appUi" />
      </div>
      <div className="clients">
        <h4>Some of our past clients and work</h4>
        <div className="clientsContainer">
          <img src={jj} alt="jandj" />
          <img src={iq} alt="jandj" />
          <img src={gl} alt="jandj" />
          <img src={loop} alt="jandj" />
          <img src={shade} alt="jandj" />
          <img src={thebar} alt="jandj" />
          <img src={min} alt="jandj" />
          <img src={et} alt="jandj" />
          <img src={bear} alt="jandj" />
        </div>
      </div>

      <div className="possible">
        <h1>What is Possible?</h1>
        <div>
          <a href="/">
            <img src={reply} alt="" />
          </a>

          <a href="/">
            <img src={crane} alt="" />
          </a>
          <a href="/">
            <img src={fort} alt="" />
          </a>
          <a href="/">
            <img src={shrine} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default CodeStyle;

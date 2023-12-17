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

import { IoMdMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";

const CodeStyle = () => {
  return (
    <>
      <h1>App Design Styles</h1>
      <div></div>
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
      </div>
      <div className="contact">
        <div className="contactUs">
          <h1>Let's Get Started</h1>
          <p>
            Click below to contact us to get started now, or to learn more about
            our services
          </p>
          <div>
            <IoMdMail className="contactIcons" />
            <MdOutlinePhoneIphone className="contactIcons" />
          </div>
        </div>

        <div>
          <h1>Taking technology solutions to a new level</h1>
          <p>
            Our developers build accessible, performant, and secure solutions.
            We only use time-tested engineering patterns to reduce development
            time and save our customers time and money.
          </p>
          <p>
            SpaceMuleCode is a fast-growing software company that keeps culture
            and creativity at the heart of everything we do. Our mission is to
            help our customers unlock their creativity and build exceptional
            apps using our uniquely powerful team to achieve their business
            goals.
          </p>

          <h3>Contact us</h3>

          <div className="social">
            <div>
              <ul>
                <li>
                  <p>Our service</p>
                </li>
                <li>
                  <h3>About us</h3>
                </li>
                <li>
                  <h3>Our Work</h3>
                </li>
                <li>
                  <h3>Pricing</h3>
                </li>
                <li>
                  <h3>Contact Us</h3>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <p>Company</p>
                <h3>Terms of Service</h3>
                <h3>Privacy Policy</h3>
              </ul>
            </div>
            <div>
              <ul>
                <p>Follow Us</p>
                <h3>Instagram</h3>
                <h3>Twitter</h3>
                <h3>Linkedin</h3>
                <h3>Github</h3>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeStyle;

import React from "react";

import { IoMdMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";

const About = () => {
  return (
    <>
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

export default About;

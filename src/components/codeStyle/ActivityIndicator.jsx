import React from "react";
import "./demo.css";
import DemoNav from "./DemoNav";

const ActivityIndicator = () => {
  return (
    <div className="demo">
      <DemoNav />
      <div className="mainDemoContent">
        <div className="mainText">
          <h1>App bar</h1>
          <p>
            The app bar provides content and actions related to the current
            screen. It's used for branding, screen titles, navigation and
            actions.
          </p>
        </div>
        <div className="screen">
          <div>
            <h5>Activity Indicator</h5>
          </div>
          <div className="home">
            <span className="spinner"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityIndicator;

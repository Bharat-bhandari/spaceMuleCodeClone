import React from "react";
import "./demo.css";
import DemoNav from "./DemoNav";

const Typography = () => {
  return (
    <div className="demo">
      <DemoNav />
      <div className="mainDemoContent">
        <div className="mainText">
          <h1>Typography</h1>
          <p>
            Definations for the various typographical styles found in Material
            Design.
          </p>
        </div>
        <div className="screen typoScreen">
          <section className="screenNav tyoNav">
            <p className="typo">Typography</p>
          </section>
          <section className="typoMain">
            <div>
              <p>Headline 1</p>
              <h1>Light 96sp</h1>
            </div>
            <div>
              <p>Headline 2</p>
              <h2>Light 60sp</h2>
            </div>
            <div>
              <p>Headline 3</p>
              <h3>Regular 48sp</h3>
            </div>
            <div>
              <p>Headline 4</p>
              <h4>Regular 34sp</h4>
            </div>
            <div>
              <p>Headline 5</p>
              <h5>Regular 24sp</h5>
            </div>
            <div>
              <p>Headline 6</p>
              <h6>Medium 20sp</h6>
            </div>
            <div>
              <p>Subtitle 1</p>
              <p class="subtitle1">Regular 16sp</p>
            </div>
            <div>
              <p>Subtitle 2</p>
              <p class="subtitle2">Medium 14sp</p>
            </div>
            <div>
              <p>Body text 1</p>
              <p class="body1">Regular 16sp</p>
            </div>
            <div>
              <p>Body text 2</p>
              <p class="body2">Medium 14sp</p>
            </div>
            <div>
              <p>Button</p>
              <p>MEDIUM (ALL CAPS) 14sp</p>
            </div>
            <div>
              <p>Caption</p>
              <p class="caption">Regular 12sp</p>
            </div>
            <div>
              <p>Overline</p>
              <p class="caption">REGULAR(ALL CAPS) 10sp</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Typography;

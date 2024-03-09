import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="hero-section page-section scroll-to-page" id="home">
      <div className="custom-container">
        <div className="hero-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              Introduction
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Hi my name is&nbsp;
              <span>Sikander</span>,I'm a Software Engineer & Full Stack Web
              Developer
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            I design and code beautifully simple things and i love what i do.
            Just simple like that!
          </p>
          <a
            href="#portfolio"
            className="go-to-project-btn scroll-to scroll-animation"
            data-animation="rotate_up"
          >
            <img src="assets/images/round-text.png" alt="" />
          </a>

          <div className="facts d-flex">
            <div
              className="left scroll-animation"
              data-animation="fade_from_left"
            >
              <h1>5+</h1>
              <p>
                Years of <br />
                Experience
              </p>
            </div>
            <div
              className="right scroll-animation"
              data-animation="fade_from_right"
            >
              <h1>100+</h1>
              <p>
                Projects completed in <br />
                15 countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

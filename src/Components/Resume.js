import React from "react";
const Resume = () => {
  return (
    <div className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              Resume
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Education & Experience
            </h1>
          </div>

          <div className="resume-timeline">
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">Feb 2021 - Present</span>
              <h2>Full Stack Web Developer</h2>
              <h2><span>Devcamp360</span></h2>
              <p>Envato Market</p>
            </div>
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">Sept 2019 - May 2020</span>
              <h2>Front End Web Developer</h2>
              <h2><span>ITNT</span></h2>
              <p>freelance</p>
            </div>
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date"> Jan 2019 - July 2019</span>
              <h2>Front End Designer</h2>
              <h2><span>ITNT</span></h2>
              <p>US RMIT University</p>
            </div>
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date"> Sept 2018 - Dec 2018</span>
              <h2>Intern</h2>
              <h2><span>ITNT</span></h2>
              <p>Responsibilietersad</p>
            </div>
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <span className="date">Aug 2014 - Aug 2018</span>
              <h2>Bachelors of Computer Software Engineering</h2>
              <h2><span>Foundation University Islamabad</span></h2>
              <p>-dsfsd<br/>-dskfljksdl</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

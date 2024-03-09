import React from "react";

const About = () => {
  return (
    <>
      <div className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
          <div className="about-content content-width">
            <div className="section-header">
              <h4
                className="subtitle scroll-animation"
                data-animation="fade_from_bottom"
              >
                About Me 
              </h4>
              <h1
                className="scroll-animation"
                data-animation="fade_from_bottom"
              >
                Every great design begin with
                <br />
                an even <span>better story</span>
              </h1>
            </div>
            <p className="scroll-animation" data-animation="fade_from_bottom">
              Since beginning my journey as a freelance designer nearly 8 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my
              chopsone design problem at a time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

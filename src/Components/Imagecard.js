import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faGithub,
  faSkype,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SlideRightAnimation = {
  hide: {
    opacity: 0,
    x: "100%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const slideLeftAnimation = {
  hide: {
    opacity: 0,
    x: "-100%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const FadeInAnimation = {
  hide: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const Imagecard = () => {
  const [animationState, setAnimationState] = useState("hide");

  const handleAnimationState = () => {
    if (animationState === "hide") {
      setAnimationState("show");
    }
  };

  useEffect(() => {
    const scrollHandler = () => {
      handleAnimationState();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [animationState]);

  return (
    <motion.div
      className="z-10 flex flex-col gap-4 md:-mt-16"
      initial={animationState}
      animate={animationState}
      exit="hide"
      variants={FadeInAnimation}
    >
      <div className="left-sidebar">
        <div>
          <img className="me" src="assets/images/me.jpg" alt="Me" />
          <br /> <br /> <br />
          <h2 className="name"> Syed Sikander Ali Shah</h2>
          <h3>sikandershah.dev@gmail.com</h3>
          <h3 className="email">
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />
            +92-347-5000955
          </h3>
          <h3 className="address">Based in Islamabad, Pakistan</h3>
        </div>
        <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faSkype} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
        </ul>
        <a href="#" className="theme-btn">
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "18px" }} />
          Hire Me!
        </a>
      </div>
    </motion.div>
  );
};
export default Imagecard;

import React, { useState } from "react";
import Imagecard from "./Components/Imagecard";
import Background from "./Components/Background";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import { motion } from "framer-motion";
function App() {
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

  const [animationState, setAnimationState] = useState("hide");

  const handleAnimationState = () => {
    if (animationState === "hide") {
      setAnimationState("show");
    }
  };

  if (typeof window !== "undefined") {
    // This code will only run on the client-side
    window.addEventListener("scroll", handleAnimationState);
  }
  return (
    <div className="App">
      <Background />
      <Imagecard />
      <Navbar />
      <Main />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;

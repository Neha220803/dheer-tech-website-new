"use client";

import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useScroll, useTransform, motion } from "framer-motion";
const one = "/assets/images/home/project1.png";
const two = "/assets/images/home/project2.png";
const three = "/assets/images/home/project3.png";
const four = "/assets/images/home/project4.png";

const HorizontalScrollProjectComp = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop); // Add resize listener

    return () => window.removeEventListener("resize", checkIfDesktop); // Cleanup
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isDesktop ? "-55%" : "-72%"]
  );
  return (
    <div className="carousel bg-neutral-700 " ref={targetRef} id="projects">
      <div className="projects-header">
        <h1 className="projects-title">PROJECTS</h1>
        <p className="projects-description">
          We don't just build websites, we craft digital experiences. Every
          pixel tells a story, every interaction sparks joy. Our team blends
          cutting-edge technology with human-centered design to create solutions
          that don't just work—they inspire.
          <span className="arrow-line"></span>
          <span className="projects-description-highlight">
            Plus, we're pretty fun to work with.
          </span>
        </p>
      </div>
      <div className="contentContainer">
        <motion.div className="images" style={{ x }}>
          <div className="imageItem">
            <div className="image-container">
              <img
                className="project-image"
                src={two}
                alt="alt text goes here"
              />
            </div>
            <p className="project-name-text">Crown Of Spice</p>
          </div>

          <div className="imageItem">
            <div className="image-container">
              <img
                className="project-image"
                src={one}
                alt="alt text goes here"
              />
            </div>
            <p className="project-name-text">Adhi Construction</p>
          </div>

          <div className="imageItem">
            <div className="image-container">
              <img
                className="project-image"
                src={three}
                alt="alt text goes here"
              />
            </div>
            <p className="project-name-text">Madras Cooking kitchen</p>
          </div>
          <div className="imageItem">
            <div className="image-container">
              <img
                className="project-image"
                src={four}
                alt="alt text goes here"
              />
            </div>
            <p className="project-name-text">Maya Indian Cuisine</p>
          </div>

          {/* <div className="imageItem">
            <ImageContainer imageSource={two} description="two image" />
          </div>
          <div className="imageItem">
            <ImageContainer imageSource={three} description="three image" />
          </div>
          <div className="imageItem">
            <ImageContainer imageSource={four} description="four image" />
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollProjectComp;

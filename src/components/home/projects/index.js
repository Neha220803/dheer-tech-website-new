"use client";

import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// Projects data array
const projects = [
  {
    id: 1,
    name: "Crown Of Spice",
    image: "/assets/images/home/project2.png",
    alt: "Crown Of Spice project",
    link: "https://www.crownofspices.com/home",
  },
  {
    id: 2,
    name: "Adhi Construction",
    image: "/assets/images/home/project1.png",
    alt: "Adhi Construction project",
    link: "https://adhiconstruction.us/",
  },
  {
    id: 3,
    name: "Madras Spice Corner",
    image: "/assets/images/home/project3.png",
    alt: "Madras Spice Corner project",
    link: "https://coereats.com/madrasspicecorner",
  },
  {
    id: 4,
    name: "Maya Indian Cuisine",
    image: "/assets/images/home/project4.png",
    alt: "Maya Indian Cuisine project",
    link: "https://www.mayaindiancuisineny.com/",
  },
];

const HorizontalScrollProjectComp = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);

    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isDesktop ? "-55%" : "-72%"]
  );

  return (
    <div className="carousel bg-neutral-700" ref={targetRef} id="projects">
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
          {projects.map((project) => (
            <div key={project.id} className="imageItem md:gap-6">
              <div className="image-container">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.alt}
                />
              </div>
              <Link href={project.link}>
                <div className="flex items-baseline justify-start gap-2 md:gap-3">
                  <p className="project-name-text">{project.name}</p>
                  <ExternalLink className="project-name-icon" />
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollProjectComp;

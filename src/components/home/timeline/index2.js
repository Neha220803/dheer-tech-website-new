"use client";

import React, { useEffect, useRef } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { titleVariants, paragraphVariants } from "../../animation/anim.js";

export const timelineContentVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export const timelineImageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

export const HomeTimelineComp2 = () => {
  const timelineContainerRef = useRef(null);

  const timelineData = [
    {
      id: 1,
      title: "Discovery - Understand your goals",
      content:
        "We begin every project by diving deep into your vision, challenges, and objectives. Through comprehensive stakeholder interviews, market research, and competitive analysis, we uncover the core problems your product needs to solve. This discovery phase ensures we're building the right solution from day one, aligning technical possibilities with your business goals and user needs.",
      height: "60vh",
      imgPath: "/assets/icons/timeline1.png",
    },
    {
      id: 2,
      title: "Design - Create intuitive solutions",
      content:
        "Our design team transforms insights into compelling user experiences. We create wireframes, prototypes, and high-fidelity mockups that prioritize usability and accessibility. Through iterative design sprints and user testing, we refine every interaction until it feels natural and effortless. The result is a product that not only looks beautiful but genuinely serves your users' needs.",
      height: "60vh",
      imgPath: "/assets/icons/timeline2.png",
    },
    {
      id: 3,
      title: "Development - Agile, scalable builds",
      content:
        "Our development process combines cutting-edge technology with proven methodologies. Using agile sprints, we build your product incrementally, allowing for continuous feedback and refinement. We prioritize clean, maintainable code, robust architecture, and scalable infrastructure that can grow with your business. Regular demos keep you involved throughout the entire build process.",
      height: "60vh",
      imgPath: "/assets/icons/timeline3.png",
    },
    {
      id: 4,
      title: "Deployment - Secure & future-ready",
      content:
        "Launch day is just the beginning. We ensure your product goes live smoothly with comprehensive testing, security audits, and performance optimization. Our deployment process includes automated monitoring, backup systems, and rollback capabilities. We set up analytics and tracking systems so you can measure success from day one while maintaining the highest security standards.",
      height: "60vh",
      imgPath: "/assets/icons/timeline4.png",
    },
    {
      id: 5,
      title: "Support - Ongoing partnership",
      content:
        "Our relationship doesn't end at launch. We provide ongoing maintenance, feature updates, and technical support to keep your product running smoothly. As your business evolves, we're here to scale your solution, add new capabilities, and adapt to changing market needs. Consider us your long-term technology partner, invested in your continued success.",
      height: "60vh",
      imgPath: "/assets/icons/timeline5.png",
    },
  ];

  const checkVisibility = () => {
    const sections = document.querySelectorAll(".timeline-section");

    sections.forEach((sec, index) => {
      const rect = sec.getBoundingClientRect();

      // Section active when it's in the middle area of viewport
      if (
        rect.top <= window.innerHeight * 0.6 &&
        rect.bottom >= window.innerHeight * 0.4
      ) {
        sec.classList.add("bg-gray-100");
      } else {
        sec.classList.remove("bg-gray-100");
      }
    });
  };

  const updateMarkers = () => {
    const sections = document.querySelectorAll(".timeline-section");
    const markers = document.querySelectorAll(".section-marker");

    // Check markers - activate based on timeline progress
    markers.forEach((marker, index) => {
      const section = sections[index];
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.scrollY;
      const currentScrollPos = window.scrollY + window.innerHeight * 0.5;

      // Activate marker when we've scrolled past the section's top
      if (currentScrollPos >= sectionTop) {
        marker.classList.add("bg-blue-500", "border-blue-500", "text-white");
        marker.classList.remove("bg-white", "border-gray-300", "text-gray-600");
      } else {
        marker.classList.remove("bg-blue-500", "border-blue-500", "text-white");
        marker.classList.add("bg-white", "border-gray-300", "text-gray-600");
      }
    });
  };

  const handleScroll = () => {
    checkVisibility();
    updateMarkers();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  return (
    <div className="">
      {/* Timeline Container */}
      <div ref={timelineContainerRef} className="grid grid-cols-2">
        {/* Left Column - Sticky Timeline Label */}
        <div className="md:col-span-1 col-span-2 md:h-screen md:sticky md:top-0 flex justify-center md:ml-10 items-center text-gray-800">
          <div className="mx-2 mb-2 flex justify-center rounded-4xl sticky-content">
            <div className="md:w-2/3 space-y-6 ">
              <div className="flex justify-around items-center">
                <img
                  src="/assets/images/home/champ-cup.svg"
                  className="h-25 w-auto"
                  alt=""
                />
                <motion.h2
                  className="text-5xl font-bold text-center"
                  variants={titleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Our Journey
                </motion.h2>
              </div>

              <motion.p
                className="text-justify"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                From initial discovery to ongoing support, we guide you through
                every stage of building and growing your digital presence. Our
                process is designed to deliver impactful websites that drive
                results and evolve with your business.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="md:col-span-1 col-span-2 relative space-y-4 md:space-y-10">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className="mx-4 md:mx-10 rounded-4xl timeline-section flex justify-center items-center relative p-6 md:p-10 transition-colors duration-300"
              style={{
                minHeight: item.height,
                backgroundColor:
                  index === 0
                    ? "#f5f5f5"
                    : index === 1
                    ? "#fef2f2"
                    : index === 2
                    ? "#f5f5f5"
                    : index === 3
                    ? "#fef2f2"
                    : "#f5f5f5",
              }}
            >
              {/* Section Content */}
              <div className="section-content max-w-lg">
                <motion.h4
                  className="text-3xl mb-4 text-gray-800 font-semibold"
                  variants={titleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {item.title}
                </motion.h4>
                <motion.div
                  variants={timelineImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <img src={item.imgPath} alt="" className="w-1/2 h-auto" />
                </motion.div>

                <motion.div
                  className="md:text-lg text-gray-600 md:leading-relaxed text-justify"
                  variants={timelineContentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {item.content}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTimelineComp2;

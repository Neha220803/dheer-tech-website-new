"use client";

import React, { useState } from "react";

const AboutTeamStoryComp = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(0);

  const content = [
    {
      title: "Our Expert Team",
      paragraphs: [
        "At DheerTech, our team consists of seasoned cybersecurity experts, full-stack developers, and digital strategists. Each member brings years of experience in their respective fields, from penetration testing to secure code development.",
        "We believe in continuous learning and staying ahead of emerging threats. Our team regularly participates in security conferences, obtains industry certifications, and collaborates with global cybersecurity communities to ensure we're always at the forefront of digital protection.",
      ],
      path: "/assets/images/about/what-we-do.png",
    },
    {
      title: "Our Journey & Story",
      paragraphs: [
        "DheerTech started with a simple vision: to empower businesses with secure, scalable, and smart digital solutions. From a small team of passionate developers to a full-scale digital agency, we've grown by consistently delivering excellence to our clients.",
        "Our journey is defined by innovation, trust, and a relentless focus on client success.",
      ],
      path: "/assets/images/about/our-team.png",
    },
    {
      title: "What We Do Best",
      paragraphs: [
        "We design and develop custom web applications that fuel business growth. From enterprise dashboards and e-commerce platforms to AI-driven applications, automation tools, and cybersecurity-first systems, our solutions are built with performance, scalability, and protection at the core.",
      ],
      path: "/assets/images/about/our-story.png",
    },
  ];

  return (
    <section className="flex items-center">
      <div className="max-w-7xl grid grid-cols-2 py-10 px-6 mx-auto">
        <div className="flex flex-col justify-around space-y-6">
          <div
            className="bg-pink-200 flex rounded-2xl p-10 cursor-pointer transition-all duration-300 hover:bg-pink-300 hover:shadow-lg"
            onMouseEnter={() => setHoveredCardIndex(0)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Our Expert Team
            </h3>
          </div>
          <div
            className="bg-pink-200 flex rounded-2xl p-10 cursor-pointer transition-all duration-300 hover:bg-pink-300 hover:shadow-lg"
            onMouseEnter={() => setHoveredCardIndex(1)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Our Journey & Story
            </h3>
          </div>
          <div
            className="bg-pink-200 flex rounded-2xl p-10 cursor-pointer transition-all duration-300 hover:bg-pink-300 hover:shadow-lg"
            onMouseEnter={() => setHoveredCardIndex(2)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              What We Do Best
            </h3>
          </div>
        </div>
        <div className="space-y-3 pl-8">
          <img
            src={content[hoveredCardIndex].path}
            alt="content image"
            className="rounded-lg"
          />
          {content[hoveredCardIndex].paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-600 leading-relaxed transition-all duration-500"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamStoryComp;

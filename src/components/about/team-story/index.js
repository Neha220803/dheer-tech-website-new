"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
        "DheerTech began with a simple vision: to empower businesses with secure, scalable, and smart digital solutions. What started as a small team of passionate developers has evolved into a full-scale digital agency trusted by clients across industries.",
        "Our journey has been defined by innovation, trust, and a relentless focus on client success. By consistently delivering excellence, we've built lasting relationships and positioned ourselves as a reliable partner in digital transformation.",
      ],
      path: "/assets/images/about/our-team.png",
    },
    {
      title: "What We Do Best",
      paragraphs: [
        "At DheerTech, we design and develop custom web applications that drive measurable business growth. Our expertise spans enterprise dashboards, e-commerce platforms, AI-powered applications, automation tools, and cybersecurity-first systems built to last.",
        "Every solution we create is crafted with performance, scalability, and protection at its core. By combining cutting-edge technology with future-ready strategies, we help businesses not only meet today's challenges but also adapt and thrive in the digital landscape.",
      ],
      path: "/assets/images/about/our-story.png",
    },
  ];

  return (
    <section className="flex items-center">
      <div className="md:max-w-7xl mx-auto space-y-8 md:py-10 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get to Know Us
          </h2>
          <p className="text-gray-600 md:w-2/3">
            Take a closer look at who we are — a team driven by innovation,
            collaboration, and trust. Explore what we do and why we are
            committed to building secure, scalable, and future-ready solutions.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-12">
          <div className="col-span-4 flex flex-col justify-around space-y-6">
            {content.map((item, index) => (
              <div
                key={index}
                className="border-l-5 border-2 bg-neutral-100 border-l-[rgba(188,19,61)] flex rounded-2xl p-10 cursor-pointer transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setHoveredCardIndex(index)}
              >
                <h3 className="text-xl font-semibold ">{item.title}</h3>
              </div>
            ))}
          </div>
          <div className="col-span-8 space-y-3 pl-8">
            <Card className="h-full relative bg-neutral-100 border-2">
              <CardContent className="w-2/3 ">
                <img
                  src={content[hoveredCardIndex].path}
                  alt="content image"
                  className="rounded-lg absolute bottom-0 right-4 w-1/3 h-auto"
                />
                <div className="space-y-2">
                  {content[hoveredCardIndex].paragraphs.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-600 leading-relaxed transition-all text-justify duration-500"
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Layout - Accordion */}
        <div className="md:hidden">
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="w-full space-y-4"
          >
            {content.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border"
              >
                <AccordionTrigger className="bg-[rgba(188,19,61,0.814)] text-white px-6 py-4 hover:bg-[rgba(208,25,70,0.81)] transition-colors duration-300 hover:no-underline">
                  <h3 className="text-lg font-semibold text-left">
                    {item.title}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 relative">
                  <div className="space-y-4 ">
                    {item.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-gray-600 leading-relaxed text-justify"
                      >
                        {paragraph}
                      </p>
                    ))}
                    <div className="flex justify-end mb-4">
                      <img
                        src={item.path}
                        alt={item.title}
                        className="rounded-lg w-48 h-auto "
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamStoryComp;

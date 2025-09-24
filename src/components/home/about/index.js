"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { Circle, Square, Triangle, Star, Hexagon } from "lucide-react";

const HomeAboutComp = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative h-full w-full overflow-hidden pb-5">
        <BackgroundElements />

        <div className="relative z-10 flex flex-col justify-end h-full w-full px-4 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <div className="mb-8">
              <div className="font-bold text-primary opacity-75 text-4xl md:text-7xl">
                ABOUT
              </div>
              <div className="font-bold text-primary-light text-4xl md:text-7xl">
                OUR COMPANY
              </div>
            </div>

            <div className="text-xl md:text-2xl lg:text-3xl text-gray-900 text-left font-medium relative space-y-4 text-justify">
              <TextSection text="Driven by innovation and powered by data, we analyze and optimize every solution we build." />
              <TextSection text="Our team of skilled developers craft secure, scalable applications with enterprise-grade security at their core." />
              <TextSection text="We leverage cutting-edge AI and machine learning to deliver high-performance solutions that scale with your business." />
              <TextSection text="With cloud-first architecture and a focus on continuous growth, we help businesses thrive." />
              <TextSection text="Our dedicated support team and collaborative approach ensure your success every step of the way." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TextSection = ({ text }) => {
  return <div>{text}</div>;
};

const BackgroundElements = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);
    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isDesktop]);

  return (
    <>
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-bottom"
          style={{
            backgroundImage: 'url("/assets/images/about/grid.png")',
          }}
        />
      </div>

      {/* Cursor-following icons */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'url("/assets/images/about/ai.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="hidden md:absolute top-40 right-32 w-12 h-12"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'url("/assets/images/about/analytics.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="hidden md:absolute bottom-40 left-32 w-14 h-14"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'url("/assets/images/about/cloud.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="absolute bottom-60 right-20 w-10 h-10 "
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'url("/assets/images/about/security.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="hidden md:absolute top-60 left-1/4 w-12 h-12 opacity-60"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'url("/assets/images/about/web-dev.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="hidden md:absolute bottom-32 right-1/3 w-16 h-16 opacity-65"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'url("/assets/images/about/support.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-[15%] w-8 h-8 opacity-55 md:opacity-100"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'url("/assets/images/about/perf.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-[15%] w-10 h-10"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'url("/assets/images/about/resp.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-12 h-12 opacity-55"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'url("/assets/images/about/seo.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/2 w-9 h-9 opacity-50"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'url("/assets/images/about/collab.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Simple geometric shapes */}
      <motion.div
        className="absolute top-32 right-1/4 text-primary-light "
        style={{ x: mouseX, y: mouseY }}
      >
        <Circle size={24} />
      </motion.div>
      <motion.div
        className="absolute top-38 right-[24%] text-primary "
        style={{ x: mouseX, y: mouseY }}
      >
        <Hexagon size={15} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-[45%] text-primary opacity-60"
        style={{ x: mouseX, y: mouseY }}
      >
        <Square size={16} />
      </motion.div>

      <motion.div
        className="absolute top-3/4 right-1/2 text-white"
        style={{ x: mouseX, y: mouseY }}
      >
        <Triangle size={20} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/2 left-[65%] text-primary "
        style={{ x: mouseX, y: mouseY }}
      >
        <Star size={18} />
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-[80%] text-primary-accent"
        style={{ x: mouseX, y: mouseY }}
      >
        <Hexagon size={14} />
      </motion.div>
    </>
  );
};

export default HomeAboutComp;

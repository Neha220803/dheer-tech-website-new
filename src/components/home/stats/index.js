"use client";

import React, { useEffect, useState } from "react";

const AnimatedCounter = ({ targetNumber, suffix = "" }) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(targetNumber, Math.floor(increment * step));
      setDisplayNumber(current);

      if (step >= steps || current >= targetNumber) {
        clearInterval(timer);
        setDisplayNumber(targetNumber);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <span className="inline-block">
      {displayNumber}
      {suffix}
    </span>
  );
};

const HomeStatsComp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      number: 75,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      number: 6,
      suffix: "+",
      label: "Years Served",
    },
    {
      number: 20,
      suffix: "+",
      label: "Employees",
    },
  ];

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl bg-color2-50 rounded-2xl py-10 px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-800">
                {isVisible ? (
                  <AnimatedCounter
                    targetNumber={stat.number}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-lg md:text-xl font-medium max-w-xs mx-auto leading-relaxed text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStatsComp;

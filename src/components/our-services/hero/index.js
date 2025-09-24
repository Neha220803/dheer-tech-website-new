"use client";

import React, { useState, useEffect } from "react";
import {
  Code2,
  Zap,
  Users,
  TrendingUp,
  Play,
  Globe,
  Rocket,
} from "lucide-react";

const LightNeonHero = ({
  title1 = "Custom",
  title2 = "Web Applications",
  description = "A digital platform built specifically for your business requirements rather than using generic templates. These applications represent your unique digital identity.",
  item1 = "Interactive Solutions",
  item2 = "Scalable Architecture",
  searchBartext = "custom-web-app.dev",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Keep only Theme 3
  const themes = [
    {
      id: 3,
      name: "Modern Espresso",
      bgGradient: "from-neutral-50 via-stone-50 to-amber-100",
      cardBg: "bg-white/80",
      primaryColor: "text-stone-900",
      primaryBg: "bg-stone-800",
      accentColor: "text-amber-800",
      accentBg: "bg-amber-700",
      borderColor: "border-stone-200",
      glowColor: "shadow-stone-800/15",
      gradientFrom: "from-stone-800",
      gradientTo: "to-amber-700",
      tagBg: "bg-stone-50",
      tagText: "text-stone-900",
      tagBorder: "border-stone-200",
    },
  ];

  const t = themes[0]; // only one theme remains

  const LightNeonDesign = () => (
    <div
      className={`relative min-h-screen bg-gradient-to-br ${t.bgGradient} overflow-hidden`}
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className={`${t.primaryColor} opacity-20`}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 left-10 w-72 h-72 ${t.primaryBg} opacity-10 rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 ${t.accentBg} opacity-10 rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 ${t.primaryBg} opacity-5 rounded-full blur-3xl animate-pulse`}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 ${t.tagBg} ${t.tagBorder} border rounded-full px-4 py-2 ${t.tagText} text-sm mb-6 backdrop-blur-sm`}
            >
              <div
                className={`w-2 h-2 ${t.primaryBg} rounded-full animate-pulse`}
              ></div>
              What is it?
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gray-900">{title1}</span>
              <br />
              <span
                className={`bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} bg-clip-text text-transparent`}
              >
                {title2}
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 ${t.primaryBg} rounded-full animate-pulse`}
                ></div>
                <span className={`${t.primaryColor} text-sm font-medium`}>
                  {item1}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 ${t.accentBg} rounded-full animate-pulse`}
                ></div>
                <span className={`${t.accentColor} text-sm font-medium`}>
                  {item2}
                </span>
              </div>
            </div>

            <div>
              <button
                className={`group relative bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl ${t.glowColor} transform hover:scale-105`}
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="relative">
              <div
                className={`relative ${t.cardBg} ${t.borderColor} border-2 rounded-3xl p-8 backdrop-blur-xl shadow-2xl`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 text-gray-600 text-xs">
                    {searchBartext}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Code2 className={`w-5 h-5 ${t.primaryColor}`} />
                    <span className="text-gray-700">
                      Tailored to your business
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className={`w-5 h-5 ${t.accentColor}`} />
                    <span className="text-gray-700">
                      High-performance architecture
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className={`w-5 h-5 ${t.primaryColor}`} />
                    <span className="text-gray-700">User-centric design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className={`w-5 h-5 ${t.accentColor}`} />
                    <span className="text-gray-700">
                      Supports growth journey
                    </span>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} opacity-5 rounded-3xl blur-xl -z-10`}
                ></div>
              </div>

              {/* Floating Code Elements */}
              <div
                className={`absolute -top-4 -right-4 bg-white ${t.borderColor} border-2 rounded-lg p-3 ${t.primaryColor} text-xs font-mono animate-bounce shadow-lg`}
              >
                &lt;/&gt;
              </div>
              <div
                className={`absolute -bottom-4 -left-4 bg-white ${t.borderColor} border-2 rounded-lg p-3 ${t.accentColor} text-xs font-mono animate-bounce delay-300 shadow-lg`}
              >
                {}
              </div>

              {/* Additional floating elements */}
              <div
                className={`absolute top-1/4 -left-8 ${t.primaryBg} rounded-full p-3 shadow-xl animate-bounce delay-500`}
              >
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div
                className={`absolute bottom-1/4 -right-8 ${t.accentBg} rounded-full p-3 shadow-xl animate-bounce delay-700`}
              >
                <Rocket className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <LightNeonDesign />;
};

export default LightNeonHero;

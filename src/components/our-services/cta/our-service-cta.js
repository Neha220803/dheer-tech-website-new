"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Code,
  Star,
  CheckCircle,
  Phone,
  Mail,
  Rocket,
  Zap,
  Globe,
} from "lucide-react";
import ContactPopUpForm from "@/components/pop-up-form/ContactPopUpForm";

const OurServicesCTAComp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex items-center justify-center p-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-slate-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden w-full">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-200/50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit">
                <Code className="w-4 h-4" />
                Web Development Services
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Build Stunning
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Web Solutions
                </span>
                That Convert
              </h1>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    75+
                  </div>
                  <div className="text-sm text-gray-600">
                    Websites Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    99%
                  </div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <ContactPopUpForm>
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="cursor-pointer group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 mb-6"
                >
                  <span>Get Your Quote</span>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl"></div>
                </button>
              </ContactPopUpForm>
            </div>

            {/* Right Visual */}
            <div className="relative bg-gradient-to-br from-blue-200/10 to-slate-200/10 p-8 lg:p-12 flex items-center justify-center">
              {/* Floating Elements */}
              <div className="relative">
                {/* Main Code Icon */}
                <div className="relative bg-white rounded-full p-10 shadow-2xl border border-blue-200">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform duration-300">
                    <Code className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Floating Service Cards */}
                <div className="absolute -top-8 -right-8 bg-white rounded-xl p-3 shadow-xl border border-blue-200 animate-bounce">
                  <Rocket className="w-6 h-6 text-blue-600 mb-1" />
                  <div className="text-xs text-gray-600 font-medium">
                    Fast Launch
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-3 shadow-xl border border-blue-200 animate-bounce delay-300">
                  <Globe className="w-6 h-6 text-indigo-600 mb-1" />
                  <div className="text-xs text-gray-600 font-medium">
                    Global Reach
                  </div>
                </div>

                <div className="absolute top-1/2 -right-14 bg-white rounded-xl p-3 shadow-xl border border-blue-200 animate-bounce delay-700">
                  <Zap className="w-6 h-6 text-yellow-500 mb-1" />
                  <div className="text-xs text-gray-600 font-medium">
                    Lightning Fast
                  </div>
                </div>

                {/* Rating Card */}
                <div className="absolute -top-4 -left-10 bg-white rounded-xl p-3 shadow-xl border border-blue-200">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600">4.9/5 Rating</div>
                </div>

                {/* Orbiting Elements */}
                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  <div className="absolute -top-8 left-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-1/2 -right-8 w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <div className="absolute -bottom-8 left-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="absolute top-1/2 -left-8 w-2 h-2 bg-slate-400 rounded-full"></div>
                </div>

                {/* Code brackets decoration */}
                <div className="absolute -top-4 -left-4 text-blue-200 text-6xl font-mono opacity-20 select-none">
                  {"{"}
                </div>
                <div className="absolute -bottom-4 -right-4 text-blue-200 text-6xl font-mono opacity-20 select-none">
                  {"}"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesCTAComp;

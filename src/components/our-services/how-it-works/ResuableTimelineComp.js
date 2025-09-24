"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const ReusableTimelineComp = ({
  title = "Our Process",
  subtitle = "Sign up for a new account to get started with our platf Sign up for a new account to get started with our platf ",
  steps = [
    {
      title: "Create Account",
      description:
        "Sign up for a new account to get started with our platform.",
    },
    {
      title: "Verify Email",
      description:
        "Check your inbox and verify your email address to activate your account.",
    },
    {
      title: "Complete Profile",
      description:
        "Fill out your profile information to personalize your experience.",
    },
    {
      title: "Start Using",
      description:
        "Begin exploring all the features and capabilities available to you.",
    },
  ],
  primaryColor = "bg-emerald-500",
  borderColor = "border-gray-300",
  textPrimaryColor = "text-gray-900",
  textSecondaryColor = "text-gray-600",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSteps, setAnimatedSteps] = useState(new Set());
  const componentRef = useRef(null);

  // Intersection Observer for visibility detection
  useEffect(() => {
    if (!componentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(componentRef.current);
    return () => observer.disconnect();
  }, []);

  // Simplified animation trigger for mobile
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setAnimatedSteps(
        new Set(Array.from({ length: steps.length }, (_, i) => i))
      );
    }, 100);

    return () => clearTimeout(timer);
  }, [isVisible, steps.length]);

  return (
    <div className="max-w-6xl mx-auto px-5 py-35">
      <div
        className={cn("timeline-container", isVisible && "animate-in")}
        ref={componentRef}
        style={{ "--step-count": steps.length }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={cn("text-4xl font-bold mb-4", textPrimaryColor)}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn("text-lg ", textSecondaryColor)}>{subtitle}</p>
          )}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Background connecting line */}
          <div
            className={cn("absolute top-12 h-0.5 bg-gray-300 z-10")}
            style={{
              left: `${100 / steps.length / 2}%`,
              right: `${100 / steps.length / 2}%`,
            }}
          />

          {/* Progress line */}
          <div
            className={cn(
              "absolute top-12 h-0.5 z-10 transition-all duration-[2s] ease-out delay-500",
              primaryColor,
              isVisible ? "opacity-100" : "opacity-0"
            )}
            style={{
              left: `${100 / steps.length / 2}%`,
              width: isVisible ? `${100 - 100 / steps.length}%` : "0%",
            }}
          />

          <div
            className="grid gap-4 items-start relative z-20"
            style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center text-center px-2 opacity-0 translate-y-5 transition-all duration-600 ease-out",
                  isVisible && "opacity-100 translate-y-0"
                )}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex flex-col items-center mb-4">
                  <div
                    className={cn("text-sm font-bold mb-2", textSecondaryColor)}
                  >
                    Step {index + 1}
                  </div>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 relative z-30",
                      animatedSteps.has(index)
                        ? `${primaryColor} border-transparent text-white`
                        : `bg-white ${borderColor} text-gray-300`
                    )}
                  >
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                </div>

                <div className="max-w-48">
                  <h3
                    className={cn(
                      "text-base mb-2 whitespace-nowrap transition-all duration-500",
                      animatedSteps.has(index)
                        ? `font-semibold ${textPrimaryColor}`
                        : `font-normal ${textSecondaryColor}`
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm leading-relaxed",
                      textSecondaryColor
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="block lg:hidden relative">
          {/* Mobile background line */}
          <div className="absolute left-4 top-12 bottom-12 w-0.5 bg-gray-300 z-10" />

          {/* Mobile progress line */}
          <div
            className={cn(
              "absolute left-4 top-12 w-0.5 z-10 transition-all duration-[2s] ease-out delay-500",
              primaryColor,
              isVisible ? "opacity-100" : "opacity-0"
            )}
            style={{
              height: isVisible ? `calc(100% - 6rem)` : "0%",
            }}
          />

          <div className="space-y-10 relative z-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center opacity-0 translate-y-5 transition-all duration-600 ease-out",
                  isVisible && "opacity-100 translate-y-0"
                )}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full border flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-500 relative z-30",
                    animatedSteps.has(index)
                      ? `${primaryColor} border-transparent text-white`
                      : `bg-white ${borderColor} text-gray-300`
                  )}
                >
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>

                <div className="flex-1">
                  <h3
                    className={cn(
                      "text-base mb-1 transition-all duration-500",
                      animatedSteps.has(index)
                        ? `font-semibold ${textPrimaryColor}`
                        : `font-normal text-gray-400`
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm leading-relaxed",
                      textSecondaryColor
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableTimelineComp;

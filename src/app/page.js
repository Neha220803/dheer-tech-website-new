"use client";

import HomeAboutComp from "@/components/home/about";
import { HomeHeroComp } from "@/components/home/hero";
import { OurServiceComp } from "@/components/home/our-services";
import HorizontalScrollProjectComp from "@/components/home/projects";
import TimelineStickyComp from "@/components/home/timeline/HomeTimelineSticky";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <HomeHeroComp />
      <HomeAboutComp />
      <HorizontalScrollProjectComp />
      <OurServiceComp />
      <TimelineStickyComp />
      <section>Home</section>
    </div>
  );
}

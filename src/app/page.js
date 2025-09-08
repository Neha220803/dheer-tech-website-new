"use client";

import FooterComp from "@/components/footer";
import HomeAboutComp from "@/components/home/about";
import { HomeHeroComp } from "@/components/home/hero";
import HomeCTAComp from "@/components/home/homeCTA";
import { OurServiceComp } from "@/components/home/our-services";
import HorizontalScrollProjectComp from "@/components/home/projects";
import HomeStatsComp from "@/components/home/stats";
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
      <HomeStatsComp />
      <OurServiceComp />
      <HorizontalScrollProjectComp />
      <div className="flex p-30 items-center justify-center text-5xl text-center">
        Testimonial Section
      </div>
      <TimelineStickyComp />
      <HomeCTAComp />
      <FooterComp />
    </div>
  );
}

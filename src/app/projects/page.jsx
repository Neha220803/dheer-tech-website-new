import HomeStatsComp from "@/components/home/stats";
import HomeTestimonialComp from "@/components/home/testimonial";
import ProjectCTAComp from "@/sections/projects/CTA";
import ProjectsFeaturedComp from "@/sections/projects/featured-projects";
import ProjectsHeroComp from "@/sections/projects/hero";
import React from "react";

const ProjectPage = () => {
  return (
    <>
      <ProjectsHeroComp />
      <HomeStatsComp />
      <ProjectsFeaturedComp />
      <HomeTestimonialComp />
      <ProjectCTAComp />
    </>
  );
};

export default ProjectPage;

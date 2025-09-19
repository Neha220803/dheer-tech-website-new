import { Metadata } from "next";
import HomeStatsComp from "@/components/home/stats";
import HomeTestimonialComp from "@/components/home/testimonial";
import ProjectCTAComp from "@/sections/projects/CTA";
import ProjectsFeaturedComp from "@/sections/projects/featured-projects";
import ProjectsHeroComp from "@/sections/projects/hero";
import React from "react";

export const metadata = {
  title: "Web Development Portfolio | Custom Software Projects | DheerTech Inc",
  description:
    "Explore our portfolio: custom e-commerce sites, restaurant systems, construction platforms. 75+ successful web development projects.",
  keywords: [
    "web development portfolio",
    "software development projects",
    "custom software examples",
    "e-commerce website examples",
    "restaurant website development",
    "construction website design",
    "business software case studies",
    "custom business software projects",
    "web application portfolio",
    "software development showcase",
  ],
  authors: [{ name: "DheerTech Inc" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dheertech.com/projects",
    title:
      "Web Development Portfolio | Custom Software Projects & Success Stories",
    description:
      "See our proven track record: custom e-commerce platforms, restaurant ordering systems, construction websites, and business automation solutions. 75+ successful projects delivered.",
    siteName: "DheerTech Inc",
    images: [
      {
        url: "https://dheertech.com/assets/images/home/project1.png",
        width: 1200,
        height: 630,
        alt: "DheerTech Portfolio - Custom Web Development Projects and Case Studies",
      },
    ],
  },
  alternates: {
    canonical: "https://dheertech.com/projects",
  },
  category: "technology",
};

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

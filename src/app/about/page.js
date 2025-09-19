import { Metadata } from "next";
import AboutHeroComp from "@/components/about/hero";
import AboutOurApproachComp from "@/components/about/our-approach";
import AboutTeamStoryComp from "@/components/about/team-story";
import React from "react";

export const metadata = {
  title: "Expert Web Developers & Cybersecurity Team | DheerTech Inc",
  description:
    "Meet DheerTech's expert team of developers with cybersecurity specialists. 6+ years building secure, scalable web applications with agile practices.",
  keywords: [
    "experienced web developers",
    "cybersecurity experts",
    "full-stack development team",
    "software development expertise",
    "web security specialists",
    "agile development team",
    "cloud-native solutions",
    "professional software developers",
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
    url: "https://dheertech.com/about",
    title: "About DheerTech - Expert Web Development & Security Team",
    description:
      "Our experienced team combines cutting-edge development with enterprise-grade security. Meet the cybersecurity experts and full-stack developers behind DheerTech's success.",
    siteName: "DheerTech Inc",
    images: [
      {
        url: "https://dheertech.com/assets/images/about/our-team.png",
        width: 1200,
        height: 630,
        alt: "DheerTech Team - Expert Web Developers and Cybersecurity Specialists",
      },
    ],
  },
  alternates: {
    canonical: "https://dheertech.com/about",
  },
  category: "technology",
};

const AboutPage = () => {
  return (
    <>
      <AboutHeroComp />
      <AboutTeamStoryComp />
      <AboutOurApproachComp />
    </>
  );
};

export default AboutPage;

// this is src\app\our-services\page.jsx:
import { Metadata } from "next";
import React from "react";
import OurServicesPageMainComp from "@/components/our-services/main-page/our-services";

export const metadata = {
  title: "Web Development Services | Custom Apps & E-commerce | DheerTech",
  description:
    "Professional web development including custom applications, e-commerce platforms, secure coding, AI integrations & digital marketing.",
  keywords: [
    "custom web development",
    "e-commerce development",
    "cybersecurity services",
    "AI automation tools",
    "web development services",
    "business automation software",
    "web application development",
    "online store development",
    "software development services",
    "digital marketing services",
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
    url: "https://dheertech.com/our-services",
    title:
      "Professional Web Development Services | Custom Apps & Security Solutions",
    description:
      "Comprehensive web development services: custom applications, secure e-commerce platforms, cybersecurity protection, AI automation, and digital marketing solutions.",
    siteName: "DheerTech Inc",
    images: [
      {
        url: "https://dheertech.com/assets/images/services/software-bg.png",
        width: 1200,
        height: 630,
        alt: "DheerTech Web Development Services - Custom Applications and Security Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://dheertech.com/our-services",
  },
  category: "technology",
};

const ServicesPage = () => {
  return <OurServicesPageMainComp />;
};

export default ServicesPage;

import ContactHeroComp from "@/sections/contact/hero";
import ContactLocationComp from "@/sections/contact/location";
import React from "react";
import { Metadata } from "next";

export const metadata = {
  title: "Contact DheerTech | Free Web Development Quote | NY & Chennai",
  description:
    "Get free web development consultation & quote. Offices in New York, Chennai and Kanyakumari.Call +1-516-765-1100 or email info@dheertech.com",
  keywords: [
    "web development company contact",
    "software development consultation",
    "custom software quote",
    "web developers New York",
    "software company Hicksville NY",
    "web development Chennai",
    "get web development quote",
    "software development consultation free",
    "custom application development estimate",
    "web development services contact",
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
    url: "https://dheertech.com/contact",
    title: "Contact DheerTech - Free Web Development Consultation & Quote",
    description:
      "Ready to start your project? Contact our expert team for free consultation. Offices in New York and Chennai. Professional web development and software solutions.",
    siteName: "DheerTech Inc",
    images: [
      {
        url: "https://dheertech.com/assets/images/contact/new-york.png",
        width: 1200,
        height: 630,
        alt: "Contact DheerTech - Web Development Company with offices in New York and Chennai",
      },
    ],
  },
  alternates: {
    canonical: "https://dheertech.com/contact",
  },
  category: "technology",
};

const ContactUspage = () => {
  return (
    <>
      <ContactHeroComp />
      <ContactLocationComp />
    </>
  );
};

export default ContactUspage;

import { Metadata } from "next";
import HomeAboutComp from "@/components/home/about";
import { HomeHeroComp } from "@/components/home/hero";
import HomeCTAComp from "@/components/home/homeCTA";
import { OurServiceComp } from "@/components/home/our-services";
import HorizontalScrollProjectComp from "@/components/home/projects";
import HomeStatsComp from "@/components/home/stats";
import HomeTestimonialComp from "@/components/home/testimonial";
import HomeTimelineComp2 from "@/components/home/timeline/index2";

export const metadata = {
  title: "Web Development Company | Custom Software Solutions | DheerTech Inc",
  description:
    "DheerTech Inc is a leading website development company specializing in custom secure web application for growing businesses.",
  keywords: [
    "web development company",
    "software development agency",
    "custom web applications",
    "business software solutions",
    "secure web development",
    "scalable web applications",
    "cybersecurity services",
    "professional web development",
  ],
  authors: [{ name: "DheerTech Inc" }],
  creator: "DheerTech Inc",
  publisher: "DheerTech Inc",
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
    url: "https://dheertech.com",
    title:
      "Web Development Company | Custom Software Solutions | DheerTech Inc",
    description:
      "DheerTech Inc creates secure, scalable web applications and software solutions. Expert team specializing in cybersecurity, AI automation, and digital transformation.",
    siteName: "DheerTech Inc",
    images: [
      {
        url: "https://dheertech.com/assets/images/logo/logo-circle.png",
        width: 1200,
        height: 630,
        alt: "DheerTech Inc - Web Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Development Company | Custom Software Solutions | DheerTech Inc",
    description:
      "Expert web developers creating secure, scalable solutions for growing businesses. Custom applications, cybersecurity, and AI automation services.",
    images: ["https://dheertech.com/assets/images/logo/logo-circle.png"],
    creator: "@dheertech",
  },
  alternates: {
    canonical: "https://dheertech.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
};

export default function Home() {
  return (
    <>
      <HomeHeroComp />
      <HomeAboutComp />
      <HomeStatsComp />
      <OurServiceComp />
      <HorizontalScrollProjectComp />
      <HomeTestimonialComp />
      <HomeTimelineComp2 />
      <HomeCTAComp />
    </>
  );
}

import { Inter_Tight, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { HomeNavComp } from "@/components/nav";
import WhatsappButtonsComp from "@/components/whatsapp-button/WhatsappButtons";
import SmoothScrolling from "@/components/lennis/SmoothScrolling";
import FooterComp from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "DheerTech Inc",
  description:
    "DheerTech Inc is a leading Software Development company specializing in creating secure, scalable, and smart web-based solutions for businesses of all sizes.",
  icons: {
    icon: "/assets/images/logo/logo-circle.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://dheertech.com/#organization",
                  name: "DheerTech Inc",
                  url: "https://dheertech.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://dheertech.com/assets/images/logo/logo.jpeg",
                    width: 500,
                    height: 500,
                  },
                  description:
                    "DheerTech Inc is a leading Software Development company specializing in creating secure, scalable, and smart web-based solutions for businesses of all sizes.",
                  address: [
                    {
                      "@type": "PostalAddress",
                      addressLocality: "Hicksville",
                      addressRegion: "New York",
                      addressCountry: "US",
                    },
                    {
                      "@type": "PostalAddress",
                      addressLocality: "Chennai",
                      addressRegion: "Tamil Nadu",
                      addressCountry: "IN",
                    },
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-516-765-1100",
                    contactType: "customer service",
                    email: "info@dheertech.com",
                  },
                  foundingDate: "2018",
                  numberOfEmployees: "20-50",
                  sameAs: [
                    "https://www.facebook.com/dheertech",
                    "https://www.linkedin.com/company/dheertech",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://dheertech.com/#website",
                  url: "https://dheertech.com",
                  name: "DheerTech Inc",
                  description:
                    "Web Development Company specializing in Custom Software Solutions",
                  publisher: {
                    "@id": "https://dheertech.com/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          "https://dheertech.com/search?q={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
                {
                  "@type": "Service",
                  serviceType: "Web Development",
                  provider: {
                    "@id": "https://dheertech.com/#organization",
                  },
                  areaServed: ["New York", "Chennai", "Global"],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Web Development Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Custom Web Applications",
                          description:
                            "Tailored web applications built for your business needs",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Cybersecurity Services",
                          description:
                            "Comprehensive security solutions for web applications",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "E-commerce Development",
                          description:
                            "Complete e-commerce platform development and optimization",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${interTight.variable} ${robotoSlab.variable} antialiased`}
      >
        <SmoothScrolling />
        <HomeNavComp />
        {children}
        <Analytics />
        <WhatsappButtonsComp />
        <FooterComp />
      </body>
    </html>
  );
}

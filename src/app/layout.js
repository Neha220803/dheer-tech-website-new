import { Inter_Tight, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { HomeNavComp } from "@/components/nav";
import WhatsappButtonsComp from "@/components/whatsapp-button/WhatsappButtons";
import { Toaster } from "@/components/ui/sonner";
import SmoothScrolling from "@/components/lennis/SmoothScrolling";
import FooterComp from "@/components/footer";

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
      <body
        className={`${interTight.variable} ${robotoSlab.variable} antialiased`}
      >
        <SmoothScrolling />
        <HomeNavComp />
        {children}
        <WhatsappButtonsComp />
        <FooterComp />
      </body>
    </html>
  );
}

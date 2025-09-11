import { Inter_Tight, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { HomeNavComp } from "@/components/nav";
// import WhatsappButtonsComp from "@/components/whatsapp-button/WhatsappButtons";
import { Toaster } from "@/components/ui/sonner";

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
  title: "Dheer Tech Inc",
  description:
    "Dheer Tech Inc is a leading Software Development company specializing in creating secure, scalable, and smart web-based solutions for businesses of all sizes.",
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
        <HomeNavComp />
        {children}
        {/* <WhatsappButtonsComp /> */}
        <Toaster richColors />
      </body>
    </html>
  );
}

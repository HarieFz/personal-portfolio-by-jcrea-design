import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const lufga = localFont({
  src: [
    {
      path: "../../public/fonts/LufgaBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/LufgaBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/fonts/LufgaExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/LufgaExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/LufgaBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/LufgaBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/LufgaSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/LufgaSemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/LufgaMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/LufgaMediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/LufgaRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/LufgaItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/LufgaLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/LufgaLightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/LufgaExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/LufgaExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/LufgaThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/LufgaThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-lufga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JCREA — Personal Portfolio Website for Product Designer",
  description:
    "JCREA is a modern, and visually captivating personal portfolio website built for a product designer to showcase services, work experience, portfolio projects, client testimonials, and blog posts. The goal is to provide a professional digital presence that communicates skills, achievements, and creativity, while also encouraging potential clients or employers to get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lufga.variable} ${inter.variable} ${urbanist.variable} font-lufga antialiased flex flex-col items-center -tracking-[0.015em]`}
      >
        <div className="max-w-8xl w-full">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

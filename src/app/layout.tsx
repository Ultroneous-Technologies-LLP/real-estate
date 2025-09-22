import type { Metadata } from "next";
import localFont from "next/font/local";

import data from "@/content/layout.json";
import { Footer, Header } from "@/components/layout";
import { LayoutDataType } from "@/components/layout/types";
import "./globals.css";

const lufga = localFont({
  src: [
    {
      path: "../../public/assets/font/lufga-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/font/lufga-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/font/lufga-extraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
  display: "swap",
  preload: false,
});

const lufgaPreload = localFont({
  src: [
    {
      path: "../../public/assets/font/lufga-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/font/lufga-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/font/lufga-semiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-lufga-preload",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Real Estate Website Landing Page – Property, Housing & Modern Realtor UI",
  description:
    "Elegant real estate website landing page design. Perfect for property listings, housing agencies, and realtors showcasing modern properties and apartments.",
  keywords: [
    "real estate website design",
    "property landing page",
    "housing UI",
    "realtor website",
    "real estate template",
    "apartment listing website",
    "property management UI",
    "modern housing web design",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },

      // Dark mode versions
      {
        url: "/favicon-dark.ico",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-dark.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-dark.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180" },
      {
        url: "/favicon-dark.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutData: LayoutDataType = data;
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lufgaPreload.variable} ${lufga.variable} antialiased`}
      >
        <Header data={layoutData.header} />
        {children}
        <Footer data={layoutData.footer} />
      </body>
    </html>
  );
}

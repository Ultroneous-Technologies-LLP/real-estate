import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

import { Footer, Header } from "@/components/layout";
import { lufga, lufgaPreload } from "@/constants";
import data from "@/content/layout.json";

import "../../style/globals.css";
import { LayoutProps } from "./types";

export const metadata: Metadata = {
  title: "Real Estate Website Landing Page – Property, Housing & Modern Realtor UI",
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

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const { footer, header }: LayoutProps = data;

  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${lufgaPreload.variable} ${lufga.variable} antialiased`}>
        <Header {...header} />
        {children}
        <Footer {...footer} />
      </body>
    </html>
  );
};

export default RootLayout;

import localFont from "next/font/local";

export const lufga = localFont({
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
  ],
  variable: "--font-lufga",
  display: "swap",
  preload: false,
});

export const lufgaPreload = localFont({
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

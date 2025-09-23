import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Container } from "@/components/common";
import { Facebook, Instagram, Twitter } from "@/components/icons";

import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({ anyDoubts, contactUs, logo, navLinks }) => (
  <Container
    as="footer"
    backgroundClassName="bg-police-blue"
    className="px-6 xl:px-0 py-12.5 xl:py-16"
    role="contentinfo"
  >
    <div className="max-w-171 w-full mx-auto">
      <div>
        <Link href={logo.link} aria-label={`${logo.title} homepage`}>
          <Image
            src={logo.src}
            width={54}
            height={54}
            alt={logo.alt}
            title={logo.alt}
            className="mx-auto"
          />
        </Link>
        <p className="text-white te-xl xl:text-2xl/6 font-semibold font-lufga-preload text-center pt-3 xl:pt-3.5">
          <span>{logo.title}</span>
        </p>
      </div>
      <p className="pt-8 xl:pt-10 text-white/50 text-sm/3.5 xl:text-lg/4.5 font-lufga-preload text-center pb-4">
        <span>{anyDoubts}</span>
      </p>
      <p className="pb-8 xl:pb-13.5 text-white/50 text-sm/3.5 xl:text-lg/4.5 font-lufga-preload text-center">
        <span>{contactUs}</span>
      </p>
      <nav aria-label="Footer navigation">
        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 xl:gap-16">
          {navLinks.map((value) => (
            <li key={value.id}>
              <Link
                href={value.links}
                className="text-base leading-6 xl:leading-9 font-medium font-lufga-preload text-white"
                aria-label={`Go to ${value.title}`}
              >
                <span>{value.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="flex gap-10 justify-center pt-8 xl:pt-13.5"
        role="list"
        aria-label="Social media links"
      >
        <Link href="https://facebook.com" aria-label="Visit our Facebook page">
          <Facebook className="text-white" aria-hidden="true" />
        </Link>
        <Link href="https://twitter.com" aria-label="Visit our Twitter page">
          <Twitter className="text-white" aria-hidden="true" />
        </Link>
        <Link
          href="https://instagram.com"
          aria-label="Visit our Instagram page"
        >
          <Instagram className="text-white" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </Container>
);

export default Footer;

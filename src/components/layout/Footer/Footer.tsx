import Link from "next/link";
import { FC } from "react";

import { Container, NextImageWithFallback, Facebook, Instagram, Twitter } from "@/components";
import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from "@/constants";

import { FooterProps } from "./types";

export const Footer: FC<FooterProps> = ({ anyDoubts, contactUs, logo, navLinks }) => (
  <Container
    as="footer"
    backgroundClassName="bg-police-blue"
    className="px-6 py-12.5 xl:px-0 xl:py-16"
    role="contentinfo"
  >
    <div className="mx-auto w-full max-w-171">
      <div>
        <Link aria-label={`${logo.title} homepage`} href={logo.link}>
          <NextImageWithFallback
            alt={logo.alt}
            className="mx-auto"
            height={54}
            src={logo.src}
            title={logo.alt}
            width={54}
          />
        </Link>
        <p className="font-lufga-preload pt-3 text-center text-xl font-semibold text-white xl:pt-3.5 xl:text-2xl/6">
          <span>{logo.title}</span>
        </p>
      </div>
      <p className="font-lufga-preload pt-8 pb-4 text-center text-sm/3.5 text-white/50 xl:pt-10 xl:text-lg/4.5">
        <span>{anyDoubts}</span>
      </p>
      <p className="font-lufga-preload pb-8 text-center text-sm/3.5 text-white/50 xl:pb-13.5 xl:text-lg/4.5">
        <span>{contactUs}</span>
      </p>
      <nav aria-label="Footer navigation">
        <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6 xl:gap-16">
          {navLinks.map((value) => (
            <li key={value.id}>
              <Link
                aria-label={`Go to ${value.title}`}
                className="font-lufga-preload rounded text-base leading-6 font-medium text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none xl:leading-9"
                href={value.links}
              >
                <span>{value.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        aria-label="Social media links"
        className="flex items-center justify-center gap-4 pt-8 xl:pt-13.5"
        role="list"
      >
        <Link
          aria-label="Visit our Facebook page"
          className="rounded p-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
          href={FACEBOOK_URL}
        >
          <Facebook aria-hidden="true" className="text-white" />
        </Link>
        <Link
          aria-label="Visit our Twitter page"
          className="rounded p-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
          href={TWITTER_URL}
        >
          <Twitter aria-hidden="true" className="text-white" />
        </Link>
        <Link
          aria-label="Visit our Instagram page"
          className="rounded p-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
          href={INSTAGRAM_URL}
        >
          <Instagram aria-hidden="true" className="text-white" />
        </Link>
      </div>
    </div>
  </Container>
);

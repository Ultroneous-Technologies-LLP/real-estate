"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { useMounted, useScreenSize } from "@/hooks";
import { BREAK_POINT_MD } from "@/constants";
import { Container, NextImageWithFallback } from "@/components/common";

import { HeaderProps } from "./types";
import { MobileMenu } from "./MobileMenu";

export const Header: FC<HeaderProps> = ({ button, logo, navLinks }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const mounted = useMounted();
  const { width } = useScreenSize();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  useEffect(() => {
    if (width < BREAK_POINT_MD || !isMenuOpen) return;
    setIsMenuOpen(false);
  }, [width, isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // header offset

      let currentSection: string | null = null;

      navLinks.forEach((link) => {
        const selector = link.links.startsWith("/") ? link.links.slice(1) : link.links;
        const section = document.querySelector(selector);
        if (section) {
          const { offsetTop, offsetHeight } = section as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = link.links;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-1/2 z-50 mx-auto w-full -translate-x-1/2 transition-colors duration-700 ease-in-out",
        {
          "bg-transparent": !scrolled,
          "bg-white/50 shadow-md backdrop-blur-[22px]": scrolled,
        }
      )}
      role="navigation"
      aria-label="Main Navigation"
    >
      <Container as="header" className="px-4 py-5 xl:px-27.5 xl:py-8">
        <div className="flex items-center justify-between">
          <Link href={logo.link}>
            <div className="flex items-center gap-4" aria-label={`Go to ${logo.title} homepage`}>
              <NextImageWithFallback
                src={logo.src}
                width={38}
                height={38}
                alt={logo.alt}
                title={logo.alt}
              />
              <p className="text-police-blue font-lufga-preload hidden text-xl/5 font-semibold md:block">
                <span>{logo.title}</span>
              </p>
            </div>
          </Link>
          <div className="hidden xl:block">
            <ul className="flex items-center gap-16" role="menubar">
              {navLinks.map((value) => {
                const isActive = activeSection === value.links;
                const showUnderline =
                  value.title.toLowerCase() === "home"
                    ? !activeSection || activeSection === value.links
                    : isActive;

                return (
                  <li key={value.id} role="menuitem" className="relative">
                    <Link
                      href={value.links}
                      className="font-lufga-preload text-police-blue text-base/9 font-medium transition-colors duration-300"
                    >
                      <span>{value.title}</span>
                    </Link>
                    {showUnderline && (
                      <span className="bg-police-blue absolute -bottom-1 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex w-full max-w-36 items-center gap-3 md:max-w-27.5 xl:max-w-37.5">
            <button
              className="bg-police-blue text-cultured font-lufga-preload hover:bg-cadet-grey w-full cursor-pointer rounded-[10px] px-4 py-3 text-base leading-normal 
              font-semibold uppercase transition-colors duration-500 ease-in-out md:px-5 xl:px-10 xl:py-1.5 xl:leading-9"
              type="button"
            >
              <span>{button.title}</span>
            </button>
            <button
              className="block w-full max-w-6.5 cursor-pointer space-y-1 md:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
              aria-controls="mobile-menu"
              aria-expanded={mounted ? isMenuOpen : undefined}
            >
              <span className="bg-police-blue mr-0 ml-auto block h-[2.7px] w-[14.4px] rounded-full" />
              <span className="bg-police-blue mx-auto block h-[2.7px] w-[14.4px] rounded-full" />
              <span className="bg-police-blue mr-auto ml-0 block h-[2.7px] w-[14.4px] rounded-full" />
            </button>
          </div>
        </div>
        <div className="mt-4 hidden justify-center md:flex xl:hidden">
          <ul className="flex items-center gap-16">
            {navLinks.map((value) => (
              <li key={value.id}>
                <Link
                  href={value.links}
                  className="font-lufga-preload text-police-blue text-base/9 font-medium"
                >
                  <span>{value.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <MobileMenu
        mounted={mounted}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
      />
    </nav>
  );
};

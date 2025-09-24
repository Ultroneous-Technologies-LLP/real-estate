"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { Container } from "@/components/common";
import useScreenSize from "@/hooks/useScreenSize";
import { BREAK_POINT_MD } from "@/constants/constants";

import { Cross } from "../icons";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ button, logo, navLinks }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <nav
      className={clsx(
        "w-full z-50 fixed top-0 left-1/2 -translate-x-1/2 mx-auto transition-colors duration-700 ease-in-out",
        {
          "bg-transparent": !scrolled,
          "bg-white/50 backdrop-blur-[22px] shadow-md": scrolled,
        }
      )}
    >
      <Container as="header" className="px-4 xl:px-27.5 py-2 xl:py-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex gap-4 items-center">
            <Link href={logo.link}>
              <Image
                src={logo.src}
                width={38}
                height={38}
                alt={logo.alt}
                title={logo.alt}
              />
            </Link>
            <p className="text-police-blue text-xl/5 font-semibold font-lufga-preload hidden md:block">
              <span>{logo.title}</span>
            </p>
          </div>
          <div className="hidden xl:block">
            <ul className="items-center flex gap-16">
              {navLinks.map((value) => (
                <li key={value.id}>
                  <Link
                    href={value.links}
                    className="text-base/9 font-medium font-lufga-preload text-police-blue"
                  >
                    <span>{value.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3 items-center max-w-36 md:max-w-27.5 xl:max-w-37.5 w-full">
            <button
              className="py-3 px-4 md:px-5 xl:py-1.5 xl:px-10 rounded-[10px] bg-police-blue text-[#F7F8F9] text-base leading-normal xl:leading-9 font-lufga-preload font-semibold uppercase w-full"
              type="button"
            >
              <span>{button.title}</span>
            </button>
            <button
              className="space-y-1 max-w-6.5 w-full block md:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <span className="w-[14.4px] h-[2.7px] bg-police-blue block rounded-full mr-0 ml-auto" />
              <span className="w-[14.4px] h-[2.7px] bg-police-blue block rounded-full mx-auto" />
              <span className="w-[14.4px] h-[2.7px] bg-police-blue block rounded-full mr-auto ml-0" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex xl:hidden mt-4 justify-center">
          <ul className="items-center flex gap-16">
            {navLinks.map((value) => (
              <li key={value.id}>
                <Link
                  href={value.links}
                  className="text-base/9 font-medium font-lufga-preload text-police-blue"
                >
                  <span>{value.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-72 bg-police-blue rounded-l-4xl transform transition-transform duration-500 ease-in-out z-50 pt-18 px-8",
          {
            "translate-x-0": isMenuOpen,
            "translate-x-full": !isMenuOpen,
          }
        )}
      >
        <div className="flex justify-end items-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            className="text-2xl font-bold text-white"
          >
            <Cross className="text-[#828F98]" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-16">
          {navLinks.map((value) => (
            <li key={value.id} className="space-y-6">
              <Link
                href={value.links}
                className="text-base/6 font-medium font-lufga-preload text-white tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {value.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

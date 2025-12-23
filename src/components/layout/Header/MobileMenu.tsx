"use client";

import clsx from "clsx";
import gsap from "gsap";
import Link from "next/link";
import { JSX, useEffect, useRef } from "react";

import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from "@/constants";
import { Cross, Facebook, Instagram, Twitter } from "@/components/icons";

import { MobileMenuProps } from "./types";

const TAB_INDEX_VISIBLE = 0;
const TAB_INDEX_HIDDEN = -1;
const MENU_OPEN_TIME_SCALE = 1;
const MENU_CLOSE_TIME_SCALE = 1.4;

export const MobileMenu = ({
  mounted,
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
}: MobileMenuProps): JSX.Element => {
  const tabIndexValue = mounted && isMenuOpen ? TAB_INDEX_VISIBLE : TAB_INDEX_HIDDEN;

  const menuRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const socialRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!menuRef.current) {
      return;
    }

    tl.current = gsap.timeline({ paused: true });

    tl.current.to(menuRef.current, {
      x: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    tl.current.from(
      linksRef.current?.children || [],
      {
        x: 80,
        opacity: 0,
        duration: 0.35,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.25"
    );

    tl.current.from(
      socialRef.current?.children || [],
      {
        x: 50,
        opacity: 0,
        duration: 0.25,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.15"
    );

    tl.current.from(
      closeRef.current,
      {
        opacity: 0,
        duration: 0.2,
      },
      "-=0.1"
    );
  }, []);

  useEffect(() => {
    if (!tl.current) {
      return;
    }

    if (isMenuOpen) {
      tl.current.timeScale(MENU_OPEN_TIME_SCALE).play();
    } else {
      tl.current.timeScale(MENU_CLOSE_TIME_SCALE).reverse();
    }
  }, [isMenuOpen]);

  return (
    <div
      aria-hidden={mounted ? !isMenuOpen : true}
      aria-label="Mobile Navigation Menu"
      className={clsx(
        "bg-police-blue fixed top-0 right-0 z-50 h-screen w-72 translate-x-full rounded-l-4xl pt-8.5 pr-5 pb-12 pl-8"
      )}
      ref={menuRef}
      role="menu"
    >
      <div className="flex items-center justify-end">
        <button
          aria-label="Close Menu"
          className="text-2xl font-bold text-white"
          onClick={() => setIsMenuOpen(false)}
          ref={closeRef}
          tabIndex={tabIndexValue}
        >
          <Cross className="cursor-pointer text-[#828F98]" />
        </button>
      </div>

      <div className="flex h-11/12 flex-col justify-between">
        <ul className="mt-16 flex flex-col gap-6" ref={linksRef}>
          {navLinks.map((value) => (
            <li key={value.id}>
              <Link
                className="font-lufga-preload text-base/6 font-medium tracking-widest text-white"
                href={value.links}
                onClick={() => setIsMenuOpen(false)}
                tabIndex={tabIndexValue}
              >
                {value.title}
              </Link>
            </li>
          ))}
        </ul>

        <div
          aria-label="Social media links"
          className="flex justify-start gap-10"
          ref={socialRef}
          role="list"
        >
          <Link href={FACEBOOK_URL} tabIndex={tabIndexValue}>
            <Facebook className="text-white" />
          </Link>
          <Link href={TWITTER_URL} tabIndex={tabIndexValue}>
            <Twitter className="text-white" />
          </Link>
          <Link href={INSTAGRAM_URL} tabIndex={tabIndexValue}>
            <Instagram className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

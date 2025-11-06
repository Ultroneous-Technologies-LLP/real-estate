"use client";

import clsx from "clsx";
import Link from "next/link";
import { forwardRef } from "react";

import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from "@/constants";
import { Cross, Facebook, Instagram, Twitter } from "@/components/icons";

import { MobileMenuProps } from "./types";

export const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ mounted, isMenuOpen, setIsMenuOpen, navLinks }, ref) => {
    return (
      <div
        ref={ref}
        id="mobile-menu"
        role="menu"
        aria-label="Mobile Navigation Menu"
        aria-hidden={mounted ? !isMenuOpen : true}
        className={clsx(
          "bg-police-blue fixed top-0 right-0 z-50 h-screen w-72 transform rounded-l-4xl px-8 pt-18 pb-12 transition-transform duration-500 ease-in-out",
          {
            "translate-x-0": isMenuOpen,
            "translate-x-full": !isMenuOpen,
          }
        )}
      >
        <div className="flex items-center justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            className="text-2xl font-bold text-white"
            tabIndex={mounted ? (isMenuOpen ? 0 : -1) : -1}
          >
            <Cross className="cursor-pointer text-[#828F98]" />
          </button>
        </div>

        <div className="flex h-11/12 flex-col justify-between">
          <ul className="mt-16 flex flex-col gap-6">
            {navLinks.map((value) => (
              <li key={value.id} role="none" className="space-y-6">
                <Link
                  href={value.links}
                  role="menuitem"
                  className="font-lufga-preload text-base/6 font-medium tracking-widest text-white"
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={mounted ? (isMenuOpen ? 0 : -1) : -1}
                >
                  {value.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-start gap-10" role="list" aria-label="Social media links">
            <Link
              href={FACEBOOK_URL}
              aria-label="Visit our Facebook page"
              className="rounded focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              tabIndex={mounted ? (isMenuOpen ? 0 : -1) : -1}
            >
              <Facebook aria-hidden="true" className="text-white" />
            </Link>
            <Link
              href={TWITTER_URL}
              aria-label="Visit our Twitter page"
              className="rounded focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              tabIndex={mounted ? (isMenuOpen ? 0 : -1) : -1}
            >
              <Twitter aria-hidden="true" className="text-white" />
            </Link>
            <Link
              href={INSTAGRAM_URL}
              aria-label="Visit our Instagram page"
              className="rounded focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              tabIndex={mounted ? (isMenuOpen ? 0 : -1) : -1}
            >
              <Instagram aria-hidden="true" className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

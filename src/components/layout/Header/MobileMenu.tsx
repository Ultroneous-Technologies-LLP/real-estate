"use client";

import clsx from "clsx";
import { FC } from "react";
import Link from "next/link";

import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from "@/constants";
import { Cross, Facebook, Instagram, Twitter } from "@/components/icons";

import { MobileMenuProps } from "./types";

export const MobileMenu: FC<MobileMenuProps> = ({
  mounted,
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
}) => {
  return (
    <div
      id="mobile-menu"
      role="menu"
      aria-label="Mobile Navigation Menu"
      aria-hidden={mounted ? !isMenuOpen : true}
      className={clsx(
        "fixed top-0 right-0 h-screen w-72 bg-police-blue rounded-l-4xl transform transition-transform duration-500 ease-in-out z-50 pt-18 pb-12 px-8",
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
          tabIndex={mounted ? (isMenuOpen ? 0 : -1) : -1}
        >
          <Cross className="text-[#828F98]" />
        </button>
      </div>

      <div className="flex flex-col justify-between h-11/12">
        <ul className="flex flex-col gap-6 mt-16">
          {navLinks.map((value) => (
            <li key={value.id} role="none" className="space-y-6">
              <Link
                href={value.links}
                role="menuitem"
                className="text-base/6 font-medium font-lufga-preload text-white tracking-widest"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={mounted ? (isMenuOpen ? 0 : -1) : -1}
              >
                {value.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="flex gap-10 justify-start"
          role="list"
          aria-label="Social media links"
        >
          <Link
            href={FACEBOOK_URL}
            aria-label="Visit our Facebook page"
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
            tabIndex={mounted ? (isMenuOpen ? 0 : -1) : -1}
          >
            <Facebook aria-hidden="true" className="text-white" />
          </Link>
          <Link
            href={TWITTER_URL}
            aria-label="Visit our Twitter page"
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
            tabIndex={mounted ? (isMenuOpen ? 0 : -1) : -1}
          >
            <Twitter aria-hidden="true" className="text-white" />
          </Link>
          <Link
            href={INSTAGRAM_URL}
            aria-label="Visit our Instagram page"
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
            tabIndex={mounted ? (isMenuOpen ? 0 : -1) : -1}
          >
            <Instagram aria-hidden="true" className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

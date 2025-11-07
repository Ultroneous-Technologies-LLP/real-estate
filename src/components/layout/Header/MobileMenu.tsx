"use client";

import clsx from "clsx";
import Link from "next/link";
import { forwardRef } from "react";

import { Cross, Facebook, Instagram, Twitter } from "@/components/icons";
import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from "@/constants";

import { MobileMenuProps } from "./types";

const TAB_INDEX_VISIBLE = 0;
const TAB_INDEX_HIDDEN = -1;

export const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ mounted, isMenuOpen, setIsMenuOpen, navLinks }, ref) => {
    const tabIndexValue = mounted && isMenuOpen ? TAB_INDEX_VISIBLE : TAB_INDEX_HIDDEN;

    return (
      <div
        aria-hidden={mounted ? !isMenuOpen : true}
        aria-label="Mobile Navigation Menu"
        className={clsx(
          "bg-police-blue fixed top-0 right-0 z-50 h-screen w-72 transform rounded-l-4xl px-8 pt-18 pb-12 transition-transform duration-500 ease-in-out",
          {
            "translate-x-0": isMenuOpen,
            "translate-x-full": !isMenuOpen,
          }
        )}
        id="mobile-menu"
        ref={ref}
        role="menu"
      >
        <div className="flex items-center justify-end">
          <button
            aria-label="Close Menu"
            className="text-2xl font-bold text-white"
            onClick={() => setIsMenuOpen(false)}
            tabIndex={tabIndexValue}
          >
            <Cross className="cursor-pointer text-[#828F98]" />
          </button>
        </div>

        <div className="flex h-11/12 flex-col justify-between">
          <ul className="mt-16 flex flex-col gap-6">
            {navLinks.map((value) => (
              <li className="space-y-6" key={value.id} role="none">
                <Link
                  className="font-lufga-preload text-base/6 font-medium tracking-widest text-white"
                  href={value.links}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  tabIndex={tabIndexValue}
                >
                  {value.title}
                </Link>
              </li>
            ))}
          </ul>

          <div aria-label="Social media links" className="flex justify-start gap-10" role="list">
            <Link
              aria-label="Visit our Facebook page"
              className="rounded focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              href={FACEBOOK_URL}
              tabIndex={tabIndexValue}
            >
              <Facebook aria-hidden="true" className="text-white" />
            </Link>

            <Link
              aria-label="Visit our Twitter page"
              className="rounded focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              href={TWITTER_URL}
              tabIndex={tabIndexValue}
            >
              <Twitter aria-hidden="true" className="text-white" />
            </Link>

            <Link
              aria-label="Visit our Instagram page"
              className="rounded focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              href={INSTAGRAM_URL}
              tabIndex={tabIndexValue}
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

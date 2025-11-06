"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef, useState } from "react";

import { LOCATION_OPTIONS } from "@/constants";
import { useClickOutside } from "@/hooks";

import { DropdownProps } from "./types";

export const Dropdown: FC<DropdownProps> = ({ selectedCity, setSelectedCity }) => {
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsLocationOpen(false));

  return (
    <div className="relative ml-4" ref={dropdownRef}>
      <button
        aria-controls="city-list"
        aria-expanded={isLocationOpen}
        aria-haspopup="listbox"
        className="flex cursor-pointer items-center gap-5"
        onClick={() => setIsLocationOpen((prev) => !prev)}
        type="button"
      >
        <span className="md:text-32/12 font-lufga-preload text-police-blue text-2xl/9 font-semibold xl:text-5xl/12">
          {selectedCity}
        </span>
        <Image
          alt=""
          className={clsx("cursor-pointer transition-transform duration-300", {
            "rotate-180": isLocationOpen,
            "rotate-0": !isLocationOpen,
          })}
          height={11}
          role="presentation"
          src="/assets/icons/dropdown.svg"
          width={15}
        />
      </button>
      {isLocationOpen && (
        <ul
          className="absolute right-0 left-1/2 z-10 mx-auto mt-2 h-68 w-75 -translate-x-1/2 rounded-4xl border border-gray-200 bg-white p-4 shadow-[0_0_10px_0_#0000000F]"
          id="city-list"
          role="listbox"
        >
          {LOCATION_OPTIONS.map((loc) => (
            <li
              aria-selected={selectedCity === loc}
              className="text-police-blue font-lufga-preload flex cursor-pointer items-center justify-between p-3 text-base/6 hover:bg-gray-100"
              key={loc}
              onClick={() => {
                setSelectedCity(loc);
                setIsLocationOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedCity(loc);
                  setIsLocationOpen(false);
                }
              }}
              role="option"
              tabIndex={0}
            >
              {loc}
              <Image
                alt="arrow"
                height={20}
                role="presentation"
                src="/assets/icons/arrow.svg"
                width={20}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

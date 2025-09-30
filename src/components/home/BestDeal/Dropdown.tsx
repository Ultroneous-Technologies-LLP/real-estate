"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef, useState } from "react";

import { useClickOutside } from "@/hooks";
import { LOCATION_OPTIONS } from "@/constants";

import { DropdownProps } from "./types";

export const Dropdown: FC<DropdownProps> = ({
  selectedCity,
  setSelectedCity,
}) => {
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsLocationOpen(false));

  return (
    <div className="ml-4 relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex gap-5 items-center cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={isLocationOpen}
        aria-controls="city-list"
        onClick={() => setIsLocationOpen((prev) => !prev)}
      >
        <span className="text-2xl/9 md:text-32/12 xl:text-5xl/12 font-lufga-preload font-semibold text-police-blue">
          {selectedCity}
        </span>
        <Image
          src="/assets/icons/dropdown.svg"
          width={15}
          height={11}
          alt=""
          role="presentation"
          className={clsx("cursor-pointer transition-transform duration-300", {
            "rotate-180": isLocationOpen,
            "rotate-0": !isLocationOpen,
          })}
        />
      </button>
      {isLocationOpen && (
        <ul
          id="city-list"
          className="absolute right-0 mt-2 bg-white mx-auto left-1/2 -translate-x-1/2 w-75 h-68 rounded-4xl shadow-[0_0_10px_0_#0000000F] border border-gray-200 z-10 p-4"
          role="listbox"
        >
          {LOCATION_OPTIONS.map((loc) => (
            <li
              key={loc}
              role="option"
              aria-selected={selectedCity === loc}
              tabIndex={0}
              className="p-3 cursor-pointer text-police-blue font-lufga-preload hover:bg-gray-100 text-base/6 flex justify-between items-center"
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
            >
              {loc}
              <Image
                src="/assets/icons/arrow.svg"
                width={20}
                height={20}
                alt="arrow"
                role="presentation"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

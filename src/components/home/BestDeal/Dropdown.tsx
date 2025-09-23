"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useState } from "react";

import { DropdownProps } from "./types";
import { LOCATION_OPTIONS } from "./constants";

const Dropdown: FC<DropdownProps> = ({ selectedCity, setSelectedCity }) => {
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);

  return (
    <div className="ml-4 relative">
      <div
        className="flex gap-5 items-center cursor-pointer"
        onClick={() => setIsLocationOpen((prev) => !prev)}
      >
        <span className="text-2xl/9 md:text-[32px]/12 xl:text-5xl/12 font-lufga-preload font-semibold text-police-blue">
          {selectedCity}
        </span>
        <Image
          src="/assets/icons/dropdown.svg"
          width={15}
          height={11}
          alt="dropdown"
          className={clsx("cursor-pointer transition-transform duration-300", {
            "rotate-180": isLocationOpen,
            "rotate-0": !isLocationOpen,
          })}
        />
      </div>
      {isLocationOpen && (
        <ul className="absolute right-0 mt-2 bg-white mx-auto left-1/2 -translate-x-1/2 w-75 h-68 rounded-4xl shadow-[0_0_10px_0_#0000000F] border border-gray-200 z-10 p-4">
          {LOCATION_OPTIONS.map((loc) => (
            <li
              key={loc}
              className="p-3 cursor-pointer text-police-blue font-lufga-preload hover:bg-gray-100 text-base/6 flex justify-between items-center"
              onClick={() => {
                setSelectedCity(loc);
                setIsLocationOpen(false);
              }}
            >
              {loc}
              <Image
                src="/assets/icons/arrow.svg"
                width={20}
                height={20}
                alt="arrow"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

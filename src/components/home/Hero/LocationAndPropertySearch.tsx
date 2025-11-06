"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

import { Search } from "@/components/icons";
import { LOCATION_OPTIONS } from "@/constants";
import { BREAK_POINT_Mobile } from "@/constants";
import { useClickOutside, useMounted, useScreenSize } from "@/hooks";

import { HeroEnum } from "./enum";

export const LocationAndPropertySearch = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [location, setLocation] = useState("");
  const mounted = useMounted();

  const { width } = useScreenSize();
  const isMobile = mounted && width < BREAK_POINT_Mobile;

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsLocationOpen(false));

  const filteredOptions = LOCATION_OPTIONS.filter((city) =>
    city.toLowerCase().includes(location.toLowerCase())
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    if (!isLocationOpen) setIsLocationOpen(true);
  };

  const handleOnClick = (loc: string) => {
    setLocation(loc);
    setIsLocationOpen(false);
  };

  return (
    <div
      className={`absolute left-1/2 mt-6 flex w-full max-w-89.5 -translate-x-1/2 flex-col justify-between rounded-2xl bg-white/70 p-6 backdrop-blur-[2px]
      md:max-w-180 md:flex-row md:backdrop-blur-none
      xl:static xl:left-[unset] xl:mt-18.5 xl:-translate-x-[unset] xl:bg-white xl:px-6 xl:py-4.5 xl:shadow-[0_4px_4px_0_#D4D4D440]`}
    >
      <div className="flex w-full flex-col md:max-w-130 md:flex-row xl:max-w-110">
        <div
          ref={dropdownRef}
          role="combobox"
          aria-expanded={isLocationOpen}
          aria-controls="location-listbox"
          aria-haspopup="listbox"
          className="md:border-cadet-blue-crayola relative mb-4 w-full pt-1 md:mb-0 md:max-w-65.5 md:border-r md:pr-7.5 xl:max-w-46"
        >
          <div
            className="flex items-center gap-5 pb-2.5"
            onClick={() => setIsLocationOpen(!isLocationOpen)}
          >
            <label
              className="font-lufga-preload text-police-blue block cursor-pointer text-lg/4.5"
              htmlFor="location"
            >
              {HeroEnum.LOCATION}
            </label>
            {mounted && (
              <Image
                src="/assets/icons/dropdown.svg"
                width={7}
                height={5}
                alt="dropdown-close"
                title="dropdown-close"
                className={`cursor-pointer transition-transform duration-300 ${
                  isLocationOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            )}
          </div>
          <input
            id="location"
            className="w-full max-w-39 text-sm/3.5 placeholder:text-[#A7B0B7] focus-within:outline-0"
            placeholder={HeroEnum.WERE_ARE_YOU_GOING}
            value={location || ""}
            onChange={handleInputChange}
            autoComplete="off"
            aria-autocomplete="list"
            aria-controls="location-listbox"
            aria-activedescendant={isLocationOpen ? location : undefined}
            onFocus={() => setIsLocationOpen(true)}
          />
          {mounted && isLocationOpen && (
            <ul
              id="location-listbox"
              role="listbox"
              className={`absolute z-10 mt-3 w-full rounded-lg border border-gray-200 bg-white shadow-md ${
                isLocationOpen ? "block" : "hidden"
              }`}
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((loc) => (
                  <li
                    key={loc}
                    role="option"
                    aria-selected={location === loc}
                    className="cursor-pointer px-3 py-2 hover:rounded-lg hover:bg-gray-100"
                    onClick={() => handleOnClick(loc)}
                  >
                    {loc}
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-xs text-gray-500">{HeroEnum.NO_MATCHING}</li>
              )}
            </ul>
          )}
        </div>
        <div className="w-full max-w-65 pt-1 md:pl-7.5">
          <label
            className="font-lufga-preload text-police-blue block pb-2.5 text-lg/4.5"
            htmlFor="propertyType"
          >
            {HeroEnum.PROPERTY_TYPE}
          </label>
          <input
            id="propertyType"
            placeholder="Search For Flat, Bungalow or Villa"
            className="w-full text-sm/3.5 placeholder:text-[#A7B0B7] focus-within:outline-0"
            defaultValue=""
            autoComplete="off"
          />
        </div>
      </div>
      <div className="bg-police-blue group hover:bg-cadet-grey hidden size-14 cursor-pointer items-center justify-center rounded-full duration-300 ease-in-out md:flex">
        <Search className="group-hover:text-cultured text-white" />
      </div>
      {isMobile && (
        <button
          type="button"
          aria-label="search-button"
          className="bg-police-blue font-lufga-preload text-cultured mt-4 w-fit rounded-xl px-4 py-3 text-base/normal font-semibold tracking-widest"
        >
          {HeroEnum.BUTTONTEXT}
        </button>
      )}
    </div>
  );
};

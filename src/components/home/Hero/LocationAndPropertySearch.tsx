"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

import { Search } from "@/components/icons";
import { LOCATION_OPTIONS } from "@/constants";
import { BREAK_POINT_Mobile } from "@/constants";

import { HeroEnum } from "./hero";
import { useClickOutside, useMounted, useScreenSize } from "@/hooks";

const LocationAndPropertySearch = () => {
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
      className={`max-w-89.5 w-full left-1/2 -translate-x-1/2 absolute bg-white/70 backdrop-blur-[2px] rounded-2xl p-6 mt-6 flex flex-col justify-between
      md:backdrop-blur-none md:max-w-180 md:flex-row
      xl:left-[unset] xl:-translate-x-[unset] xl:static xl:bg-white xl:shadow-[0_4px_4px_0_#D4D4D440] xl:px-6 xl:mt-18.5 xl:py-4.5`}
    >
      <div className="flex flex-col md:flex-row md:max-w-130 xl:max-w-110 w-full">
        <div
          ref={dropdownRef}
          role="combobox"
          aria-expanded={isLocationOpen}
          aria-controls="location-listbox"
          aria-haspopup="listbox"
          className="md:max-w-65.5 xl:max-w-46 w-full md:pr-7.5 md:border-r md:border-[#A8B1B8] pt-1 relative mb-4 md:mb-0"
        >
          <div
            className="flex gap-5 items-center pb-2.5"
            onClick={() => setIsLocationOpen(!isLocationOpen)}
          >
            <label
              className="text-lg/4.5 font-lufga-preload text-police-blue block cursor-pointer"
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
            className="text-sm/3.5 max-w-39 w-full placeholder:text-[#A7B0B7] focus-within:outline-0"
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
              className={`absolute z-10 mt-3 bg-white shadow-md rounded-lg w-full border border-gray-200 ${
                isLocationOpen ? "block" : "hidden"
              }`}
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((loc) => (
                  <li
                    key={loc}
                    role="option"
                    aria-selected={location === loc}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg"
                    onClick={() => handleOnClick(loc)}
                  >
                    {loc}
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500 text-xs">
                  {HeroEnum.NO_MATCHING}
                </li>
              )}
            </ul>
          )}
        </div>
        <div className="md:pl-7.5 max-w-65 w-full pt-1">
          <label
            className="text-lg/4.5 font-lufga-preload text-police-blue block pb-2.5"
            htmlFor="propertyType"
          >
            {HeroEnum.PROPERTY_TYPE}
          </label>
          <input
            id="propertyType"
            placeholder="Search For Flat, Bungalow or Villa"
            className="text-sm/3.5 w-full placeholder:text-[#A7B0B7] focus-within:outline-0"
            defaultValue=""
            autoComplete="off"
          />
        </div>
      </div>
      <div className="hidden md:flex rounded-full justify-center items-center bg-police-blue size-14 cursor-pointer group hover:bg-[#97A4AE] duration-300 ease-in-out">
        <Search className="text-white group-hover:text-[#F7F8F9]" />
      </div>
      {isMobile && (
        <button
          type="button"
          aria-label="search-button"
          className="rounded-xl bg-police-blue py-3 px-4 font-lufga-preload font-semibold text-base/normal tracking-widest text-[#F7F8F9] w-fit mt-4"
        >
          {HeroEnum.BUTTONTEXT}
        </button>
      )}
    </div>
  );
};

export default LocationAndPropertySearch;

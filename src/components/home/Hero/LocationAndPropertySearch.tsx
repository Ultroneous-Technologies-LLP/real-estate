"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

import { Search } from "@/components/icons";
import { locationOptions } from "./constants";
import { HeroEnum } from "./hero";

import useClickOutside from "@/hooks/useClickOutside";

const LocationAndPropertySearch = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [location, setLocation] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsLocationOpen(false));

  const filteredOptions = locationOptions.filter((city) =>
    city.toLowerCase().includes(location.toLowerCase())
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    if (!isLocationOpen) setIsLocationOpen(true);
  };

  return (
    <div
      className="max-w-89.5 md:max-w-180 left-1/2 xl:left-[unset] -translate-x-1/2 xl:-translate-x-[unset] w-full absolute xl:static bg-white/70 backdrop-blur-[2px] md:backdrop-blur-none xl:bg-white xl:shadow-[0_4px_4px_0_#D4D4D440] rounded-2xl p-6 xl:px-6 mt-6 xl:mt-18.5 xl:py-4.5 
    flex flex-col md:flex-row justify-between"
    >
      <div className="flex flex-col md:flex-row md:max-w-130 xl:max-w-110 w-full">
        <div
          ref={dropdownRef}
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
          </div>
          <input
            id="location"
            className="text-sm/3.5 max-w-39 w-full placeholder:text-[#A7B0B7] focus-within:outline-0"
            placeholder="Where are you Going ?"
            value={location}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {isLocationOpen && (
            <ul className="absolute z-10 mt-3 bg-white shadow-md rounded-lg w-full border border-gray-200">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((loc) => (
                  <li
                    key={loc}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg"
                    onClick={() => {
                      setLocation(loc);
                      setIsLocationOpen(false);
                    }}
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
          />
        </div>
      </div>
      <div className="hidden md:flex rounded-full justify-center items-center bg-police-blue size-14 cursor-pointer">
        <Search className="text-white" />
      </div>
      <button
        type="button"
        aria-label=""
        className="rounded-xl bg-[#3F5260] py-3 px-4 font-lufga-preload font-semibold text-base/normal tracking-widest text-[#F7F8F9] w-fit mt-4 md:hidden"
      >
        {HeroEnum.BUTTONTEXT}
      </button>
    </div>
  );
};

export default LocationAndPropertySearch;

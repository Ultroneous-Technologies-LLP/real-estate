"use client";

import { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import useMounted from "@/hooks/useMounted";
import useScreenSize from "@/hooks/useScreenSize";
import { BREAK_POINT_LG } from "@/constants/constants";

import { TABS } from "../constants";
import DesktopTab from "./DesktopTab";
import MobileSlider from "./MobileSlider";
import { HorizontalTabProps, TabKey } from "../types";

const HorizontalTab: FC<HorizontalTabProps> = ({ tabData, currentCity }) => {
  const [activeTab, setActiveTab] = useState<TabKey>("Flat");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);

  const mounted = useMounted();
  const { width } = useScreenSize();
  const isMobile = mounted && width < BREAK_POINT_LG;

  useEffect(() => {
    if (!tabsRef.current) return;

    const currentIndex = TABS.indexOf(activeTab);
    const tabButtons = tabsRef.current.children;
    const activeButton = tabButtons[currentIndex] as HTMLElement;

    if (!activeButton) return;

    setUnderlineStyle({
      left: activeButton.offsetLeft,
      width: activeButton.offsetWidth,
    });
  }, [activeTab]);

  const currentItems = tabData[currentCity][activeTab];

  return (
    <div className="flex flex-col relative pt-8 xl:pt-20">
      <div
        ref={tabsRef}
        className="flex gap-2 xl:gap-32 justify-center relative pr-4 md:pr-6 xl:pr-0"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "text-xl/7.5 xl:text-3xl/6.5 font-lufga-preload transition-colors duration-700 ease-in-out cursor-pointer p-4 md:px-10 md:py-4 xl:px-0 xl:pt-0 xl:pb-4",
              {
                "text-[#3F5260]": activeTab === tab,
                "text-[#A8B1B8]": activeTab !== tab,
              }
            )}
          >
            {tab}
          </button>
        ))}
        <span
          className="absolute bottom-0 h-1 bg-[#A8B1B8] transition-all duration-300 ease-in-out"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>
      {isMobile ? (
        <MobileSlider items={currentItems} />
      ) : (
        <DesktopTab items={currentItems} />
      )}
    </div>
  );
};

export default HorizontalTab;

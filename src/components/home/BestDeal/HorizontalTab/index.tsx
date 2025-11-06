"use client";

import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";

import { BREAK_POINT_LG } from "@/constants";
import { useMounted, useScreenSize } from "@/hooks";

import { TabKey } from "../types";
import { TABS } from "../constants";
import { DesktopTab } from "./DesktopTab";
import { HorizontalTabProps } from "./types";
import { MobileSlider } from "./MobileSlider";

export const HorizontalTab: FC<HorizontalTabProps> = ({ tabData, currentCity }) => {
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
    <div className="relative flex flex-col pt-8 xl:pt-20">
      <div
        ref={tabsRef}
        className="relative flex justify-center gap-2 pr-4 md:pr-6 xl:gap-32 xl:pr-0"
        role="tablist"
        aria-label="Property categories"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`tabpanel-${tab}`}
            id={`tab-${tab}`}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "font-lufga-preload cursor-pointer p-4 text-xl/7.5 transition-colors duration-700 ease-in-out md:px-10 md:py-4 xl:px-0 xl:pt-0 xl:pb-4 xl:text-3xl/6.5",
              {
                "text-[#3F5260]": activeTab === tab,
                "text-cadet-blue-crayola": activeTab !== tab,
              }
            )}
          >
            {tab}
          </button>
        ))}
        <span
          className="bg-cadet-blue-crayola absolute bottom-0 h-1 transition-all duration-300 ease-in-out"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>

      <div id={`tabpanel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
        {isMobile ? <MobileSlider items={currentItems} /> : <DesktopTab items={currentItems} />}
      </div>
    </div>
  );
};

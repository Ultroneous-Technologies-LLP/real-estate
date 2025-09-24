"use client";

import { FC, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import useMounted from "@/hooks/useMounted";
import useScreenSize from "@/hooks/useScreenSize";
import { BREAK_POINT_LG } from "@/constants/constants";

import Card from "./Card";
import { DiscoverExperiencesSliderProps } from "./types";

const DiscoverExperiencesSlider: FC<DiscoverExperiencesSliderProps> = ({
  data,
}) => {
  const mounted = useMounted();
  const { width } = useScreenSize();
  const isDesktop = width >= BREAK_POINT_LG;

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: "auto",
      spacing: 16,
    },
  });

  useEffect(() => {
    if (!isDesktop) slider.current?.update();
  }, [isDesktop, slider]);

  if (!mounted) return null;

  return (
    <div className="w-full pt-6 xl:pt-26">
      {isDesktop ? (
        <div className="grid grid-cols-3 gap-10 [@media(min-width:1380px)]:gap-21.5">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              alt={item.alt}
              src={item.src}
            />
          ))}
        </div>
      ) : (
        <div ref={sliderRef} className="keen-slider">
          {data.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide flex-shrink-0"
              style={{ width: "282px" }}
            >
              <Card title={item.title} alt={item.alt} src={item.src} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiscoverExperiencesSlider;

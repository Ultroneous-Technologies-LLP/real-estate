import clsx from "clsx";
import React, { FC } from "react";

import { Container, NextImageWithFallback } from "@/components/common";

import { GoingOnTripProps } from "./types";

const LENGTH_NUMBER_START = 1;

export const GoingOnTrip: FC<GoingOnTripProps> = ({ borderImg, guides, trip, yourStay }) => (
  <Container
    aria-labelledby="going-on-trip-title"
    className="px-4 pt-20 xl:px-0 xl:pt-37.5"
    id="about-us"
  >
    <h2
      className="font-lufga-preload text-police-blue flex flex-col gap-3 text-center text-2xl/9 xl:gap-4 xl:pb-6.5 xl:text-5xl/12"
      id="going-on-trip-title"
    >
      <span className="block">{trip}</span>
      <span className="block font-semibold">{yourStay}</span>
    </h2>
    <div
      aria-label="Trip guides"
      className="flex flex-col justify-between space-y-3 pt-8 md:flex-row md:pt-12 xl:px-27 xl:pt-31.5"
      role="list"
    >
      {guides.map((value, index) => (
        <React.Fragment key={value.id}>
          <article
            className={clsx(
              "flex w-full flex-row gap-3 text-left md:flex-col md:gap-0 md:text-center",
              index === guides.length - LENGTH_NUMBER_START
                ? "md:max-w-42.5 xl:max-w-75"
                : "md:max-w-42.5 xl:max-w-62.5"
            )}
            role="listitem"
          >
            <figure className="h-6 w-6 md:mx-auto xl:h-full xl:max-h-22.5 xl:w-auto" tabIndex={0}>
              <NextImageWithFallback
                alt={value.alt}
                className="size-full"
                height={value.height}
                src={value.src}
                title={value.alt}
                width={value.width}
              />
            </figure>
            <div>
              <h3 className="font-lufga-preload text-police-blue pb-1 text-base/6 font-semibold md:pt-3 xl:pt-10.5 xl:pb-4 xl:text-[22px]/6">
                <span>{value.title}</span>
              </h3>
              <p
                className={clsx(
                  "font-lufga text-police-blue w-full text-xs/4.5 xl:text-lg/6.5",
                  index === guides.length - LENGTH_NUMBER_START ? "xl:max-w-75" : "xl:max-w-62.5"
                )}
              >
                <span>{value.description}</span>
              </p>
            </div>
          </article>
          {index < guides.length - LENGTH_NUMBER_START && (
            <div aria-hidden="true" className="hidden md:block xl:pt-5">
              <NextImageWithFallback
                alt={borderImg.alt}
                className="mx-auto h-1.5 w-20.5 xl:h-2.5 xl:w-43.5"
                height={11}
                src={borderImg.src}
                title={value.alt}
                width={174}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </Container>
);

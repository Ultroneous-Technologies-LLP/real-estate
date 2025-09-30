import clsx from "clsx";
import React, { FC } from "react";
import Image from "next/image";

import { Container } from "@/components/common";
import { GoingOnTripProps } from "./types";

export const GoingOnTrip: FC<GoingOnTripProps> = ({
  borderImg,
  guides,
  trip,
  yourStay,
}) => (
  <Container
    className="px-4 xl:px-0 pt-20 xl:pt-37.5"
    id="about-us"
    aria-labelledby="going-on-trip-title"
  >
    <h2
      id="going-on-trip-title"
      className="text-2xl/9 xl:text-5xl/12 font-lufga-preload flex flex-col gap-3 xl:gap-4 text-police-blue xl:pb-6.5 text-center"
    >
      <span className="block">{trip}</span>
      <span className="block font-semibold">{yourStay}</span>
    </h2>
    <div
      className="pt-8 md:pt-12 xl:px-27 xl:pt-31.5 flex flex-col md:flex-row justify-between space-y-3"
      role="list"
      aria-label="Trip guides"
    >
      {guides.map((value, index) => (
        <React.Fragment key={value.id}>
          <article
            className={clsx(
              "text-left md:text-center w-full flex flex-row gap-3 md:flex-col md:gap-0",
              index === guides.length - 1
                ? "md:max-w-42.5 xl:max-w-75"
                : "md:max-w-42.5 xl:max-w-62.5"
            )}
            role="listitem"
          >
            <figure
              className="xl:max-h-22.5 xl:h-full w-6 h-6 xl:w-auto md:mx-auto"
              tabIndex={0}
            >
              <Image
                src={value.src}
                width={value.width}
                height={value.height}
                alt={value.alt}
                title={value.alt}
                className="size-full"
              />
            </figure>
            <div>
              <h3 className="font-lufga-preload font-semibold text-base/6 xl:text-[22px]/6 text-police-blue md:pt-3 xl:pt-10.5 pb-1 xl:pb-4">
                <span>{value.title}</span>
              </h3>
              <p
                className={clsx(
                  "font-lufga text-xs/4.5 xl:text-lg/6.5 text-police-blue w-full",
                  index === guides.length - 1 ? "xl:max-w-75" : "xl:max-w-62.5"
                )}
              >
                <span>{value.description}</span>
              </p>
            </div>
          </article>
          {index < guides.length - 1 && (
            <div className="xl:pt-5 hidden md:block" aria-hidden="true">
              <Image
                src={borderImg.src}
                alt={borderImg.alt}
                title={value.alt}
                width={174}
                height={11}
                className="w-20.5 h-1.5 xl:w-43.5 xl:h-2.5 mx-auto"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </Container>
);

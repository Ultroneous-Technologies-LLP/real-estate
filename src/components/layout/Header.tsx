import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Container } from "@/components/common";

import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ data }) => {
  return (
    <nav className="w-full z-50 fixed top-4 xl:top-11 left-1/2 -translate-x-1/2 mx-auto max-w-360 bg-cadet-blue/15 px-4 xl:px-27.5 py-2">
      <Container as="header">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Link href={data.logo.link}>
              <Image
                src={data.logo.src}
                width={38}
                height={38}
                alt={data.logo.alt}
                title={data.logo.alt}
              />
            </Link>
            <p className="text-police-blue text-xl/5 font-semibold font-lufga-preload hidden md:block">
              <span>{data.logo.title}</span>
            </p>
          </div>
          <div className="hidden xl:block">
            <ul className="items-center flex gap-16">
              {data.navLinks.map((value) => (
                <li key={value.id}>
                  <Link
                    href={value.links}
                    className="text-base/9 font-medium font-lufga-preload text-police-blue"
                  >
                    <span>{value.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3 items-center max-w-36 md:max-w-27.5 xl:max-w-37.5 w-full">
            <button
              className="py-3 px-4 md:px-5 xl:py-1.5 xl:px-10 rounded-[10px] bg-police-blue text-[#F7F8F9] text-base leading-normal xl:leading-9 font-lufga-preload font-semibold uppercase w-full"
              type="button"
            >
              <span>{data.button.title}</span>
            </button>
            <div className="space-y-1 max-w-6.5 w-full block md:hidden">
              <span className="w-[14.4px] h-[2.7px] bg-police-blue block rounded-full mr-0 ml-auto" />
              <span className="w-[14.4px] h-[2.7px] bg-police-blue block rounded-full mx-auto" />
              <span className="w-[14.4px] h-[2.7px] bg-police-blue block rounded-full mr-auto ml-0" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex xl:hidden mt-4 justify-center">
          <div className="hidden md:block">
            <ul className="items-center flex gap-16">
              {data.navLinks.map((value) => (
                <li key={value.id}>
                  <Link
                    href={value.links}
                    className="text-base/9 font-medium font-lufga-preload text-police-blue"
                  >
                    <span>{value.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;

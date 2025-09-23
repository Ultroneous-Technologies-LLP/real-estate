import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Arrow } from "@/components/icons";

import { DesktopGridProps } from "../types";
import { BestDealEnum } from "../BestDeal";

const DesktopTab: FC<DesktopGridProps> = ({ items }) => (
  <div className="grid lg:grid-cols-3 gap-21.5 lg:gap-10 pt-8 xl:pt-11">
    {items.map((item, index) => (
      <div key={index}>
        <Image
          src={item.image}
          width={349}
          height={363}
          alt={item.title}
          className="w-full object-cover rounded-md"
        />
        <h3 className="pt-4 text-base/6 xl:text-xl/6.5 font-lufga-preload text-police-blue">
          {item.title}
        </h3>
        <div className="flex items-center mt-2 xl:mt-6">
          <Link
            href={item.link}
            className="text-police-blue hover:underline py-2 px-4 border border-[#C4C4C4] text-base/8 font-semibold font-lufga-preload 
              inline-block max-w-50 w-full rounded-lg hover:rounded-full tracking-widest uppercase transition-all duration-500 ease-in-out"
          >
            {BestDealEnum.KNOW_MORE}
          </Link>
          <div className="size-14 bg-police-blue rounded-full flex justify-center items-center -ml-5">
            <Arrow className="text-white" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default DesktopTab;

import { FC } from "react";

import { BestDealCard } from "./Card";
import { DesktopGridProps } from "./types";

export const DesktopTab: FC<DesktopGridProps> = ({ items }) => (
  <div className="grid gap-21.5 pt-8 lg:grid-cols-3 lg:gap-10 xl:pt-11" role="list">
    {items.map((item, index) => (
      <BestDealCard key={index} image={item.image} title={item.title} link={item.link} />
    ))}
  </div>
);

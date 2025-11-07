import { FC } from "react";

import { BestDealCard } from "./Card";
import { DesktopGridProps } from "./types";

export const DesktopTab: FC<DesktopGridProps> = ({ items }) => (
  <div className="grid gap-21.5 pt-8 lg:grid-cols-3 lg:gap-10 xl:pt-11" role="list">
    {items.map((item, index) => (
      <BestDealCard image={item.image} key={index} link={item.link} title={item.title} />
    ))}
  </div>
);

import { FC } from "react";

import BestDealCard from "./Card";
import { DesktopGridProps } from "../types";

const DesktopTab: FC<DesktopGridProps> = ({ items }) => (
  <div
    className="grid lg:grid-cols-3 gap-21.5 lg:gap-10 pt-8 xl:pt-11"
    role="list"
  >
    {items.map((item, index) => (
      <BestDealCard
        key={index}
        image={item.image}
        title={item.title}
        link={item.link}
      />
    ))}
  </div>
);

export default DesktopTab;

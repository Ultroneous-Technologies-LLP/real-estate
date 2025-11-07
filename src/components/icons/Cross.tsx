import { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_16 } from "./constant";

export const Cross = ({
  width = ICON_SIZE_16,
  height = ICON_SIZE_16,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_16} ${ICON_SIZE_16}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M1 14.9285L14.9285 1.00001"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M1.07422 1.06856L15.0027 14.997"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

import { SVGProps } from "react";

const Cross = ({
  width = 16,
  height = 16,
  ...svgProps
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    role="img"
    {...svgProps}
  >
    <path
      d="M1 14.9285L14.9285 1.00001"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.07422 1.06856L15.0027 14.997"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Cross;

import { SVGProps } from "react";

export const Arrow = ({ width = 15, height = 15, ...svgProps }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    role="img"
    {...svgProps}
  >
    <path
      d="M12.4079 4.58017L11.9803 13.4616L14.3216 13.5743L14.9416 0.695914L2.0632 0.0758747L1.95048 2.4171L10.8319 2.8447L0.269875 12.4364L1.8459 14.1719L12.4079 4.58017Z"
      fill="currentColor"
    />
  </svg>
);

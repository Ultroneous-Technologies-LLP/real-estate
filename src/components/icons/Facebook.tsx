import { SVGProps } from "react";

export const Facebook = ({ width = 10, height = 20, ...svgProps }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 10 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    role="img"
    {...svgProps}
  >
    <path
      d="M8.11163 3.29411H9.92331V0.138765C9.61075 0.0957676 8.53581 -0.000976562 7.28393 -0.000976562C4.67183 -0.000976562 2.88248 1.64202 2.88248 4.66176V7.44088H0V10.9683H2.88248V19.844H6.41654V10.9692H9.18243L9.6215 7.44171H6.41571V5.01153C6.41654 3.992 6.69106 3.29411 8.11163 3.29411Z"
      fill="currentColor"
    />
  </svg>
);

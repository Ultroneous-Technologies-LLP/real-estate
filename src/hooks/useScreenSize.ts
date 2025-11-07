"use client";

import { useState, useEffect } from "react";

const INITIAL_WIDTH = 0;
const RESIZE_EVENT = "resize" as const;

export const useScreenSize = (): { width: number } => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : INITIAL_WIDTH
  );

  useEffect((): (() => void) => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };

    window.addEventListener(RESIZE_EVENT, handleResize);

    // Initial check
    handleResize();

    return (): void => {
      window.removeEventListener(RESIZE_EVENT, handleResize);
    };
  }, []);

  return { width };
};

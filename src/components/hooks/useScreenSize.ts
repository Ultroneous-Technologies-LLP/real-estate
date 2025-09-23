"use client";

import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [height, setHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, height };
};

export default useScreenSize;

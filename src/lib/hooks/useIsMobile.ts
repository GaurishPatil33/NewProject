"use client";

import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Run only on client
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
};

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/utils";

export default function ParallaxBanner({
  children,
  className = "",
  speed = 0,
  ...props
}) {
  const [scrollY, setScrollY] = useState();
  function handleScroll() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn("w-full -z-10 relative", className)}
      style={{ transform: `translateY(${scrollY * speed}px)` }}
      {...props}
    >
      {children}
    </div>
  );
}

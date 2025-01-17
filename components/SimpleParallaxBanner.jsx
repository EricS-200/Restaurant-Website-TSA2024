"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";

export default function ParallaxBanner({
  children,
  className = "",
  speed = 0,
  src,
  alt = "",
  innerClassName = "",
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
      className={cn("w-full sticky inset-0", className)}
      style={{ transform: `translate(0px, -${scrollY * speed}px)` }}
      {...props}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          className={cn("object-center object-cover", innerClassName)}
          fill={true}
          placeholder="blur"
        />
      )}
      {children}
    </div>
  );
}

"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { cn } from "@/utils/utils";

export default function MouseMoveParallax({
  translate = {},
  children,
  className,
  sensitivity = 150,
}) {
  const [firstLoad, setFirstLoad] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [offset, setOffset] = useState({});
  const ref = useRef(null);

  const translations = {
    default: { x: "0px", y: "0px" },
    sm: { x: "0px", y: "0px" },
    md: { x: "0px", y: "0px" },
    lg: { x: "0px", y: "0px" },
    xl: { x: "0px", y: "0px" },
    xxl: { x: "0px", y: "0px" },
    ...translate,
  };

  function handleMouseMove(event) {
    setX(event.clientX);
    setY(event.clientY);
  }

  function handleResize() {
    const width = window.innerWidth;
    let offsetValue = { x: "", y: "" };
    if (width >= 1536 && "xxl" in translate) {
      offsetValue = translations.xxl;
    } else if (width >= 1280 && "xl" in translate) {
      offsetValue = translations.xl;
    } else if (width >= 1024 && "lg" in translate) {
      offsetValue = translations.lg;
    } else if (width >= 768 && "md" in translate) {
      offsetValue = translations.md;
    } else if (width >= 640 && "sm" in translate) {
      offsetValue = translations.sm;
    } else {
      offsetValue = translations.default;
    }
    setOffset(() => {
      return offsetValue;
    });
    setFirstLoad(true);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={cn(``, className)}
      ref={ref}
      style={{
        display: firstLoad ? "block" : "none",
        transform: `translate3d(calc(${x / sensitivity}px + ${offset.x}),
        calc(${y / sensitivity}px + ${offset.y}), 0px)`,
      }}
    >
      {children}
    </div>
  );
}

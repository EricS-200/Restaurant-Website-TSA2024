"use client";

/*NOT REALLY REUSABLE DUE TO OFFSET CONSTANTS!!!  */

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { cn } from "@/utils/utils";

export default function HorizontalScroll({
  className = "", // className for outer container
  innerClassName = "", // className for inner motion.div container
  scrollTime = 3, // defines height and therefore how long it takes to scroll through (how many times 100vh)
  offset = 50, // pixel value of when horizontal scroll stops from end of carousel
  children,
  header = "",
  footer = "",
}) {
  const component = useRef(null);
  const innerDiv = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const { scrollYProgress } = useScroll({
    target: component,
  });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(window.innerWidth);
      setWidth(innerDiv.current.scrollWidth);
    };

    window.addEventListener("resize", updateDimensions);
    setTimeout(() => {
      updateDimensions();
    }, 500);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (screenWidth > 768) {
    offset = screenWidth / 2 - 420 / 2 + 16;
    console.log("hi");
  } else {
    offset = 60;
  }

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    ["-0px", `-${width - screenWidth + offset}px`]
  );

  return (
    <section
      ref={component}
      className={cn(`relative`, className)}
      style={{ height: `${100 * scrollTime}vh` }}
    >
      <div className="sticky top-0 flex flex-col h-screen items-center justify-evenly overflow-hidden">
        {header}
        <motion.div
          ref={innerDiv}
          style={{ translateX }}
          className={cn("flex gap-4 ml-4 items-center", innerClassName)}
        >
          {children}
        </motion.div>
        {footer}
      </div>
    </section>
  );
}

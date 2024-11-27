"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { cn } from "@/utils/utils";

const test_img_count = 9;

export default function HorizontalScroll({
  className = "", // className for outer container
  innerClassName = "", // className for inner motion.div container
  scrollTime = 3, // defines height and therefore how long it takes to scroll through (how many times 100vh)
  offset = 50, // pixel value of when horizontal scroll stops from end of carousel
  children,
}) {
  const component = useRef(null);
  const innerDiv = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);

  const [width, setWidth] = useState(0);
  const { scrollYProgress } = useScroll({
    target: component,
  });
  console.log(scrollYProgress.current);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  });

  useLayoutEffect(() => {
    setWidth(innerDiv.current.scrollWidth); // Measure total width
  }, []);

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    ["-0px", `-${width - screenWidth + offset}px`]
  );

  return (
    <section
      ref={component}
      className={cn(`relative bg-neutral-900`, className)}
      style={{ height: `${100 * scrollTime}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden w-foit">
        <motion.div
          ref={innerDiv}
          style={{ translateX }}
          className={cn("flex gap-4 ml-4", innerClassName)}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

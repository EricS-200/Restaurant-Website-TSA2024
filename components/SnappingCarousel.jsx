"use client";

import Image from "next/image";
import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { cn } from "@/utils/utils";
import leftArrow from "@/public/left-arrow.svg";
import rightArrow from "@/public/right-arrow.svg";

export default function DraggableCarousel({ className, children }) {
  const containerRef = useRef(null);

  const [screenWidth, setScreenWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [childWidth, setChildWidth] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [elementAt, setElementAt] = useState(0);

  const x = useMotionValue(0);

  function init() {
    const w = window.innerWidth;
    setScreenWidth(() => w);
    setContainerWidth(() => containerRef.current.scrollWidth);
    setChildCount(() => React.Children.count(children));
    // console.log(React.Children.toArray(children));
    const childNodes = Array.from(containerRef.current.children);
    setChildWidth(() => childNodes[0].getBoundingClientRect().width);
    // console.log(containerRef.current.scrollWidth - window.innerWidth);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", init);
    setTimeout(() => {
      init();
    }, 500);
    return () => {
      window.removeEventListener("resize", init);
    };
  }, []);

  function handleNext() {
    const min = 0; // first element
    const max = childCount - Math.floor(screenWidth / childWidth);
    let newElementAt = elementAt + 1;
    newElementAt = Math.max(newElementAt, min);
    newElementAt = Math.min(newElementAt, max);
    setElementAt(newElementAt);
    let translation = -(newElementAt * childWidth);
    animate(x, translation, { type: "spring", stiffness: 300, damping: 30 });
  }

  function handlePrevious() {
    const min = 0; // first element
    const max = childCount - Math.floor(screenWidth / childWidth);
    let newElementAt = elementAt - 1;
    newElementAt = Math.max(newElementAt, min);
    newElementAt = Math.min(newElementAt, max);
    setElementAt(newElementAt);
    let translation = -(newElementAt * childWidth);
    animate(x, translation, { type: "spring", stiffness: 300, damping: 30 });
  }

  function handleDrag(event, info) {
    const min = 0; // first element
    const max = childCount - Math.floor(screenWidth / childWidth);
    // console.log(childCount);

    let newElementAt = undefined;
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset > childWidth * 0.25) {
      newElementAt = elementAt - 1;

      newElementAt = Math.max(newElementAt, min);
      newElementAt = Math.min(newElementAt, max);
      setElementAt(newElementAt);
    } else if (offset < -(childWidth * 0.25)) {
      newElementAt = elementAt + 1;

      newElementAt = Math.max(newElementAt, min);
      newElementAt = Math.min(newElementAt, max);
      setElementAt(newElementAt);
    } else {
      newElementAt = elementAt;
    }

    let translation;
    if (newElementAt) {
      translation = -(newElementAt * childWidth);
    } else {
      translation = -(elementAt * childWidth);
    }
    animate(x, translation, { type: "spring", stiffness: 300, damping: 30 });
  }

  return (
    <div
      className={cn(
        "overflow-hidden w-full flex items-center flex-col relative",
        className
      )}
    >
      <motion.div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing 
                   flex items-center w-full"
        style={{ x }}
        drag="x"
        dragConstraints={{
          left: -(containerWidth - screenWidth),
          right: 0,
        }}
        dragElastic={0.8}
        onDragEnd={handleDrag}
      >
        {children}
      </motion.div>
      {/* <div className="flex justify-between items-center w-full px-12 pt-4 absolute bottom-0">
        <button onClick={handlePrevious}>
          <svg
            className={`w-[40px] ${
              elementAt === 0 ? "fill-gray-500" : "fill-black"
            }`}
            viewBox="-3 0 32 32"
            version="1.1"
          >
            <g id="icomoon-ignore"></g>
            <path d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"></path>
            <path d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"></path>
          </svg>
        </button>
        <button onClick={handleNext}>
          <svg
            className={`w-[40px] ${
              elementAt === childCount - Math.floor(screenWidth / childWidth)
                ? "fill-gray-500"
                : "fill-black"
            }`}
            viewBox="-3 0 32 32"
            version="1.1"
          >
            <g id="icomoon-ignore"></g>
            <path d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"></path>
            <path d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"></path>
          </svg>
        </button>
      </div> */}
    </div>
  );
}

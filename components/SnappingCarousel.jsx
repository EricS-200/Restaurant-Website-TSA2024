"use client";

import React, {
  useRef,
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { cn } from "@/utils/utils";

export default function DraggableCarousel({ className, children }) {
  const containerRef = useRef(null);

  const [screenWidth, setScreenWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // We store both the center of *each item* and the center of *each group*.
  const [itemCenters, setItemCenters] = useState([]);
  const [groupCenters, setGroupCenters] = useState([]);
  const [groupIndex, setGroupIndex] = useState(0);

  const x = useMotionValue(0);

  /**
   * Decide how many items to show per "page" based on screen size.
   * You can modify these breakpoints to suit your design.
   */
  function getItemsPerView(width) {
    if (width < 640) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    return 3; // Desktop
  }

  /**
   * After the DOM is rendered, measure:
   * - containerWidth  (scrollWidth)
   * - itemCenters     (each child's horizontal center in page coordinates)
   * - groupCenters    (center for each group of items)
   */
  const measureLayout = useCallback(() => {
    if (!containerRef.current) return;

    // 1) Measure screen width (for breakpoints) and container width
    const w = window.innerWidth;
    setScreenWidth(w);
    setContainerWidth(containerRef.current.scrollWidth);

    // 2) Get all child <div> inside the container
    const childNodes = Array.from(containerRef.current.children);

    // 3) Calculate each child's horizontal center
    //    We'll measure in *page coordinates*, so we add the container's offsetLeft
    const newCenters = childNodes.map((node) => {
      const rect = node.getBoundingClientRect();
      // The container might be translated, but getBoundingClientRect gives
      // global coords; let's add the current page scroll (window.scrollX).
      // If the carousel is within a scrolled page, you might need to adjust further.
      const centerX = rect.left + rect.width / 2 + window.scrollX;
      return centerX;
    });
    setItemCenters(newCenters);

    // 4) Build groupCenters:
    //    Group items by `itemsPerView`, compute each group's average center.
    const itemsInView = getItemsPerView(w);
    const tmpGroupCenters = [];

    for (
      let startIdx = 0;
      startIdx < newCenters.length;
      startIdx += itemsInView
    ) {
      const slice = newCenters.slice(startIdx, startIdx + itemsInView);
      // average center = sum of slice / slice.length
      const avgCenter = slice.reduce((sum, val) => sum + val, 0) / slice.length;
      tmpGroupCenters.push(avgCenter);
    }
    setGroupCenters(tmpGroupCenters);

    // 5) Reset to the first group
    setGroupIndex(0);
    // Snap immediately (no animation)
    centerGroup(0, false);
  }, []);

  useLayoutEffect(() => {
    // Measure on initial mount
    measureLayout();

    // Measure again on window resize
    window.addEventListener("resize", measureLayout);
    return () => {
      window.removeEventListener("resize", measureLayout);
    };
  }, [measureLayout]);

  /**
   * Scroll or "snap" the carousel so that the group's center
   * ends up at the viewport's center.
   */
  function centerGroup(index, animateSnap = true) {
    if (!groupCenters.length) return;

    // The horizontal center of the screen
    const viewportCenter = window.innerWidth / 2;

    // groupCenters[index] is the global center of that group
    const groupCenterGlobal = groupCenters[index];

    // The current shift of the container
    const currentX = x.get();

    // We want `groupCenterGlobal + currentX` = `viewportCenter`
    const shift = viewportCenter - (groupCenterGlobal + currentX);
    const finalX = currentX + shift;

    if (animateSnap) {
      animate(x, finalX, { type: "spring", stiffness: 300, damping: 30 });
    } else {
      x.set(finalX);
    }
  }

  /**
   * After user finishes dragging, see which direction they swiped,
   * increment or decrement `groupIndex`, then snap.
   */
  function handleDragEnd() {
    const velocity = x.getVelocity(); // px / second
    let newIndex = groupIndex;

    // Threshold for "swipe" direction
    if (velocity < -50) {
      // Swiped left => next group
      newIndex = groupIndex + 1;
    } else if (velocity > 50) {
      // Swiped right => previous group
      newIndex = groupIndex - 1;
    }

    // Clamp
    newIndex = Math.max(0, Math.min(newIndex, groupCenters.length - 1));
    setGroupIndex(newIndex);
    centerGroup(newIndex, true);
  }

  return (
    <div
      className={cn(
        "overflow-hidden w-full h-screen flex items-center bg-white",
        className
      )}
    >
      <motion.div
        ref={containerRef}
        // style={{ x }}
        className="cursor-grab active:cursor-grabbing 
                   w-fit inline-flex flex-nowrap 
                   gap-x-8 px-2" // gap and padding are optional
        drag="x"
        // Constrain drag to not go too far left or right
        dragConstraints={{
          left: -(containerWidth - screenWidth + 50),
          right: 0,
        }}
        dragElastic={0.05}
        onDragEnd={handleDragEnd}
      >
        {children.map((child, index) => (
          <div className="flex-none" key={index}>
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

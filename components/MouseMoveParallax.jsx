"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { cn } from "@/utils/utils";

/**
 * This component allows for small movements according to the mouse movements of the user.
 * Due to the use of translation for the effect, regular tailwind styles like translate-x and translate-y do not work.
 * (object) For static translations for the purposes of positioning, use the translate attribute
 * It uses the same breakpoints as tailwind
 * 2xl is replaced by xxl.
 * (int) Sensitivity determines how fast the component moves relative to the mouse; smaller is faster.
 *
 * Example:
 *
 * <MouseMoveParallax
 * className="..."
 * translate={{default: {x: "5px", y: "20%"}}, {xxl: {x: "21vw", y: "29%"}}}
 * sensitivity={100}>
 * {content}
 * </MouseMoveParallax>
 *
 */

export default function MouseMoveParallax({
  translate = {},
  children,
  className,
  sensitivity = 150,
}) {
  const [show, setShow] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [properties, setProperties] = useState({});
  const ref = useRef(null);

  const props = {
    default: { x: "0px", y: "0px", hidden: false },
    sm: { x: "0px", y: "0px", hidden: false },
    md: { x: "0px", y: "0px", hidden: false },
    lg: { x: "0px", y: "0px", hidden: false },
    xl: { x: "0px", y: "0px", hidden: false },
    xxl: { x: "0px", y: "0px", hidden: false },
  };

  for (const key in translate) {
    props[key] = Object.assign({}, props[key], translate[key]);
  }

  function handleMouseMove(event) {
    setX(event.clientX);
    setY(event.clientY);
  }

  function handleResize() {
    const width = window.innerWidth;
    let offsetValue = props.default;

    if (width >= 640 && "sm" in translate) {
      offsetValue = props.sm;
    }

    if (width >= 768 && "md" in translate) {
      offsetValue = props.md;
    }

    if (width >= 1024 && "lg" in translate) {
      offsetValue = props.lg;
    }

    if (width >= 1280 && "xl" in translate) {
      offsetValue = props.xl;
    }

    if (width >= 1536 && "xxl" in translate) {
      offsetValue = props.xxl;
    }

    setProperties(() => {
      return offsetValue;
    });
    if (offsetValue.hidden == false) {
      setShow(true);
    } else {
      setShow(false);
    }
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
        display: show ? "block" : "none",
        transform: `translate(calc(${x / sensitivity}px + ${properties.x}),
        calc(${y / sensitivity}px + ${properties.y}))`,
      }}
    >
      {children}
    </div>
  );
}

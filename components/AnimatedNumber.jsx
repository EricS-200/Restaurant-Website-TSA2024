"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/utils/utils";

/**
 * Parameters:
 *
 * targetNumber (int): The number you want to hit (final number)
 *
 * targetString (string): The number you want to hit, provided as a string, with commas
 *
 * startingFraction (float): The fraction of the target number you want to start the animation from
 * (eg. 0.5 for 50% of original number)
 *
 * duration (int): The duration of the animation in milliseconds
 */
export default function AnimatedNumber({
  targetNumber,
  targetString,
  startingFraction,
  duration,
  className,
}) {
  const numberRef = useRef(null); // Reference to the <h1> element
  const [currentValue, setCurrentValue] = useState(
    targetNumber * startingFraction
  ); // For the number value
  const [showThatPieceOfShit, setShowThatPieceOfShit] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0,
  };

  //Load the intersection observer after the page has loaded
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.98) {
          setShowThatPieceOfShit(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const target = numberRef.current;
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Trigger the animation when the element is in view
  useEffect(() => {
    if (!showThatPieceOfShit) return;

    const targetValue = parseInt(
      numberRef.current.getAttribute("data-value").replace(/,/g, ""),
      10
    );
    const startingValue = targetNumber * startingFraction;

    setCurrentValue(startingValue);

    let startTime;
    const _duration = duration;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = (timestamp - startTime) / _duration;

      if (progress < 1) {
        setCurrentValue(
          startingValue + (targetValue - startingValue) * progress
        );
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [showThatPieceOfShit]);

  return (
    <h1
      ref={numberRef}
      id="numberAnimation"
      className={cn(`font-semibold `, className)}
      data-value={targetString}
    >
      {new Intl.NumberFormat().format(Math.round(currentValue))}
    </h1>
  );
}

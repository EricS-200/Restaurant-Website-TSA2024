"use client";

import React, { useState } from "react";

export default function ClickToChange() {
  const [pages, setPages] = useState([
    { bg: "bg-[#38a8cc]", zIndex: 2, clipPath: "", content: <div></div> },
    { bg: "bg-[#004444]", zIndex: 1, clipPath: "", content: <div></div> },
    { bg: "bg-[#884444]", zIndex: 1, clipPath: "", content: <div></div> },
    { bg: "bg-[#555588]", zIndex: 1, clipPath: "", content: <div></div> },
    { bg: "bg-[#a84466]", zIndex: 1, clipPath: "", content: <div></div> },
  ]);

  // Assign content to each page.
  pages.forEach((page, index) => {
    page.content = (
      <h1 className="text-white font-bold font-arial text-5xl select-none">
        Page {index + 1}
      </h1>
    );
  });

  const animationSpeed = 3.5;

  const handleClick = (index, event) => {
    // Get the bounding rectangle of the clicked element.
    const rect = event.currentTarget.getBoundingClientRect();
    // Calculate coordinates relative to the element.
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const nextIndex = (index + 1) % pages.length;

    // Update the next page's z-index and initial clipPath.
    setPages((prevPages) => {
      const newPages = [...prevPages];
      const currentZIndex = prevPages[index].zIndex;
      newPages[nextIndex] = {
        ...prevPages[nextIndex],
        zIndex: currentZIndex + 1,
        clipPath: `circle(0% at ${x}px ${y}px)`,
      };
      return newPages;
    });

    let progress = 0;
    const animate = () => {
      progress += animationSpeed;
      if (progress <= 110) {
        setPages((prev) => {
          const updated = [...prev];
          updated[nextIndex] = {
            ...prev[nextIndex],
            clipPath: `circle(${progress}% at ${x}px ${y}px)`,
          };
          return updated;
        });
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {pages.map((page, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center ${page.bg}`}
          style={{
            zIndex: page.zIndex,
            clipPath: page.clipPath || "none",
          }}
          onClick={(e) => handleClick(index, e)}
        >
          {page.content}
        </div>
      ))}
    </div>
  );
}

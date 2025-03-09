"use client";

import React, { useState, useEffect } from "react";
import { GetPage1Content, GetPage2Content, GetPage3Content, GetPage4Content, GetPage5Content } from "@/app/farm-to-table/PageContent";

export default function ClickToChange() {
  let topStyle = "h-fit";

  let RestOfThePage = (
    <div className="bg-green-700">
      <div className="flex flex-row">
        <div>
          <p className="text-[#d5b928]">Our Dedication To You</p>
          <p>
          Lorem ipsum dolor sit amet\ia pharetra sit amet ut nunc.
          Integer nec felis eu nulla bibendum tempus. Curabitur
          varius, ex eget tempus interdum, elit arcu fermentum odio,
          in scelerisque nunc erat nec nunc. Vestibulum dignissim
          justo non lectus tristique, ac luctus odio molestie. Aenean
          ut erat in turpis malesuada euismod at in tortor.
          </p>
        </div>

        <div>
          {/* <Image src={} alt="Man holding vegetables"/> */}
        </div>
      </div>



      <div>
        <div>
          <p>Farm To Table</p>
          <p>
          Lorem ipsum dolor sit amet\ia pharetra sit amet ut nunc.
          Integer nec felis eu nulla bibendum tempus. Curabitur
          varius, ex eget tempus interdum, elit arcu fermentum odio,
          in scelerisque nunc erat nec nunc. Vestibulum dignissim
          justo non lectus tristique, ac luctus odio molestie. Aenean
          ut erat in turpis malesuada euismod at in tortor.
          </p>
        </div>
      </div>
    </div>
  );

  const [activePage, setActivePage] = useState(0);
  const [pages, setPages] = useState([
    { bg: "bg-[#38a8cc]", zIndex: 2, clipPath: "", content: <div className={topStyle}><GetPage1Content/>{RestOfThePage}</div> },
    { bg: "bg-[#004444]", zIndex: 1, clipPath: "", content: <div className={topStyle}><GetPage2Content/>{RestOfThePage}</div> },
    { bg: "bg-[#884444]", zIndex: 1, clipPath: "", content: <div className={topStyle}><GetPage3Content/>{RestOfThePage}</div> },
    { bg: "bg-[#555588]", zIndex: 1, clipPath: "", content: <div className={topStyle}><GetPage4Content/>{RestOfThePage}</div> },
    { bg: "bg-[#a84466]", zIndex: 1, clipPath: "", content: <div className={topStyle}><GetPage5Content/>{RestOfThePage}</div> },
  ]);

  const initialVisible = Array(pages.length).fill(false);
  initialVisible[0] = true;
  const [visiblePages, setVisiblePages] = useState(initialVisible);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisiblePages((prev) => prev.map((_, i) => i === activePage));
    }, 300);
    return () => clearTimeout(timer);
  }, [activePage]);

  const animationSpeed = 3.5;

  const handleClick = (index, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const nextIndex = (index + 1) % pages.length;

    setVisiblePages((prev) => {
      const updated = [...prev];
      updated[nextIndex] = true;
      return updated;
    });
    
    setActivePage(nextIndex);

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
      if (progress <= 150) {
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
    <div className="relative w-full">
      {pages.map((page, index) => (
        <div
          key={index}
          className={`flex items-center justify-center ${page.bg} ${!visiblePages[index] ? "hidden" : ""}`}
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

"use client";

import React, { useState, useEffect } from "react";
import { GetPage1Content, GetPage2Content, GetPage3Content, GetPage4Content, GetPage5Content } from "@/app/farm-to-table/PageContent";

export default function ClickToChange() {
  let topStyle = "w-full h-fit";

  const [activePage, setActivePage] = useState(0);
  const [pages, setPages] = useState([
    { bg: "bg-[#38a8cc]", zIndex: 2, clipPath: "", content: <div className={topStyle}><GetPage1Content/></div> },
    { bg: "bg-[#004444]", zIndex: 1, clipPath: "", content: <div className={topStyle}><GetPage2Content/></div> },
    { bg: "bg-[#884444]", zIndex: 1, clipPath: "", content: <div className={topStyle}><GetPage3Content/></div> },
    { bg: "bg-[#555588]", zIndex: 1, clipPath: "", content: <div className={topStyle}><GetPage4Content/></div> },
    { bg: "bg-[#a84466]", zIndex: 1, clipPath: "", content: <div className={topStyle}><GetPage5Content/></div> },
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
      <div className="bg-green-700 px-[2%]">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-[40%]">
            {/* <Image src={} alt="Man holding vegetables"/> */}
          </div>

          <div className="relative sm:w-[60%] h-fit">
            <h1 className="text-center text-3xl sm:text-6xl lg:text-8xl text-[#d5b928] font-extrabold">
              Our Dedication
            </h1>
            <h1 className="text-center text-3xl sm:text-6xl lg:text-8xl text-[#d5b928] font-extrabold">
              To You
            </h1>
            <h1 className="hidden sm:block absolute w-[70vw] bottom-[-9vh] sm:bottom-[18vh] lg:bottom-[10vh] right-[17.7vw] sm:left-[0] font-mistrully opacity-70 text-[7rem] md:text-[9rem] lg:text-[11rem] pointer-events-none select-none text-clip text-[#61743d]">
              Dedication
            </h1>

            <p>
              Craftroots provides a connection between people, not
              machines, through every step of the way. From vegetables
              hand-picked and transported by local farmers to the same
              vegetables being stocked & tracked by our pantry chef, to
              the same vegetables being prepared expertly by our chefs,
              to the same vegetables being served by our wait staff, to
              the same vegetables being enjoyed by our customers,
              human connections can help us benefit the community as
              a whole.
            </p>
          </div>
        </div>



        
      </div>
    </div>
  );
}

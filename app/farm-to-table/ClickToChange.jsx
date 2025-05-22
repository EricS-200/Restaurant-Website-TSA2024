"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GetPage1Content, GetPage2Content, GetPage3Content, GetPage4Content, GetPage5Content } from "@/app/farm-to-table/PageContent";

import img1 from "@/public/farmtotable/1.png";
import img2 from "@/public/farmtotable/2.png";
import img3 from "@/public/farmtotable/3.png";
import img4 from "@/public/farmtotable/4.png";
import img5 from "@/public/farmtotable/5.png";
import img6 from "@/public/farmtotable/6.png";
import img7 from "@/public/farmtotable/7.png";
import img8 from "@/public/farmtotable/8.png";
import img9 from "@/public/farmtotable/9.png";
import img10 from "@/public/farmtotable/10.png";
import img11 from "@/public/farmtotable/11.png";
import img12 from "@/public/farmtotable/12.png";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function ClickToChange() {
  let topStyle = "w-full h-fit";

  const [activePage, setActivePage] = useState(0);
  const [pinger, setPinger] = useState((
     <div>
      <ScrollIndicator/>
     </div>
  ));

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
    }, 0);
    return () => clearTimeout(timer);
  }, [activePage]);

  const animationSpeed = 3;

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

    setPinger(<div></div>);
    
    setActivePage(nextIndex);

    setPages((prevPages) => {
      const newPages = [...prevPages];
      const currentZIndex = prevPages[index].zIndex;
      newPages[nextIndex] = {
        ...prevPages[nextIndex],
        zIndex: currentZIndex + 1,
        clipPath: `circle(0% at ${x}% ${y}%)`,
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
      <ScrollIndicator/>
      <div className="bg-[#36685d] px-[2%] overflow-x-hidden overflow-y-clip">
        <div className="flex flex-col sm:flex-row items-center justify-evenly">
          <div className="sm:w-[50%] justify-center items-center relative">
            <Image src={img4} alt="" className="scale-90"/>
            <Image src={img3} alt="Tomato Outline" className="hidden sm:block absolute top-[-15vh] left-[-15vw] scale-50"/>
          </div>

          <div className="relative sm:w-[40%] h-[100%] justify-center items-center flex flex-col">
              <h1 className="text-center text-4xl sm:text-6xl lg:text-8xl text-[#d5b928] font-extrabold pt-[3%] md:pt-[0%] font-dm">
                Our Dedication
              </h1>
              <h1 className="text-center text-4xl sm:text-6xl lg:text-8xl text-[#d5b928] font-extrabold font-dm">
                To You
              </h1>

              <p className="text-white mt-[5%] px-[5%] sm:px-[2%] text-center">
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

        <div className="flex flex-col sm:flex-row items-center justify-evenly">
          <div className="relative sm:w-[40%] h-[100%] justify-center items-center flex flex-col">
              <h1 className="text-center text-4xl sm:text-6xl lg:text-8xl text-[#d5b928] font-extrabold pt-[3%] md:pt-[0%] font-dm">
                Farm to Table
              </h1>

              <p className="text-white mt-[5%] text-center">
                The current state of the farming industry is no better than
                many other industries. Preservative chemicals such as
                sorbates and benzoates, which commonly appear on
                nutrition labels, are undeniably detrimental to the human
                body. Large farms also primarily use cheap and dangerous
                pesticides, while local farms can take more care in anti-pest
                measures. By partnering with local farms such as Doe
                Organics and Three Sisters Farms, we can provide delicious
                greens & vegetables without the risk of unnecessary
                chemicals.
              </p>
          </div>

          <div className="sm:w-[50%] justify-center items-center relative">
            <Image src={img6} alt="" className="scale-90"/>
            <Image src={img5} alt="Potted Plant" className="absolute top-[-25vh] right-[-15vw] z-[-10] scale-75"/>
          </div>
        </div>

        <div className="relative h-[1vh] sm:h-[30vh]">
          <Image src={img7} alt="" className="absolute top-[-30vh] right-[-10vw]"/>
        </div>

        <div className="w-full justify-center items-center flex flex-col">
          <h1 className="text-center text-4xl sm:text-6xl lg:text-8xl text-[#d5b928] font-extrabold font-dm z-[1000]">
            Cooking is Our Home
          </h1>

          <p className="w-[75%] lg:w-[50%] text-white pt-[5%] text-center">
            We see cooking as a way to connect people in all ways, shapes, and forms.
            Through our cooking, we aim to be able to not only connect our cultural origins
            to our community, but also connect all parts of our community. For this
            reason, we partner not only with local farms, but with other local business for
            all facets of our operations. By doing this, we want to use cooking to be able to
            both provide a second home for our own culture and benefit our current home
            simultaneously.
          </p>
        </div>

        <div className="relative flex flex-col justify-center items-center h-[30vh] pt-[30%]">
          <Image src={img12} alt="" className="w-full h-auto object-cover"/>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import goldenLeaves from "@/public/golden-leaves1.png";
import goldenVegetable1 from "@/public/golden-vegetable1.png";
import goldenVegetable2 from "@/public/golden-vegetable2.png";
import { useEffect, useState, useRef } from "react";

export default function GoldenImages() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);

  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === img1.current) {
            setShow1(entry.isIntersecting);
          } else if (entry.target === img2.current) {
            setShow2(entry.isIntersecting);
          } else if (entry.target === img3.current) {
            setShow3(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (img1.current) observer.observe(img1.current);
    if (img2.current) observer.observe(img2.current);
    if (img3.current) observer.observe(img3.current);
    return () => {
      if (img1.current) observer.unobserve(img1.current);
      if (img2.current) observer.unobserve(img2.current);
      if (img3.current) observer.unobserve(img3.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className={`absolute w-full h-full transition-all duration-500 ${
          show1 ? "" : "-translate-y-[40px]"
        }`}
        ref={img1}
      >
        <Image
          alt="golden leaves 1"
          src={goldenLeaves}
          className="hidden lg:block absolute bottom-0 left-0 lg:-translate-y-[150px] xl:-translate-y-16 lg:max-w-[23vw] rotate-[330deg] scale-x-[-1] 2xl:translate-y-[25px]"
        />
      </div>
      <div
        className={`absolute w-full h-full transition-all duration-500 ${
          show2 ? "" : "-translate-y-[40px]"
        }`}
        ref={img2}
      >
        <Image
          alt="golden vegetable 1"
          src={goldenVegetable1}
          className="hidden lg:block absolute rotate-[150deg] lg:left-5 lg:top-5 lg:translate-y-20 xl:-translate-y-6 xl:left-10 xl:top-10 lg:max-w-[250px] xl:max-w-[350px] "
        />
      </div>
      <div
        className={`absolute w-full h-full transition-all duration-500 ${
          show3 ? "" : "-translate-y-[40px]"
        }`}
        ref={img3}
      >
        <Image
          alt="golden vegetable 2"
          src={goldenVegetable2}
          className="hidden lg:block absolute rotate-[-80deg] right-0 translate-x-[100px] max-w-[40vw] lg:translate-y-[150px] xl:translate-y-0"
        />
      </div>
    </>
  );
}

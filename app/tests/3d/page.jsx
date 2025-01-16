"use client";

import Link from "next/link";
import Image from "next/image";
import ParallaxBanner from "@/components/SimpleParallaxBanner";
import MouseMoveParallax from "@/components/MouseMoveParallax";
import StyledText from "@/components/StyledText";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

import seperator1 from "@/public/home/seperator1.png";
import droplets1 from "@/public/home/droplets1.png";
import droplets2 from "@/public/home/droplets2.png";
import leaves1 from "@/public/home/leaves1.png";
import leaves2 from "@/public/home/leaves2.png";
import fog from "@/public/home/fog.png";

export default function HomePageBanner() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  function handleMouseMove(event) {
    const sensitivity = 100;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setRotateX((centerX - mouseX) / sensitivity);
    setRotateY((centerY - mouseY) / sensitivity);
  }

  function handleMouseLeave() {
    setRotateX(() => {
      return 0;
    });
    setRotateY(() => {
      return 0;
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    // <div className="perspective-1000 bg-black w-[500px] h-[500px] text-white transform-style-3d rotate-x-[89deg]">
    //   hi{" "}
    //   <div className=" bg-red-500 w-[200px] h-[200px] translate-z-[100px]">
    //     hi hi hi
    //   </div>
    // </div>
    <div className="overflow-hidden">
      <div
        style={{
          "--rotate-x": `${rotateY}deg`,
          "--rotate-y": `${rotateX}deg`,
        }}
        className=" transform-style-3d rotate-x-[var(--rotate-x)] rotate-y-[var(--rotate-y)] transition-transform ease-out duration-1000 will-change-transform"
        speed={0.5}
      >
        <div className="h-screen">
          <video
            className="inset-0 w-screen h-[112vh] object-cover object-center -translate-y-[50px]"
            src="/home/background.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        {/*
      <MouseMoveParallax
        translate={{
          default: { hidden: true },
          lg: { x: "50%", y: "5%", hidden: false },
          xl: { x: "40%", y: "3%" },
          xxl: { x: "30%", y: "0%" },
        }}
        className="lg:block hidden absolute right-0 bottom-0  h-full translate-z-[180px]"
      >

      </MouseMoveParallax> */}

        <Image
          src={droplets1}
          alt="water droplets (1)"
          className="transform-style-3d lg:block hidden absolute right-0 bottom-0  h-full translate-z-[180px] lg:translate-x-[50%] lg:translate-y-[5%] xl:translate-x-[40%] xl:translate-y-[3%] 2xl:translate-x-[30%]"
        />

        <MouseMoveParallax
          sensitivity={50000000}
          translate={{
            default: { hidden: true },
            lg: { x: "-50%", y: "7%", hidden: false },
            xl: { x: "-40%", y: "10%" },
            xxl: { x: "-30%", y: "0%" },
          }}
          className="lg:block hidden absolute left-0 bottom-0 h-full lg:h-[90%] translate-z-[180px]"
        >
          <Image src={droplets2} alt="water droplets (2)" />
        </MouseMoveParallax>

        <MouseMoveParallax
          sensitivity={50000000}
          translate={{
            default: { hidden: true },
            lg: { x: "-40%", y: "-15%", hidden: false },
            xl: { x: "-40%", y: "-15%" },
            xxl: { x: "-30%", y: "-20%" },
          }}
          className={
            "lg:block hidden absolute left-0 top-0 lg:w-[60%] xl:w-[50%] 2xl:w-[40%] translate-z-[250px]"
          }
        >
          <Image src={leaves1} alt="leaves (1)" />
        </MouseMoveParallax>

        <MouseMoveParallax
          sensitivity={50000000}
          translate={{
            default: { hidden: true },
            lg: { x: "25%", y: "15%", hidden: false },
            xl: { x: "25%", y: "15%" },
            xxl: { x: "25%", y: "15%" },
          }}
          className={
            "lg:block hidden absolute right-0 bottom-0 lg:w-[60%] xl:w-[50%] 2xl:w-[40%] translate-z-[250px]"
          }
        >
          <Image src={leaves2} alt="leaves (2)" />
        </MouseMoveParallax>

        <Image
          src={fog}
          className="w-screen absolute inset-0 translate-z-[100px]"
          alt="fog"
        />
        <div className="w-full h-screen flex flex-col items-center justify-center text-white absolute inset-0 space-y-2">
          <h1 className="font-seasons text-7xl text-transparent bg-clip-text bg-white">
            Craftroots
          </h1>
          <StyledText
            className="font-kenao text-4xl sm:text-7xl md:text-8xl lg:text-9xl sm:-translate-y-[20%] text-center"
            charClassName="transition-all hover:scale-[1.05]"
          >
            Feast on Fresh
          </StyledText>

          <Image
            src={seperator1}
            alt="decorated seperator"
            className="w-[700px]"
          />
          <h2 className="font-2xl w-[650px] max-w-[95vw] text-center">
            Healthy, high end vegetarian & vegan dishes sourced from authentic
            farms all across the world
          </h2>
          <Link href={"/order"}>
            <button className="bg-[#d0b577] hover:bg-[#d1c19c] active:bg-[#c6ba9d] py-1 px-8 mt-3 text-black">
              Reserve & Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

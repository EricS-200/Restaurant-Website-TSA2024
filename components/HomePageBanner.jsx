"use client";

import Link from "next/link";
import Image from "next/image";
import ParallaxBanner from "@/components/SimpleParallaxBanner";
import StyledText from "@/components/StyledText";
import { useEffect, useState, useRef } from "react";

import seperator1 from "@/public/home/seperator1.png";
import droplets1 from "@/public/home/droplets1.png";
import droplets2 from "@/public/home/droplets2.png";
import leaves1 from "@/public/home/leaves1.png";
import leaves2 from "@/public/home/leaves2.png";
import fog from "@/public/home/fog.png";

import bg from "@/public/home/bg.png";
import bg1 from "@/public/home/bg-layer1.png";
import bg2 from "@/public/home/bg-layer2.png";

export default function HomePageBanner() {
  const [rotateX, setRotateX] = useState(0);
  const ref = useRef(null);
  const [rotateY, setRotateY] = useState(0);

  function handleMouseMove(event) {
    const maxAngleX = 3.5;
    const maxAngleY = 3;
    const sensitivity = 100;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setRotateX(((mouseX - centerX) / centerX) * maxAngleX);
    setRotateY(((centerY - mouseY) / centerY) * maxAngleY);
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
    const { removeEventListener } = ref.current;

    ref.current.addEventListener("mousemove", handleMouseMove);
    ref.current.addEventListener("mouseout", handleMouseLeave);

    return () => {
      removeEventListener("mousemove", handleMouseMove);
      removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <ParallaxBanner
      ref={ref}
      style={{
        "--rotate-x": `${rotateY}deg`,
        "--rotate-y": `${rotateX}deg`,
      }}
      className="overflow-hidden perspective-1000"
      speed={0.5}
    >
      <div className="transform-gpu transform-style-3d lg:rotate-x-[var(--rotate-x)] lg:rotate-y-[var(--rotate-y)] transition-transform ease-out duration-1000 will-change-transform transform-3d relative">
        <div className="w-screen h-screen scale-[1.2] relative -translate-z-[50px]">
          <Image
            src={bg}
            className="object-cover object-center pointer-events-none"
            placeholder="blur"
            alt=""
            fill={true}
            priority
          />
        </div>{" "}
        <Image
          src={bg1}
          placeholder="blur"
          className="object-cover object-center pointer-events-none absolute inset-0 lg:translate-z-[110px] "
          alt="veggie plate"
          fill
          priority
        />
        <Image
          src={bg2}
          placeholder="blur"
          className="object-cover object-center pointer-events-none absolute inset-0 lg:translate-z-[130px] "
          alt="veggie plate"
          fill
          priority
        />
        <Image
          src={fog}
          className="pointer-events-none w-screen absolute inset-0 translate-z-[200px]"
          alt="fog"
        />
        <Image
          src={droplets1}
          alt="water droplets (1)"
          className="pointer-events-none lg:block hidden absolute right-0 bottom-0  h-full translate-z-[270px] scale-[0.85] lg:translate-x-[50%] lg:translate-y-[5%] xl:translate-x-[40%] xl:translate-y-[3%] 2xl:translate-x-[30%]"
        />
        <Image
          src={droplets2}
          alt="water droplets (2)"
          className="pointer-events-none lg:block hidden absolute left-0 bottom-0 h-full lg:h-[90%] translate-z-[270px] scale-[0.85] lg:-translate-x-1/2 lg:translate-y-[7%] xl:-translate-x-[40%] xl:translate-y-[10%] 2xl:-translate-x-[30%]"
        />
        <Image
          src={leaves1}
          alt="leaves (1)"
          className={
            "pointer-events-none lg:block hidden absolute left-0 top-0 lg:w-[55%] xl:w-[45%] 2xl:w-[40%] translate-z-[400px] xl:scale-[0.8] lg:-translate-x-[15%] xl:-translate-y-[5%] xl:translate-x-0"
          }
        />
        <Image
          src={leaves2}
          alt="leaves (2)"
          className={
            "pointer-events-none lg:block hidden absolute right-0 bottom-0 lg:w-[60%] xl:w-[50%] 2xl:w-[40%] translate-z-[400px] scale-[0.6] lg:translate-x-[8%] lg:translate-y-[15%] 2xl:-translate-x-[15%] 2xl:translate-y-[5%]"
          }
        />
        <div className="w-full h-screen flex flex-col items-center justify-center text-white absolute inset-0 space-y-2 lg:translate-z-[270px] lg:scale-[0.55] xl:scale-[0.7] 2xl:scale-[0.8]">
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
            className="w-[700px]  pointer-events-none select-none"
          />
          <h2 className="font-2xl w-[650px] max-w-[95vw] text-center">
            Healthy, high end vegetarian & vegan dishes sourced from authentic
            farms all across the world
          </h2>
          <Link href={"/reserve"}>
            <button className="bg-[#d0b577] hover:bg-[#d1c19c] active:bg-[#c6ba9d] py-1 px-8 mt-3 text-black">
              Make a Reservation
            </button>
          </Link>
        </div>
      </div>
    </ParallaxBanner>
  );
}

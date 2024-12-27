"use client";

import AnimatedNumber from "@/components/AnimatedNumber";
import Image from "next/image";
import logoImage from "/public/images/logo.jpg";

export default function Statistics() {
  return (
    <div
      className={
        "bg-white w-full flex flex-col items-center justify-center h-[300vh]"
      }
    >
      <div className={"flex flex-row w-full justify-between items-center "}>
        <div
          className={"pl-[12%] h-fit w-1/3 flex items-center justify-center"}
        >
          <Image src={logoImage} alt={"logo"} width={300} className={"h-max"} />
        </div>

        <div
          className={
            "px-[12%] flex flex-col w-2/3 text-4xl justify-center pt-[5%]"
          }
        >
          <AnimatedNumber
            targetNumber={4_326_994_192}
            targetString={"4,000,000,000"}
            startingFraction={0.5}
            duration={1000}
            extraStyle={"text-7xl"}
          />
          <p className={"pb-[10%]"}>
            What we&#39;re doing to keep abusing children
          </p>

          <AnimatedNumber
            targetNumber={4_291_496_623}
            targetString={"4,000,000,000"}
            startingFraction={0.5}
            duration={1000}
            extraStyle={"text-7xl"}
          />
          <p className={"pb-[10%]"}>
            What we&#39;re doing to keep abusing children
          </p>

          <AnimatedNumber
            targetNumber={4_000_000_000}
            targetString={"4,000,000,000"}
            startingFraction={0.5}
            duration={1000}
            extraStyle={"text-7xl"}
          />
          <p className={"pb-[10%]"}>
            What we&#39;re doing to keep abusing children
          </p>
        </div>
      </div>
    </div>
  );
}

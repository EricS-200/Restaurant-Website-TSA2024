"use client";

import Image from "next/image";
import HorizontalScroll from "@/components/HorizontalScroll";
import food from "@/public/placeholders/Vegetarian-Food-Bowl.jpg";

export default function Home() {
  return (
    <main className=" pt-64 pb-4">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScroll className="">
        <Image src={food} alt="" className="min-w-[600px]" />
        <Image src={food} alt="" className="w-1/2" />
        <Image src={food} alt="" className="w-1/2" />
        <Image src={food} alt="" className="w-1/2" />
        <Image src={food} alt="" className="w-1/2" />
        <Image src={food} alt="" className="w-1/2" />
        <Image src={food} alt="" className="w-1/2" />
        <Image src={food} alt="" className="w-1/2" />
        <Image src={food} alt="" className="w-1/2" />
      </HorizontalScroll>
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
        {/* <div className="h-[100vh]">
          <div className="st  icky top-0 flex h-screen items-center overflow-hidden">
            <motion.div className={"flex gap-4 ml-4 overflow-hidden"}>
              <Image src={food} alt="" className="w-[1000000000000000000px]" />
              <Image src={food} alt="" className="w-[1000000000000000000px]" />
              <Image src={food} alt="" className="w-[1000000000000000000px]" />
              <Image src={food} alt="" className="w-[1000000000000000000px]" />
              <Image src={food} alt="" className="w-[1000000000000000000px]" />
              <Image src={food} alt="" className="w-[1000000000000000000px]" />
            </motion.div>
          </div>
        </div> */}
      </div>
    </main>
  );
}

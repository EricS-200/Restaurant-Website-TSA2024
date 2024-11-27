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
      <HorizontalScroll>
        <Image src={food} alt="" />
        <Image src={food} alt="" />
        <Image src={food} alt="" />
        <Image src={food} alt="" />
        <Image src={food} alt="" />
        <Image src={food} alt="" />
        <Image src={food} alt="" />
        <Image src={food} alt="" />
        <Image src={food} alt="" />
      </HorizontalScroll>
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </main>
  );
}

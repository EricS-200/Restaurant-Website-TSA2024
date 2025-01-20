"use client";

import HorizontalScroll from "@/components/HorizontalScroll";
import SnappingCarousel from "@/components/SnappingCarousel";

import { cn } from "@/utils/utils";

import Link from "next/link";
import Image from "next/image";

import nuts from "@/public/home/nuts.png";
import onions from "@/public/home/onions.png";
import radish from "@/public/home/radish.png";
import entree1 from "@/public/menu/entree1.png";
import entree2 from "@/public/menu/entree2.png";
import entree3 from "@/public/menu/entree3.png";
import entree4 from "@/public/menu/entree4.png";
import special1 from "@/public/menu/special1.png";
import special2 from "@/public/menu/special2.png";
import special3 from "@/public/menu/special3.png";

export default function MenuPreview() {
  const horizontalScrollElementClassName =
    "lg:w-[470px] transition-transform duration-500 lg:hover:scale-125 w-[95vw] md:w-1/2 px-[25px]"; // makes it easy to edit
  return (
    <>
      <HorizontalScroll
        scrollTime={3.5}
        className="lg:block hidden"
        header={
          <div className="relative w-full">
            <h3 className="pointer-events-none select-none absolute inset-0 font-mistrully text-[#a38060] text-9xl  opacity-25 text-center text-[10rem]">
              Featured Dishes
            </h3>
            <h2 className="text-7xl font-dm text-[#755d48] text-center relative">
              Featured Dishes
            </h2>
          </div>
        }
        footer={
          <Link href="/menu" className="z-50">
            <button className="bg-[#1e5541] hover:bg-[#2a7d5f] active:bg-[#2b6651] px-[64px] py-1 text-white">
              Explore Our Menu
            </button>
          </Link>
        }
        layout={
          <>
            <Image
              src={nuts}
              alt="nuts image"
              className="absolute w-[400px] left-0 top-12 xl:block hidden xl:-translate-x-[25%] -rotate-[20deg]"
            />
            <Image
              src={radish}
              alt="radish image"
              className="absolute w-[400px] xl:block hidden bottom-0 -rotate-[20deg] -translate-x-[20%]"
            />
            <Image
              src={onions}
              alt="onions image"
              className="absolute w-[400px] xl:block hidden right-0 top-0 translate-x-[10%] -translate-y-[10%]"
            />
          </>
        }
      >
        <div className="flex pl-4 gap-x-24 w-fit">
          <DishCard src={entree1} name="hi" price={25} />
          <DishCard src={entree2} name="hi" price={25} />
          <DishCard src={entree3} name="hi" price={25} />
          <DishCard src={entree4} name="hi" price={25} />
          <DishCard src={special1} name="hi" price={25} />
          <DishCard src={special2} name="hi" price={25} />
          <DishCard src={special3} name="hi" price={25} />
        </div>
      </HorizontalScroll>
      <div className="flex pl-4 gap-x-24 w-fit">
        <DishCard src={entree1} name="hi" price={25} />
        <DishCard src={entree2} name="hi" price={25} />
        <DishCard src={entree3} name="hi" price={25} />
        <DishCard src={entree4} name="hi" price={25} />
        <DishCard src={special1} name="hi" price={25} />
        <DishCard src={special2} name="hi" price={25} />
        <DishCard src={special3} name="hi" price={25} />
      </div>
    </>
  );
}

const DishCard = ({ src, name, price }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[400px] flex-shrink-0">
      <Image
        alt=""
        placeholder="blur"
        src={src}
        className={
          "w-full transition-transform duration-500 lg:hover:scale-125"
        }
        onDragStart={(e) => e.preventDefault()}
      />
      <p className="font-seasons text-4xl text-[#03402a] mt-4">{name} </p>
      <p className="text-2xl mt-2">${price}</p>
    </div>
  );
};

{
  /* <Image
            alt=""
            placeholder="blur"
            src={entree2}
            className={horizontalScrollElementClassName}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={entree3}
            className={horizontalScrollElementClassName}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={entree4}
            className={horizontalScrollElementClassName}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={special1}
            className={horizontalScrollElementClassName}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={special2}
            className={horizontalScrollElementClassName}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={special3}
            className={horizontalScrollElementClassName}
            onDragStart={(e) => e.preventDefault()}
          /> */
}

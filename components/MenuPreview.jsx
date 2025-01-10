"use client";

import HorizontalScroll from "@/components/HorizontalScroll";
import SnappingCarousel from "@/components/SnappingCarousel";

import { cn } from "@/utils/utils";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

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
        className="bg-white lg:block hidden"
        header={
          <h2 className="text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r bg-amber-500 text-center">
            Featured Dishes{" "}
          </h2>
        }
        footer={
          <Link href="/menu">
            <Button>Our Full Menu</Button>
          </Link>
        }
      >
        <div className="flex pl-4 gap-x-24">
          {" "}
          <Image
            alt=""
            placeholder="blur"
            src={entree1}
            className={horizontalScrollElementClassName}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
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
          />
        </div>
      </HorizontalScroll>

      <section className="h-screen bg-white flex flex-col items-center justify-evenly lg:hidden">
        <h2 className="text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r bg-amber-500 text-center">
          Featured Dishes{" "}
        </h2>
        <SnappingCarousel>
          <Image
            alt=""
            placeholder="blur"
            src={entree1}
            className={cn(horizontalScrollElementClassName, "")}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={entree2}
            className={cn(horizontalScrollElementClassName, "")}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={entree3}
            className={cn(horizontalScrollElementClassName, "")}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={entree4}
            className={cn(horizontalScrollElementClassName, "")}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={special1}
            className={cn(horizontalScrollElementClassName, "")}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={special2}
            className={cn(horizontalScrollElementClassName, "")}
            onDragStart={(e) => e.preventDefault()}
          />
          <Image
            alt=""
            placeholder="blur"
            src={special3}
            className={cn(horizontalScrollElementClassName, "")}
            onDragStart={(e) => e.preventDefault()}
          />
        </SnappingCarousel>
        <Link href="/menu">
          <Button>Our Full Menu</Button>
        </Link>
      </section>
    </>
  );
}

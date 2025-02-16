"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import appetizer1 from "@/public/menu/appetizer1.png";
import appetizer2 from "@/public/menu/appetizer2.png";
import appetizer3 from "@/public/menu/appetizer3.png";
import entree1 from "@/public/menu/entree1.png";
import entree2 from "@/public/menu/entree2.png";
import entree3 from "@/public/menu/entree3.png";
import entree4 from "@/public/menu/entree4.png";
import side1 from "@/public/menu/side1.png";
import side2 from "@/public/menu/side2.png";
import side3 from "@/public/menu/side3.png";
import side4 from "@/public/menu/side4.png";
import special1 from "@/public/menu/special1.png";
import special2 from "@/public/menu/special2.png";
import special3 from "@/public/menu/special3.png";

export default function menu() {
  const [cardOpen, setCardOpen] = useState(true);

  useEffect(() => {
    if (cardOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cardOpen]);

  function MenuCard({ name, desc, src }) {
    return (
      <>
        <div className="h-[360px] w-[250px] bg-white flex flex-col items-center justify-center p-4 m-16 group ">
          <Image
            src={src}
            placeholder="blur"
            className="w-[200px] group-hover:scale-[1.1] transition-all duration-500"
            alt={name}
          />
          <p className="font-seasons font-semibold text-xl text-[#03402a] mt-2">
            {name}
          </p>
          <p className="text-base text-[#9da57f] font-seasons">{desc}</p>
          <button className="mt-auto w-[90%]  bg-[#1e5541] text-white">
            View More
          </button>
        </div>
        <div
          className={`fixed inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[101] flex items-center justify-center ${
            cardOpen ? "block" : "hidden  "
          }`}
        >
          <div className="w-[500px] h-[500px] bg-white"></div>
        </div>
      </>
    );
  }

  return (
    <main className="w-full h-full overflow-x-clip relative">
      <div
        onClick={() => {
          setCardOpen(false);
        }}
        className={`fixed z-[100] inset-0 w-screen h-screen bg-black opacity-60 ${
          cardOpen ? "block" : "hidden"
        }`}
      ></div>
      <section className=" w-full h-screen"></section>
      <section className="w-full flex flex-col items-center justify-center py-16">
        <div className="relative w-full flex justify-center items-center flex-col">
          <div className="absolute bg-black w-[50px] h-[50px] left-[10%] translate-x-[15px]"></div>
          <input
            type="text"
            className=" w-[80%] pl-[80px] pr-4 py-4 text-2xl font-seasons"
            placeholder="Search for a dish!"
          />
        </div>
        <div className="w-[78%] flex mt-4 gap-x-8">
          <button className="bg-[#de7008] flex-1 py-1 text-center text-white">
            Side Dishes
          </button>
          <button className="bg-[#e29953] flex-1 py-1 text-center text-white">
            Appetizers
          </button>
          <button className="bg-[#d5b928] flex-1 py-1 text-center text-white">
            Entrees
          </button>
          <button className="bg-[#d0b577] flex-1 py-1 text-center text-white">
            Specials
          </button>
          <button className="bg-[#9da57f] flex-1 py-1 text-center text-white">
            Drinks
          </button>
          <button className="bg-[#1e5541] flex-1 py-1 text-center text-white">
            Desserts
          </button>
        </div>
      </section>
      <section>
        <div className="relative mx-[100px] flex justify-center w-fit">
          <h2 className="text-6xl font-dm text-center text-[#755d48]">
            Side Dishes
          </h2>
          <h3 className="text-[#a38060] absolute font-mistrully opacity-20 text-9xl inset-0 pointer-events-none select-none text-nowrap -translate-x-1/2">
            Side Dishes
          </h3>
        </div>

        <MenuCard src={side1} name="Hi" desc="a very nice dish...." />
      </section>
      <section className="mt-12 w-full">
        <div className="relative mr-[100px] flex justify-center ">
          <h2 className="text-6xl font-dm text-right w-full">Appetizers</h2>
          <h3 className="absolute font-mistrully opacity-20 text-9xl right-0 pointer-events-none select-none text-nowrap translate-x-[20%]">
            Appetizers
          </h3>
        </div>
      </section>
      <section>
        <div className="relative mx-[100px] flex justify-center w-fit">
          <h2 className="text-6xl font-dm text-center text-[#755d48]">
            Entrees
          </h2>
          <h3 className="text-[#a38060] absolute font-mistrully opacity-20 text-9xl inset-0 pointer-events-none select-none text-nowrap -translate-x-1/2">
            Entrees
          </h3>
        </div>
      </section>
      <section className="mt-12 w-full">
        <div className="relative mr-[100px] flex justify-center ">
          <h2 className="text-6xl font-dm text-right w-full">Specials</h2>
          <h3 className="absolute font-mistrully opacity-20 text-9xl right-0 pointer-events-none select-none text-nowrap translate-x-[20%]">
            Specials
          </h3>
        </div>
      </section>
      <section>
        <div className="relative mx-[100px] flex justify-center w-fit">
          <h2 className="text-6xl font-dm text-center text-[#755d48]">
            Drinks
          </h2>
          <h3 className="text-[#a38060] absolute font-mistrully opacity-20 text-9xl inset-0 pointer-events-none select-none text-nowrap -translate-x-1/2">
            Drinks
          </h3>
        </div>
      </section>
      <section className="mt-12 w-full">
        <div className="relative mr-[100px] flex justify-center ">
          <h2 className="text-6xl font-dm text-right w-full">Desserts</h2>
          <h3 className="absolute font-mistrully opacity-20 text-9xl right-0 pointer-events-none select-none text-nowrap translate-x-[20%]">
            Desserts
          </h3>
        </div>
      </section>
    </main>
  );
}

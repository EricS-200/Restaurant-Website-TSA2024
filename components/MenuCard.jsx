"use client";

import Button from "./Button";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function MenuCard({
  name,
  vegan,
  type,
  spice = 0,
  shortDescription = "",
  description = "",
  overlaySwitchFunction,
  setOverlayElement,
  display,
  src,
  price,
}) {
  const [cardOpen, setCardOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {

    if (cardOpen) {
      let overlayElement = (
        <div className={"fixed top-1/2 right-[-25%] -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"}>

          <div className="md:hidden">
            <div className="w-[90vw] mx-[5%] h-fit py-[5%] translate-x-[12.5%] bg-white flex flex-col place-items-center">
              <div className="">
                <button onClick={() => { overlaySwitchFunction(); setCardOpen(false) }} className="absolute top-0 right-0 w-[2vw] h-[2vw] rounded-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="w-[40%] h-fit">
                <Image
                  src={src}
                  placeholder="blur"
                  className="w-full h-auto hover:scale-[1.1] transition-all duration-500"
                  alt={name}
                />
                <p className="text-4xl xl:text-6xl text-[#03402a] text-center my-[5%]">${price}</p>
              </div>

              <div className="px-[2%]">
                <p className="font-seasons font-semibold text-4xl xl:text-6xl text-[#03402a] text-center my-[5%]">{name}</p>
                <p className="text-2xl font-seasons mb-[5%] text-center">{vegan ? "Vegan" : "Vegetarian"}</p>
                <p className="text-lg text-[#9da57f] font-seasons text-center">{description}</p>
              </div>

            </div>
          </div>

          {/*Desktop*/}
          <div className="hidden md:block">
            <div className="w-[75vw] h-fit bg-white flex flex-row place-items-center">

              <div className="">
                <button onClick={() => { overlaySwitchFunction(); setCardOpen(false) }} className="absolute top-0 right-0 w-[2vw] h-[2vw] rounded-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="w-[40%] flex flex-col justify-center">
                <div className="relative aspect-[4/4]">
                  <Image
                    src={src}
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                    alt={name}
                    className="hover:scale-[1.1] transition-all duration-500"
                  />
                </div>
                <p className="text-4xl xl:text-6xl text-[#03402a] text-center my-[5%]">${price}</p>
              </div>

              <div className="w-[60%] px-[2%]">
                <p className="font-seasons font-semibold text-4xl xl:text-6xl text-[#03402a] text-center my-[5%]">{name}</p>
                <p className="text-2xl font-seasons mb-[5%] text-center">{vegan ? "Vegan" : "Vegetarian"}</p>
                <p className="text-lg text-[#9da57f] font-seasons mb-[5%] text-center">{description}</p>
              </div>

            </div>
          </div>
        </div>
      );

      document.body.style.overflow = "hidden";
      setOverlayElement(overlayElement);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cardOpen]);

  if (!display) {
    return <></>;
  }

  return (
    <>
      <div className="min-h-[61vh] sm:min-h-[40vh] h-auto w-[275px] sm:w-[275px] md:w-[325px] lg:w-[300px] xl:w-[350px] bg-white flex flex-col flex-wrap items-center justify-center p-4 group">

        <Image
          src={src}
          placeholder="blur"
          className="w-[80%] hover:scale-[1.1] transition-all duration-500"
          alt={name}
        />

        <p className="font-seasons font-semibold text-2xl xl:text-3xl text-[#03402a] text-center my-[5%]">{name}</p>
        <p className="text-lg text-[#9da57f] font-seasons mb-[5%] text-center">{shortDescription}</p>

        <button className="mt-auto w-[90%]  bg-[#1e5541] text-white" onClick={() => { overlaySwitchFunction(); setCardOpen(true) }}>
          View More
        </button>

      </div>
    </>
  );
}

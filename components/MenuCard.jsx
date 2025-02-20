"use client";

import Button from "./Button";
import Image from "next/image";
import {useState, useRef, useEffect} from "react";

export default function MenuCard({
  name,
  vegan = false,
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
        <div className={"fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"}>
          <div className="w-[50vw] h-[50vh] bg-white flex flex-col place-items-center">
    
            <div className="">
              <Button onClick={() => {overlaySwitchFunction(); setCardOpen(false)}} className="absolute top-0 right-0 rounded-[0]">X</Button>
            </div>
    
            <Image
                src={src}
                placeholder="blur"
                className="w-auto h-[50%] group-hover:scale-[1.1] transition-all duration-500"
                alt={name}
            />
    
            <p className="w-[70%] text-lg text-[#9da57f] font-seasons mb-[5%] text-center">{description}</p>
    
          </div>
        </div>
      );

      document.body.style.overflow = "hidden";
      setOverlayElement(overlayElement);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cardOpen]);

  if (!display)
  {
    return <></>;
  }

  return (
    <>
    <div className="min-h-[61vh] sm:min-h-[50vh] h-auto w-[275px] sm:w-[275px] md:w-[325px] lg:w-[300px] xl:w-[350px] bg-white flex flex-col flex-wrap items-center justify-center p-4 group">

      <Image
          src={src}
          placeholder="blur"
          className="w-[80%] group-hover:scale-[1.1] transition-all duration-500"
          alt={name}
      />

      <p className="font-seasons font-semibold text-2xl xl:text-3xl text-[#03402a] text-center my-[5%]">{name}</p>
      <p className="text-lg text-[#9da57f] font-seasons mb-[5%] text-center">{shortDescription}</p>

      <button className="mt-auto w-[90%]  bg-[#1e5541] text-white" onClick={() => {overlaySwitchFunction(); setCardOpen(true)}}>
        View More
      </button>

    </div>
  </>
  );
}

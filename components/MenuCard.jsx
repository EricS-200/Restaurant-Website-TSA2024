"use client";

import Button from "./Button";
import Image from "next/image";
import {useState, useRef, useEffect} from "react";

export default function MenuCard({
  name,
  vegan = false,
  type,
  spice = 0,
  description = "",
  src,
  price,
  extraTopStyle = ""
}) {
  const [cardOpen, setCardOpen] = useState(false);

  useEffect(() => {
    if (cardOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cardOpen]);

  function MenuCardNew({ name, desc, src }) {
    return (
        <>
          <div className="h-[55vh] w-[20%] bg-white flex flex-col items-center justify-center p-4 group">
            <Image
                src={src}
                placeholder="blur"
                className="w-[80%] group-hover:scale-[1.1] transition-all duration-500"
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
            <div className="w-[50vw] h-[50vh] bg-white"></div>
          </div>
        </>
    );
  }

  return (
      <MenuCardNew name={name} src={src} desc={description}/>
  );
}

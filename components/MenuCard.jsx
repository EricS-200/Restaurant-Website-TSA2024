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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  function closeCard() {
    setOpen(false);
  }

  function openCard() {
    setOpen(true);
  }

  return (
    <>
    <div className={`${open ? "fixed inset-0 flex items-center justify-center z-50 bg-transparent" : "hidden"}`}>
      <div className={"relative flex items-center justify-center z-50 bg-red-50 w-[50vw] h-[75vh]"}>
        <Button onClick={closeCard} className="absolute top-0 right-0 rounded-[0]">X</Button>
      </div>
    </div>
    <div
      className={`px-4 pt-4 pb-3 drop-shadow-2xl shadow-2xl rounded-md bg-white flex flex-col items-center justify-center max-h-[85vh] w-[25vw] ${extraTopStyle}`}
      onClick={openCard}
    >
      <Image src={src} alt={"Image of" + name} className="max-h-[35vh] w-auto" />
      <h4 className="font-bold text-center leading-normal">{name}</h4>
      <div
        className={`text-base leading-normal transition-all duration-500 menu-description ${
          open ? "open" : ""
        }`}
      >
        <p>{description}</p>
      </div>
      <p className="mb-1">${price}</p>
      <Button
        className={
          "card-bg-nochange text-base rounded-sm w-full hover:bg-zinc-900"
        }
      >
        More Info
      </Button>
    </div>
    </>
  );
}

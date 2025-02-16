"use client";

import Button from "./Button";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

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
  const [transform, setTransform] = useState("");
  const cardRef = useRef(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  function closeCard() {
    setTransform("");
    setOpen(false);
  }

  function openCard() {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const translateX = centerX - (rect.left + rect.width / 2);
      const translateY = centerY - (rect.top + rect.height / 2);

      setTransform(`translate(${translateX}px, ${translateY}px) scale(1.2)`);
      setOpen(true);
    }
  }

  return (
    <div
      className={`menu-card px-4 pt-4 pb-3 drop-shadow-2xl shadow-2xl rounded-md bg-white flex flex-col items-center 
        justify-center transition-all duration-500 group cursor-pointer max-h-[80vh] ${open ? "w-96" : "w-64"} 
        ${extraTopStyle}
        `
      }
      onClick={open ? closeCard : openCard}
      style={{ transform }}
      ref={cardRef}
    >
      <Image src={src} alt={"Image of" + name} className="" />
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
        Order
      </Button>
    </div>
  );
}

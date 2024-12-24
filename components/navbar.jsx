"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Dropdown from "@/components/Dropdown";
import logoImage from "/public/images/logo.jpg";

export default function Navbar() {
  const pages = ["Our Story", "Menu", "Community", "Order Now"];
  const dropdownAboutFoodOptions = [
    { name: "Sustainability", url: "/sustainability" },
    { name: "Farm to Table", url: "/farmToTable" },
    { name: "Preparation", url: "/preparation" },
  ];

  let pageMap = new Map();
  pageMap.set(pages[0], "/ourStory");
  pageMap.set(pages[1], "/menu");
  pageMap.set(pages[2], "/community");
  pageMap.set(pages[3], "/order");

  const currentPage = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  {
    /*Prevent scrolling when mobile nav is open*/
  }
  useEffect(() => {
    if (isMobileNavOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMobileNavOpen]);

  function returnLink(name, isBold, isMobile = false) {
    const link = pageMap.get(name);

    if (isMobile) {
      return (
        <Link
          href={link}
          className={`group mt-1 text-md`}
          onClick={() => setIsMobileNavOpen(false)}
        >
          <span className={`${isBold ? "" : ""}`}> {name} </span>
        </Link>
      );
    } else {
      return (
        <Link href={link} className={"group relative"}>
          <span className={`${isBold ? "" : ""}`}> {name} </span>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-sky-600 absolute inset-x-0 bottom-[1px]" />
        </Link>
      );
    }
  }

  function returnOrderNowLink(isBold) {
    const name = pages[3];
    const link = pageMap.get(name);

    return (
      <Link href={link} className={"group"}>
        <span className={`${isBold ? "font-bold" : "font-normal"}`}>
          {name}
        </span>
      </Link>
    );
  }

  return (
    <>
      {/*Mobile Navbar*/}
      <div className={"lg:hidden"}>
        <div
          className={`fixed top-0 ${
            show ? "translate-y-0" : "-translate-y-full"
          } w-full bg-white transition-transform duration-500`}
        >
          <button onClick={() => setIsMobileNavOpen(true)} className="p-4">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/*Mobile Nav gray Overlay*/}
        <div
          className={`${
            isMobileNavOpen ? "block" : "hidden"
          } fixed inset-0 bg-gray-800 bg-opacity-80 z-30`}
          onClick={() => setIsMobileNavOpen(false)}
        />

        <div
          className={`fixed top-0 h-full left-0 w-1/2  bg-white shadow-lg transform ${
            isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <div className="flex flex-col items-start px-4">
            <div className={"flex flex-row pt-5 w-full"}>
              <Link href={"/"} className={"flex flex-col"}>
                <Image src={logoImage} alt={"logo"} height={50} />
              </Link>

              <button
                onClick={() => setIsMobileNavOpen(false)}
                className="ml-auto p-2"
              >
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

            <div className="flex flex-col gap-x-8 gap-y-4 mt-4">
              {returnLink(
                pages[0],
                currentPage === pageMap.get(pages[0]),
                true
              )}
              {returnLink(
                pages[1],
                currentPage === pageMap.get(pages[1]),
                true
              )}


              <Dropdown
                  name={"About Our Food"}
                  options={dropdownAboutFoodOptions}
                  extraStyle={""}
              />

              {returnLink(
                pages[2],
                currentPage === pageMap.get(pages[3]),
                true
              )}
              {returnLink(
                pages[3],
                currentPage === pageMap.get(pages[4]),
                true
              )}
            </div>
          </div>
        </div>
      </div>

      {/*Desktop Navbar*/}
      <div className={"hidden lg:block"}>
        <div
          className={`transform-gpu active ${
            show ? "translate-y-0" : "-translate-y-full"
          } fixed top-0 z-50 w-full flex justify-center items-center transition-transform duration-500`}
        >
          <div className="shadow-lg bg-white/20 backdrop-blur-lg rounded-2xl mt-4 container flex h-16 max-w-max items-center justify-center px-10 sticky flex-row gap-16">
            <Link href={"/"} className={"flex flex-col"}>
              <Image src={logoImage} alt={"logo"} height={50} />
            </Link>

            <div className="flex flex-row gap-x-8 h-full items-center justify-center text-lg">
              {returnLink(pages[0], currentPage === pageMap.get(pages[0]))}
              {returnLink(pages[1], currentPage === pageMap.get(pages[1]))}
              <Dropdown
                name={"About Our Food"}
                options={dropdownAboutFoodOptions}
                extraStyle={""}
              />
              {returnLink(pages[2], currentPage === pageMap.get(pages[2]))}
              <div className={"bg-gray-300/50 rounded-2xl py-1 px-2 flex"}>
                {returnOrderNowLink(currentPage === pageMap.get(pages[3]))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

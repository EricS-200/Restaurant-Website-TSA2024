"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Dropdown from "@/components/Dropdown";
import logoImage from "/public/logo.png";

export default function Navbar() {
  const pages = ["Our Story", "Menu", "Community", "Order Now"];
  const dropdownAboutFoodOptions = [
    { name: "Sustainability", url: "/sustainability" },
    { name: "Farm to Table", url: "/farmToTable" },
    { name: "Preparation", url: "/preparation" },
  ];

  const aboutUsDropdown = [
    { name: "Our Story", url: "/our-story" },
    { name: "Reference", url: "/reference" },
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
    if (window.scrollY >= lastScrollY && window.scrollY > 56) setShow(false);
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
          <span className={`${isBold ? "text-black" : "text-black"}`}>
            {" "}
            {name}{" "}
          </span>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-black  absolute inset-x-0 bottom-[1px]" />
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
      <div className="h-[55px] md:hidden"></div>
      <div className={"lg:hidden"}>
        <div
          className={`fixed inset-0 h-fit w-full z-50 ${
            show ? "translate-y-0" : "-translate-y-full"
          } w-full bg-white transition-transform duration-500`}
        >
          <button onClick={() => setIsMobileNavOpen(true)} className="p-4 ml-2">
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
          className={`fixed top-0 h-full left-0 min-w-[250px] w-2/3 bg-white shadow-lg transform ${
            isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 z-50`}
        >
          <div className="flex flex-col items-start px-4">
            <div className={"flex flex-row pt-5 w-full"}>
              <Link href={"/"}>
                <button
                  onClick={() => setIsMobileNavOpen(false)}
                  className={"flex items-center space-x-2"}
                >
                  <Image src={logoImage} alt={"logo"} height={50} />
                  <h1 className="text-xl font-bold">CraftRoots</h1>
                </button>
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

            <div className="flex flex-col gap-y-2 ml-6 mt-4">
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
          <div className="shadow-lg bg-white/20 after:absolute after:inset-0 after:w-full after:h-full after:z-[-1] after:rounded-2xl after:block after:backdrop-blur-lg rounded-2xl mt-4 container flex h-16 max-w-max items-center justify-center px-10 sticky flex-row">
            <Link href={"/"} className={"flex items-center mr-8"}>
              <Image src={logoImage} alt={"logo"} height={50} />
              <p className="ml-2 font-bold">CraftRoots</p>
            </Link>

            <div className="flex flex-row gap-x-8 h-full items-center justify-center text-lg">
              {/* {returnLink(pages[0], currentPage === pageMap.get(pages[0]))} */}
              {returnLink(pages[1], currentPage === pageMap.get(pages[1]))}
              <Dropdown
                name="About Us"
                options={aboutUsDropdown}
                // extraStyle={"absolute z-[100]"}
              />
              <Dropdown
                name={"About Our Food"}
                options={dropdownAboutFoodOptions}
              />
              {returnLink(pages[2], currentPage === pageMap.get(pages[2]))}
              <div className={"bg-gray-300/50  rounded-2xl py-1 px-2 flex"}>
                {returnOrderNowLink(currentPage === pageMap.get(pages[3]))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

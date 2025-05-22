"use client";
import React from "react";
import Link from "next/link";
import icon from "@/public/images/icons/craftroots-logo-old-1e5541.png";
import twitter from "@/public/images/icons/twitter-square-color-icon.png";
import facebook from "@/public/images/icons/facebook-round-color-icon.png";
import instagram from "@/public/images/icons/ig-instagram-icon.png";
import youtube from "@/public/images/icons/youtube-color-icon.png";
import Image from "next/image";

export default function StyledFooter() {
  return (
    <footer className="flex flex-col bg-[#d0b577] font-seasons">
      <div className="py-2 md:py-4 w-full flex flex-row justify-around md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
        {
          // name and logo div, katherine wants this to scroll left & repeat
        }
        <Link
          target=""
          href="/"
          locale=""
          className="hover:underline flex flex-row transition-all"
        >
          <Image
            src={icon}
            alt="CraftRoots Logo"
            width={100}
            height={100}
            className="w-9 md:w-16 lg:w-24 xl:w-24"
          ></Image>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#03402a] hover:text-[#277156] delay-50 transition-all">
            CraftRoots
          </h1>
        </Link>
      </div>
      <div className="flex flex-row justify-evenly h-56 text-[#03402a] font-dm">
        {
          // columns div
        }
        <div className="flex flex-col place-content-evenly md:place-content-between">
          {
            // column 1 (our story, community)
          }
          <div className="flex flex-col justify-center text-center">
            {
              // Our Story
            }
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
              About Us
            </h1>
            <p>
              <Link
                target=""
                href="/about-us"
                locale=""
                className="hover:underline hover:text-slate-500 transition-all delay-100"
              >
                Our Story
              </Link>
            </p>
            <p>
              <Link
                target=""
                href="/reference"
                className="hover:underline hover:text-slate-500 transition-all delay-100"
                locale=""
              >
                References
              </Link>
            </p>
          </div>
          <div className="flex flex-col justify-center text-center">
            {
              // Community
            }
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
              Community
            </h1>
            <div className="flex flex-row justify-evenly pb-2">
              {
                // socials icons
              }
              <Link
                href="https://twitter.com/officialahs_tsa"
                target="_blank"
                className="hover:scale-110 transition-all"
              >
                <Image
                  src={twitter}
                  alt="Twitter Square Icon"
                  width="36"
                  height="36"
                ></Image>
              </Link>
              <Link
                href="https://www.youtube.com/@National_TSA"
                target="_blank"
                className="hover:scale-110 transition-all"
              >
                <Image
                  src={youtube}
                  alt="Youtube Icon"
                  width="36"
                  height="36"
                ></Image>
              </Link>
              <Link
                href="https://www.instagram.com/ky_tsa/"
                target="_blank"
                className="hover:scale-110 transition-all"
              >
                <Image
                  src={instagram}
                  alt="Instagram Square Icon"
                  width="36"
                  height="36"
                ></Image>
              </Link>
              <Link
                href="https://www.facebook.com/thekytsa/"
                target="_blank"
                className="hover:scale-110 transition-all"
              >
                <Image
                  src={facebook}
                  alt="Facebook Round Icon"
                  width="36"
                  height="36"
                ></Image>
              </Link>
            </div>
            <Link href="mailto:general@tsaweb.org" target="_blank">
              <button className="px-5 text-xl md:text-2xl lg:text-3xl bg-lime-800 hover:bg-lime-600 text-green-100 hover:text-white transition-all delay-100 leading-10 rounded-full justify-self-center">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col place-content-around md:place-content-between">
          {
            // column 2 (about our food, menu)
          }
          <div className="flex flex-col justify-center text-center">
            {
              // About our Food
            }
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
              About our Food
            </h1>
            <p>
              <Link
                target=""
                href="/sustainability"
                locale=""
                className="hover:underline hover:text-slate-500 transition-all delay-100"
              >
                Sustainability
              </Link>
            </p>
            <p>
              <Link
                target=""
                href="/farm-to-table"
                locale=""
                className="hover:underline hover:text-slate-500 transition-all delay-100"
              >
                Farm-to-Table
              </Link>
            </p>
            <p>
              <Link
                target=""
                href="/preparation"
                locale=""
                className="hover:underline hover:text-slate-500 transition-all delay-100"
              >
                Preparation
              </Link>
            </p>
          </div>
          <div className="flex flex-col justify-items-center text-center">
            {
              // Menu
            }
            <Link
              target=""
              href="/menu"
              locale=""
              className="hover:underline hover:text-slate-600 transition-all delay-100"
            >
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
                Menu
              </h1>
            </Link>
            <Link target="" href="/reserve" locale="">
              <button className="w-[200px] text-xl md:text-2xl lg:text-3xl bg-orange-500 hover:bg-orange-400 text-amber-100 hover:text-white transition-all delay-100 leading-10 rounded-full justify-self-center">
                Make Reservation
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-3/5 justify-evenly flex flex-row place-self-center py-5 lg:mt-10">
        {
          // legal & socials div
        }
        <p className="text-sm md:text-md">Privacy Policy</p>
        <p className="text-sm md:text-md">Terms and Conditions</p>
        <p className="text-sm md:text-md">USDA Permits</p>
      </div>
    </footer>
  );
}

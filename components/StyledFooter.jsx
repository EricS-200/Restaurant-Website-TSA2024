"use client";

import React from "react";
import Link from "next/link";
import icon from "@/public/images/icons/transparent icon.png";
import twitter from "@/public/images/icons/twitter-square-color-icon.png";
import facebook from "@/public/images/icons/facebook-round-color-icon.png";
import instagram from "@/public/images/icons/ig-instagram-icon.png";
import youtube from "@/public/images/icons/youtube-color-icon.png";
import Image from "next/image";
export default function StyledFooter() {
    return (
        <footer className="flex flex-col bg-lime-100">
            <div className="w-full flex flex-row justify-start">
                {
                    // name and logo div, katherine wants this to scroll left & repeat
                }
                <Image
                    src={icon}
                    alt="CraftRoots Logo"
                    width={100}
                    height={100}
                ></Image>
                <h1 className="text-8xl font-bold">
                    CraftRoots
                </h1>
            </div>
            <div className="flex flex-row justify-evenly">
                {
                    // sections n shit div
                }
                <div className="flex flex-col content-around">
                    {
                        // column 1 (our story, community)
                        
                    }
                    <div className="flex flex-col justify-center text-center">
                            {
                                // Our Story
                            }
                            <h1 className="text-4xl font-bold">
                                About Us
                            </h1>
                            <p>
                                <Link
                                target=""
                                href="/ourStory"
                                locale=""
                                className="hover:underline hover:text-slate-500 transition-all delay-100"
                                >
                                    Our Story
                                </Link>
                            </p>
                            <p>
                                <Link
                                target=""
                                href="/references"
                                className="hover:underline hover:text-slate-500 transition-all delay-100"
                                locale="">
                                References
                                </Link>
                            </p>
                    </div>
                    <div>
                        {
                            // Community
                        }
                        <h1 className="text-4xl font-bold">
                            Community
                        </h1>
                        <div className="flex flex-row justify-evenly">
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
                                height="36">
                                </Image>
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
                                height="36">
                                </Image>
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
                                height="36">
                                </Image>
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
                                height="36">
                                </Image>
                            </Link>
                            
                        </div>
                        <Link
                        href="mailto:general@tsaweb.org"
                        target="_blank"
                        >
                            <button className="px-5 text-3xl bg-lime-800 hover:bg-lime-600 text-green-100 hover:text-white transition-all delay-100 leading-10 rounded-full">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col content-around">
                    {
                        // column 2 (about our food, menu)
                    }
                </div>
            </div>
            <div>
                {
                    // legal & socials div
                }
            </div>
        </footer>
    )
}
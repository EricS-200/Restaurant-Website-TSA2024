"use client"

import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logoImage from "/public/images/logo.jpg";

export default function Navbar() {
    const pages = ["Menu", "About our food", "Our Story", "Order Now", "Community"];

    let pageMap = new Map();
    pageMap.set(pages[0], "/menu");
    pageMap.set(pages[1], "/aboutFood");
    pageMap.set(pages[2], "/ourStory");
    pageMap.set(pages[3], "/orderNow");
    pageMap.set(pages[4], "/community");


    const currentPage = usePathname();
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);


    const controlNavbar = () => {
        if (window.scrollY > lastScrollY)
            setShow(false);
        else
            setShow(true);

        setLastScrollY(window.scrollY);
    };


    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);


    {/*Prevent scrolling when mobile nav is open*/}
    useEffect(() => {
        if (isMobileNavOpen)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "auto";
    }, [isMobileNavOpen]);


    function returnLink(name, isBold, isMobile = false) {
        const link = pageMap.get(name);

        if (isMobile)
        {
            return (
                <Link href={link} className={`group mt-1 text-md`} onClick={() => setIsMobileNavOpen(false)}>
                    <span className={`${isBold ? "font-bold" : "font-normal"}`}> {name} </span>
                </Link>
            );
        }
        else
        {
            return (
                <Link href={link} className={`group text-xl`}>
                    <span className={`${isBold ? "font-bold" : "font-normal"}`}> {name} </span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"/>
                </Link>
            );
        }
    }

    return (
        <>
            {/*Mobile Navbar*/}
            <div className={"lg:hidden"}>
                <div
                    className={`fixed top-0 ${show ? "translate-y-0" : "-translate-y-full"} w-full bg-white transition-transform duration-500`}>
                    <button onClick={() => setIsMobileNavOpen(true)} className="p-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </button>
                </div>

                {/*Mobile Nav gray Overlay*/}
                <div className={`${isMobileNavOpen ? "block" : "hidden"} fixed inset-0 bg-gray-800 bg-opacity-80 z-30`} onClick={() => setIsMobileNavOpen(false)}/>

                <div className={`fixed top-0 h-full left-0 w-1/2  bg-white shadow-lg transform ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
                    <div className="flex flex-col items-start p-4">
                        <button onClick={() => setIsMobileNavOpen(false)} className="self-end p-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>

                        <Link href={"/"} className={"flex flex-col ml-3"}>
                            <Image src={logoImage} alt={"logo"} height={50}/>
                        </Link>

                        {pages.map((page, index) => (
                            <div key={index} className="mt-4 ml-3">
                                { returnLink(page, currentPage === pageMap.get(page), true) }
                            </div>
                        ))}

                    </div>
                </div>
            </div>


            {/*Desktop Navbar*/}
            <div className={"hidden lg:block"}>
                <div className={`transform-gpu active ${show ? 'translate-y-0' : '-translate-y-full'} fixed top-0 z-50 w-full flex justify-center items-center transition-transform duration-500`}>
                    <div className="shadow-lg bg-white/20 backdrop-blur-lg rounded-xl mt-4 container flex h-16 max-w-max items-center justify-center px-10 sticky flex-row gap-16">

                        <Link href={"/"} className={"flex flex-col"}>
                            <Image src={logoImage} alt={"logo"} height={50}/>
                        </Link>

                        { pages.map((page, index) => (
                                <div key={index} className="mt-2">
                                    { returnLink(page, currentPage === pageMap.get(page)) }
                                </div>
                        )) }

                    </div>
                </div>
            </div>

        </>
    );
}


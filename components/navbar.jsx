"use client"
import Link from "next/link";
import {useEffect, useState} from "react";


function returnLink(name) {
    return (
        <Link href={"/"} className={"group mt-1 text-xl"}>
            {name}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"/>
        </Link>
    );
}

export default function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setShow(false);
        } else { // if scroll up show the navbar
            setShow(true);
        }

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div className={`transform-gpu active ${show ? 'translate-y-0' : '-translate-y-full'} fixed top-0 z-50 w-full flex justify-center items-center transition-transform duration-500`} id={"navbar"}>
            <div className="shadow-lg bg-white/20 backdrop-blur-lg rounded-xl mt-4 container flex h-14 max-w-max items-center justify-center px-10 sticky flex-row gap-16">
                {returnLink("Menu")}
                {returnLink("About our food")}
                {returnLink("Our Story")}
                {returnLink("Order Now")}
                {returnLink("Community")}
            </div>
        </div>
    );
}


"use client"
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <header className="fixed top-0 z-50 w-full justify-center hidden md:flex">
                <div className="shadow-lg bg-white/20 backdrop-blur-lg rounded-xl mt-4 container flex h-14 max-w-max items-center justify-center px-10">
                    <div className="sticky flex flex-row gap-10 ">
                        <Link href={"/"} className={"group transition duration-300 mt-1 text-xl"}>
                            Menu
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"/>
                        </Link>

                        <Link href={"/"} className={"group transition duration-300 mt-1 text-xl"}>
                            About our food
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"/>
                        </Link>

                        <Link href={"/"} className={"group transition duration-300 mt-1 text-xl"}>
                            Our Story
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"/>
                        </Link>

                        <Link href={"/"} className={"group transition duration-300 mt-1 text-xl"}>
                            Order Now
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"/>
                        </Link>

                        <Link href={"/"} className={"group transition duration-300 mt-1 text-xl"}>
                            Community
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600"/>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
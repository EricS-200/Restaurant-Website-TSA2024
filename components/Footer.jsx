"use client";

import React from 'react';
import Link from "next/link";

/*
known problem: idk what im doing
*/
export default function IgnoreThis() {
    return(
        <footer className=" bg-slate-900 w-full text-[ffffff] flex-col">
            <div className="flex justify-around text-slate-300">
                <div className="flex-col w-1/4 content-evenly">
                    <h2 className="pl-1 text-xl font-bold mt-1">
                        Filler Text
                    </h2>
                    <h2 className="pl-1 text-xl font-bold mt-1">
                        Filler Text 2
                    </h2>
                </div>
                <div className="flex-col w-1/4 content-evenly">
                    <p className="flex items-center mb-1 text-center">
                        <Link
                            target="_blank"
                            href="https://www.google.com"
                            className="hover:text-slate-400 hover:underline hover:transition-all"
                        >
                        Four
                        </Link>
                    </p>
                    <p className="flex items-center mb-1 text-center">
                        <Link
                            target="_blank"
                            href=""
                            className="hover:text-slate-400 hover:underline hover:transition-all"
                        >
                        Clone this tab
                        </Link>
                    </p>
                </div>
                <div className="flex-col w-1/4 content-evenly">
                    <h2 className="pl-1 text-xl font-bold mt-1">
                        Filler Text 3
                    </h2>
                    <h2 className="pl-1 text-xl font-bold mt-1">
                        Filler Text 4
                    </h2>
                </div>
                <div className="flex-col w-1/4 content-evenly">
                    <p className='flex items-center mb-1 text-center text-slate-300'>
                        <Link
                            target="_blank"
                            href="https://www.google.com"
                            className="hover:text-slate-400 hover:underline hover:transition-all"
                        >
                        Six
                        </Link>
                    </p>
                    <p className='flex items-center mb-1 text-center text-slate-300'>
                        <Link
                            target="_blank"
                            href="https://www.twitch.tv/filian"
                            className="hover:text-slate-400 hover:underline hover:transition-all"
                        >
                        Seven
                        </Link>
                    </p>
                    </div>
            </div>
        </footer>
    )
}
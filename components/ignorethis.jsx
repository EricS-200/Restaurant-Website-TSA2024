"use client";

import React from 'react';
import Link from "next/link";

/*
known problem: idk what im doing
*/
export default function IgnoreThis() {
    return(
        <footer className=" bg-slate-900 w-full text-[ffffff] flex-col">
            <div className="flex justify-between justify-items-center text-slate-300 px-8">
                <h2 className="pl-1 text-xl font-bold mt-1">
                    Filler Text
                </h2>
                <p className="flex items-center mb-1 text-center">
                    <Link
                        target="_blank"
                        href="https://www.google.com"
                    >
                    Four
                    </Link>
                </p>
                <h2 className="pl-1 text-xl font-bold mt-1 text-slate-300">
                    Filler Text 3
                </h2>
                <p className='flex items-center mb-1 text-center text-slate-300'>
                    <Link
                        target="_blank"
                        href="https://www.google.com"
                    >
                    Six
                    </Link>
                </p>
            </div>
            <div className="flex justify-between justify-items-center text-slate-300 px-8">
                <h2 className="pl-1 text-xl font-bold mt-1">
                    Filler Text 2
                </h2>
                <p className="flex items-center mb-1 text-center">
                    <Link
                        target="_blank"
                        href=""
                    >
                    Clone this tab
                    </Link>
                </p>
                <h2 className="pl-1 text-xl font-bold mt-1 text-slate-300">
                    Filler Text 4
                </h2>
                <p className='flex items-center mb-1 text-center text-slate-300'>
                    <Link
                        target="_blank"
                        href="https://www.twitch.tv/filian"
                    >
                    Seven
                    </Link>
                </p>
            </div>
        </footer>
    )
}
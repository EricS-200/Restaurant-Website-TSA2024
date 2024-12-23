"use client";

import React from 'react';
import Link from "next/link";

/*
known problem: idk what im doing
*/
export default function IgnoreThis() {
    return(
        <footer className=" bg-[#104040] w-full text-[ffffff] flex">
            <div className="flex justify-around justify-items-center">
                <h2 className="pl-1 text-xl font-bold mt-1">
                    Filler Text
                </h2>
                <p className="flex items-center mb-1 text-center">
                    <Link
                        target="_blank"
                        href="https://www.desmos.com/calculator?=nographpaper"
                    >
                    Four
                    </Link>
                </p>
                <h2 className="pl-1 text-xl font-bold mt-1">
                    Filler Text 2
                </h2>
                <p className="flex items-center mb-1 text-center">
                    <Link
                        target="_blank"
                        href="https://www.google.com"
                    >
                    Five
                    </Link>
                </p>
            </div>
        </footer>
    )
}
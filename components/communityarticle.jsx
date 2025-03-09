"use client";


import Image from "next/image";
import {useState, useEffect} from "react";

export default function CommunityArticle({title, description, author, src}) {
    return (
        <div className={"flex-none w-[30vw] h-[50vh]"}>
            <div className={"relative w-full h-1/2"}>
                <Image
                    src={src}
                    alt={title}
                    fill={true}
                    objectFit="cover"
                ></Image>
                <div className={"absolute bottom-10 w-1/2 h-1/6 bg-[#de7008] text-white text-2xl justify-center content-center"}>
                    {author}
                </div>
            </div>
            <div className={"w-full h-1/2 bg-[#f0f0f0] p-2"}>
                <h1 className={"text-2xl py-2"}>{title}</h1>
                <p className={"text-sm text-pretty text-ellipsis flex-none w-full h-full"}>{description}</p>
            </div>
        </div>
    );
    }
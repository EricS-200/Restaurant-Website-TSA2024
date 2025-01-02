"use client";
import React from "react";
import SimpleBanner from "@/components/SimpleParallaxBanner"
export default function TitleBanner({
    children,
    className = "",
    speed = 0,
    src,
    alt = "",
    innerClassName = "",
    text = "",
    ...props
  }) {
    return (
    <div className="place-content-center">
    <SimpleBanner
    src={src}
    className={className+" sticky top-0 absolute"}
    speed={speed}
    priority="true"
    />
    <h1 className="text-center pt-32 pb-8 text-9xl font-bold">
        {text}
    </h1>
    </div>
    );
}
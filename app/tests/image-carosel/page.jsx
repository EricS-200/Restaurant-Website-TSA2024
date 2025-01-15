"use client"

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";

const ImageTrack = () => {
    const [mouseDownAt, setMouseDownAt] = useState("0");
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const trackRef = useRef(null);

    const images = [
        "/menu/appetizer1.png",
        "/menu/appetizer2.png",
        "/menu/appetizer3.png",
        "/menu/entree1.png",
        "/menu/entree2.png",
        "/menu/entree3.png",
        "/menu/side1.png",
        "/menu/side2.png"
    ];

    const handleOnDown = (e) => {
        setMouseDownAt(e.clientX.toString());
    };

    const handleOnUp = () => {
        setMouseDownAt("0");
        setPrevPercentage(percentage);
    };

    const handleOnMove = (e) => {
        if (mouseDownAt === "0") return;

        const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;

        const nextPercentageUnconstrained = prevPercentage + (mouseDelta / maxDelta) * -100;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        setPercentage(nextPercentage);

        if (trackRef.current) {
            trackRef.current.animate(
                {
                    transform: `translate(${nextPercentage}%, -50%)`
                },
                { duration: 1200, fill: "forwards" }
            );

            const imageElements = trackRef.current.getElementsByClassName("track-image");
            for (const image of imageElements) {
                image.animate(
                    {
                        objectPosition: `${100 + nextPercentage}% center`
                    },
                    { duration: 1200, fill: "forwards" }
                );
            }
        }
    };

    useEffect(() => {
        window.onmousedown = handleOnDown;
        window.ontouchstart = e => handleOnDown(e.touches[0]);
        window.onmouseup = handleOnUp;
        window.ontouchend = e => handleOnUp(e.touches[0]);
        window.onmousemove = handleOnMove;
        window.ontouchmove = e => handleOnMove(e.touches[0]);

        return () => {
            // Cleanup event listeners
            window.onmousedown = null;
            window.ontouchstart = null;
            window.onmouseup = null;
            window.ontouchend = null;
            window.onmousemove = null;
            window.ontouchmove = null;
        };
    }, [mouseDownAt, prevPercentage, percentage]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <div className="h-screen w-screen bg-black m-0">
            <div
                ref={trackRef}
                className="flex gap-[4vmin] absolute left-1/2 top-1/2 -translate-y-1/2 select-none"
                style={{ transform: `translate(${percentage}%, -50%)` }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        className="track-image w-[40vmin] h-[56vmin] object-cover"
                        src={src}
                        alt={`Track image ${index + 1}`}
                        draggable="false"
                        style={{ objectPosition: `${100 + percentage}% center` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageTrack;
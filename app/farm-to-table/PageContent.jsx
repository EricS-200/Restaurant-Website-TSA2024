"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import image1 from "@/public/videos/video1Img.jpg";
import image2 from "@/public/videos/video2Img.jpg";
import image3 from "@/public/videos/video3Img.jpg";
import image4 from "@/public/videos/video4Img.jpg";
import image5 from "@/public/videos/video5Img.jpg";

  function GetPage1Content() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
    return (
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="relative w-full h-full">
            {!isVideoLoaded && (
            <Image
                src={image1}
                alt="Video placeholder"
                className={`absolute inset-0 w-full h-full z-10 object-cover object-center ${isVideoLoaded ? "hidden" : ""}`}
                priority={"true"}
            />
            )}
          <video
            className={`absolute inset-0 w-full h-full z-20 object-cover object-center ${isVideoLoaded ? "" : "hidden"}`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            priority={"true"}
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>

          <p className="absolute top-[20vh] left-[20vw] w-[80vw] lg:top-[45vh] lg:right-[5vw] lg:w-[30vw] z-30 text-white font-medium font-seasons sm:text-xl lg:text-2xl">
            The essence of farm to table is the use of fresh local produce to serve nothing but the best to our loyal customers. 
            By supporting local farms, we can help nourish the local community both economically and gastronomically.
          </p>
        </div>
      </div>
    );
  }
  
  const GetPage2Content = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    return (
        <div className="relative w-full h-full flex justify-center items-center">
        <div className="relative w-full h-full">
            {!isVideoLoaded && (
            <Image
                src={image2}
                alt="Video placeholder"
                className={`absolute inset-0 w-full h-full z-10 object-cover object-center ${isVideoLoaded ? "hidden" : ""}`}
                priority={"true"}
            />
            )}
          <video
            className={`absolute inset-0 w-full h-full z-20 object-cover object-center ${isVideoLoaded ? "" : "hidden"}`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            priority={"true"}
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  };
  
  const GetPage3Content = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    return (
        <div className="relative w-full h-full flex justify-center items-center">
        <div className="relative w-full h-full">
            {!isVideoLoaded && (
            <Image
                src={image3}
                alt="Video placeholder"
                className={`absolute inset-0 w-full h-full z-10 object-cover object-center ${isVideoLoaded ? "hidden" : ""}`}
                priority={"true"}
            />
            )}
          <video
            className={`absolute inset-0 w-full h-full z-20 object-cover object-center ${isVideoLoaded ? "" : "hidden"}`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            priority={"true"}
          >
            <source src="/videos/video3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  };
  
  const GetPage4Content = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    return (
        <div className="relative w-full h-full flex justify-center items-center">
        <div className="relative w-full h-full">
            {!isVideoLoaded && (
            <Image
                src={image4}
                alt="Video placeholder"
                className={`absolute inset-0 w-full h-full z-10 object-cover object-center ${isVideoLoaded ? "hidden" : ""}`}
                priority={"true"}
            />
            )}
          <video
            className={`absolute inset-0 w-full h-full z-20 object-cover object-center ${isVideoLoaded ? "" : "hidden"}`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            priority={"true"}
          >
            <source src="/videos/video4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  };
  
  const GetPage5Content = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    return (
        <div className="relative w-full h-full flex justify-center items-center">
        <div className="relative w-full h-full">
            {!isVideoLoaded && (
            <Image
                src={image5}
                alt="Video placeholder"
                className={`absolute inset-0 w-full h-full z-10 object-cover object-center ${isVideoLoaded ? "hidden" : ""}`}
                priority={"true"}
            />
            )}
          <video
            className={`absolute inset-0 w-full h-full z-20 object-cover object-center ${isVideoLoaded ? "" : "hidden"}`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            priority={"true"}
          >
            <source src="/videos/video5.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  };


  export { GetPage1Content, GetPage2Content, GetPage3Content, GetPage4Content, GetPage5Content };

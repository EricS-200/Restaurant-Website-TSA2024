"use client";

import Image from "next/image";
import React, { useState } from "react";

import image1 from "@/public/videos/video1Img.jpg";
import image2 from "@/public/videos/video2Img.jpg";
import image3 from "@/public/videos/video3Img.jpg";
import image4 from "@/public/videos/video4Img.jpg";
import image5 from "@/public/videos/video5Img.jpg";
import AnimatedPing from "@/components/AnimatedPing";

  function GetPage1Content() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
    return (
      <div className="relative w-full h-[100vh] flex justify-center items-center">
        <div className="relative w-full h-full">
          <video
            className={`absolute inset-0 w-full h-full z-20 object-cover object-center`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => {setIsVideoLoaded(true)}}
          >
            {!isVideoLoaded && (
                <Image
                    src={image1}
                    alt="Video placeholder"
                    className={`absolute inset-0 w-full h-full z-10 object-cover object-center ${isVideoLoaded ? "hidden" : ""}`}
                    priority={"true"}
                />
            )}
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-[10vh] sm:top-[20vh] left-[5vw] lg:left-[5vw] z-30">
            <p className="text-6xl xl:text-7xl text-white mb-[5%] font-seasons">
              Farm To Table
            </p>
            <p className="text-4xl text-white font-seasons">
              Overview
            </p>
            <AnimatedPing extraStyle={"w-fit"}>
              <p className="text-4xl text-white font-seasons mt-[10%] sm:mt-[20%] w-fit">
                Click Anywhere
              </p>
            </AnimatedPing>
          </div>

          <div className="hidden lg:block">
            <p className="absolute top-[30vh] right-[10vw] w-[30vw] z-30 text-white font-medium font-seasons text-2xl xl:text-4xl">
              The essence of farm to table is the use of fresh local produce to serve nothing but the best to our loyal
              customers. By supporting local farms, we can help nourish the local community both economically and gastronomically.
            </p>
          </div>

          <div className="lg:hidden">
            <p className="absolute top-[50vh] left-[5vw] w-[80vw] z-30 text-white font-medium font-seasons text-2xl sm:text-3xl">
              The essence of farm to table is the use of fresh local produce to serve nothing but the best to our loyal customers. 
              By supporting local farms, we can help nourish the local community both economically and gastronomically.
            </p>
          </div>

        </div>
      </div>
    );
  }
  
  const GetPage2Content = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    return (
        <div className="relative w-full h-[100vh] flex justify-center items-center">
        <div className="relative w-full h-full">
          <video
            className={`absolute inset-0 w-full h-full z-20 object-cover object-center`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => {setIsVideoLoaded(true)}}
          >
            {!isVideoLoaded && (
                <Image
                    src={image2}
                    alt="Video placeholder"
                    className={`absolute inset-0 w-full h-full z-10 object-cover object-center ${isVideoLoaded ? "hidden" : ""}`}
                    priority={"true"}
                />
            )}
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-[10vh] sm:top-[20vh] left-[5vw] lg:left-[5vw] z-30">
            <p className="text-6xl xl:text-7xl text-white mb-[5%] font-seasons">
              Farm To Table
            </p>
            <p className="text-4xl text-white font-seasons">
              Preservatives
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="absolute top-[30vh] right-[10vw] w-[30vw] z-30 text-white font-medium font-seasons text-2xl xl:text-4xl">
            Because we can avoid the usage of preservatives in our food, our menu changes with the seasons so that we can provide nothing but the best all year. 
            We at Craftroots hope that our customers can understand this sacrifice of year round menu stability in exchange for optimal produce preparation.
            </p>
          </div>

          <div className="lg:hidden">
            <p className="absolute top-[40vh] left-[5vw] w-[90vw] z-30 text-white font-medium font-seasons text-2xl sm:text-3xl">
            Because we can avoid the usage of preservatives in our food, our menu changes with the seasons so that we can provide nothing but the best all year. 
            We at Craftroots hope that our customers can understand this sacrifice of year round menu stability in exchange for optimal produce preparation.
            </p>
          </div>

        </div>
      </div>
    );
  };
  
  const GetPage3Content = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    return (
        <div className="relative w-full h-[100vh] flex justify-center items-center">
        <div className="relative w-full h-full">
          <video
            className={`absolute inset-0 w-full h-full z-20 object-cover object-center`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => {setIsVideoLoaded(true)}}
          >
            {!isVideoLoaded && (
                <Image
                    src={image3}
                    alt="Video placeholder"
                    className={`absolute inset-0 w-full h-full z-10 object-cover object-center ${isVideoLoaded ? "hidden" : ""}`}
                    priority={"true"}
                />
            )}
            <source src="/videos/video3.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-[10vh] sm:top-[20vh] left-[5vw] lg:left-[5vw] z-30">
            <p className="text-6xl xl:text-7xl text-white mb-[5%] font-seasons">
              Farm To Table
            </p>
            <p className="text-4xl text-white font-seasons">
              Freshness
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="absolute top-[30vh] right-[10vw] w-[30vw] z-30 text-white font-medium font-seasons text-2xl xl:text-4xl">
              Freshness is invaluable to produce, and at Craftroots, we are committed to preserving it.
              Despite industrial methods like refrigeration and freezing,
              fruits and vegetables quickly lose flavor and nutrients over time.
              That’s why we prioritize sourcing locally—to uphold the high quality our customers deserve.
            </p>
          </div>

          <div className="lg:hidden">
            <p className="absolute top-[40vh] left-[5vw] w-[90vw] z-30 text-white font-medium font-seasons text-2xl sm:text-3xl">
              Freshness is invaluable to produce, and at Craftroots, we are committed to preserving it.
              Despite industrial methods like refrigeration and freezing,
              fruits and vegetables quickly lose flavor and nutrients over time.
              That’s why we prioritize sourcing locally—to uphold the high quality our customers deserve.
            </p>
          </div>

        </div>
      </div>
    );
  };
  
  const GetPage4Content = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    return (
        <div className="relative w-full h-[100vh] flex justify-center items-center">
        <div className="relative w-full h-full">
          <video
            className={`absolute inset-0 w-full h-full z-20 object-cover object-center`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => {setIsVideoLoaded(true)}}
          >
            {!isVideoLoaded && (
                <Image
                    src={image4}
                    alt="Video placeholder"
                    className={`absolute inset-0 w-full h-full z-10 object-cover object-center ${isVideoLoaded ? "hidden" : ""}`}
                    priority={"true"}
                />
            )}
            <source src="/videos/video4.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-[10vh] sm:top-[20vh] left-[5vw] lg:left-[5vw] z-30">
            <p className="text-6xl xl:text-7xl text-white mb-[5%] font-seasons">
              Farm To Table
            </p>
            <p className="text-4xl text-white font-seasons">
              Pesticides
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="absolute top-[30vh] right-[10vw] w-[40vw] z-30 text-white font-medium font-seasons text-2xl xl:text-4xl">
              The farming industry today fares no better than many others. Harmful preservatives like sorbates and
              benzoates are common on nutrition labels, and large farms often rely on cheap, hazardous pesticides.
              In contrast, local farms take greater care with pest control. By partnering with local farms,
              we can offer fresh, flavorful produce without the burden of unnecessary chemicals.
            </p>
          </div>

          <div className="lg:hidden">
            <p className="absolute top-[40vh] left-[5vw] w-[80vw] z-30 text-white font-medium font-seasons text-xl sm:text-3xl">
              The farming industry today fares no better than many others. Harmful preservatives like sorbates and
              benzoates are common on nutrition labels, and large farms often rely on cheap, hazardous pesticides.
              In contrast, local farms take greater care with pest control. By partnering with local farms,
              we can offer fresh, flavorful produce without the burden of unnecessary chemicals.
            </p>
          </div>

        </div>
      </div>
    );
  };
  
  const GetPage5Content = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    return (
        <div className="relative w-full h-[100vh] flex justify-center items-center">
        <div className="relative w-full h-full">
          <video
            className={`absolute inset-0 w-full h-full z-20 object-cover object-center`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => {setIsVideoLoaded(true)}}
          >
            {!isVideoLoaded && (
                <Image
                    src={image5}
                    alt="Video placeholder"
                    className={`absolute inset-0 w-full h-full z-10 object-cover object-center ${isVideoLoaded ? "hidden" : ""}`}
                    priority={"true"}
                />
            )}
            <source src="/videos/video5.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-[10vh] sm:top-[20vh] left-[5vw] lg:left-[5vw] z-30">
            <p className="text-6xl xl:text-7xl text-white mb-[5%] font-seasons">
              Farm To Table
            </p>
            <p className="text-4xl text-white font-seasons">
              Our Humanity
            </p>
          </div>



          <div className="hidden lg:block">
            <p className="absolute top-[30vh] right-[10vw] w-[40vw] z-30 text-white font-medium font-seasons text-2xl xl:text-4xl">
              Craftroots emphasizes human connection at every step, from vegetables handpicked and delivered by local farmers,
              to being stocked by our pantry chef, expertly prepared by our kitchen team, served by our staff, and
              enjoyed by our guests. Through these personal interactions, we help strengthen and support the community.
              These connections benefit the community as a whole.
            </p>
          </div>

          <div className="lg:hidden">
            <p className="absolute top-[40vh] left-[5vw] w-[80vw] z-30 text-white font-medium font-seasons text-xl sm:text-3xl">
              Craftroots emphasizes human connection at every step, from vegetables handpicked and delivered by local farmers,
              to being stocked by our pantry chef, expertly prepared by our kitchen team, served by our staff, and
              enjoyed by our guests. Through these personal interactions, we help strengthen and support the community.
              These connections benefit the community as a whole.
            </p>
          </div>

        </div>
      </div>
    );
  };


  export { GetPage1Content, GetPage2Content, GetPage3Content, GetPage4Content, GetPage5Content };

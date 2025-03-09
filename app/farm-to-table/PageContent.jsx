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

          <div className="absolute top-[10vh] sm:top-[30vh] left-[10vw] lg:left-[5vw] z-30">
            <p className="text-6xl xl:text-7xl text-white mb-[5%] font-seasons">
              Farm To Table
            </p>
            <p className="text-4xl text-white font-seasons">
              Overview
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="absolute top-[45vh] right-[5vw] w-[30vw] z-30 text-white font-medium font-seasons text-2xl xl:text-4xl">
              The essence of farm to table is the use of fresh local produce to serve nothing but the best to our loyal customers. 
              By supporting local farms, we can help nourish the local community both economically and gastronomically.
            </p>
          </div>

          <div className="lg:hidden">
            <p className="absolute top-[50vh] left-[10vw] w-[80vw] z-30 text-white font-medium font-seasons text-xl sm:text-3xl">
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

          <div className="absolute top-[10vh] sm:top-[30vh] left-[5vw] lg:left-[5vw] z-30">
            <p className="text-6xl xl:text-7xl text-white mb-[5%] font-seasons">
              Farm To Table
            </p>
            <p className="text-4xl text-white font-seasons">
              Preservatives
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="absolute top-[45vh] right-[5vw] w-[30vw] z-30 text-white font-medium font-seasons text-2xl xl:text-4xl">
            Because we can avoid the usage of preservatives in our food, our menu changes with the seasons so that we can provide nothing but the best all year. 
            We at Craftroots hope that our customers can understand this sacrifice of year round menu stability in exchange for optimal produce preparation.
            </p>
          </div>

          <div className="lg:hidden">
            <p className="absolute top-[50vh] left-[5vw] w-[90vw] z-30 text-white font-medium font-seasons text-xl sm:text-3xl">
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

          <div className="absolute top-[10vh] lg:top-[30vh] left-[5vw] lg:left-[5vw] z-30">
            <p className="text-6xl xl:text-7xl text-white mb-[5%] font-seasons">
              Farm To Table
            </p>
            <p className="text-4xl text-white font-seasons">
              Freshness
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="absolute top-[30vh] right-[10vw] w-[45vw] z-30 text-white font-medium font-seasons text-2xl xl:text-4xl">
            Freshness is of indescribable value to produce, and we at Craftroots do our utmost to honor that. 
            With time, the nutritional value and taste of fruits and vegetables rapidly decrease, even with commonly used industrial measures such as refrigeration and freezing. 
            For that reason, sourcing produce from local farms is of utmost importance to providing the level of quality that Craftroots seeks to serve our customers. 
            Even so, we aim to make the most of every vegetable we receive. From jams to pickles to soup stocks, anything that we can use is sure to be used.
            </p>
          </div>

          <div className="lg:hidden">
            <p className="absolute top-[35vh] left-[5vw] w-[90vw] z-30 text-white font-medium font-seasons text-xl sm:text-3xl">
            Freshness is of indescribable value to produce, and we at Craftroots do our utmost to honor that. 
            With time, the nutritional value and taste of fruits and vegetables rapidly decrease, even with commonly used industrial measures such as refrigeration and freezing. 
            For that reason, sourcing produce from local farms is of utmost importance to providing the level of quality that Craftroots seeks to serve our customers. 
            Even so, we aim to make the most of every vegetable we receive. From jams to pickles to soup stocks, anything that we can use is sure to be used.
            </p>
          </div>

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

          <div className="absolute top-[10vh] sm:top-[30vh] left-[10vw] lg:left-[5vw] z-30">
            <p className="text-6xl xl:text-7xl text-white mb-[5%] font-seasons">
              Farm To Table
            </p>
            <p className="text-4xl text-white font-seasons">
              Pesticides
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="absolute top-[30vh] right-[10vw] w-[45vw] z-30 text-white font-medium font-seasons text-2xl xl:text-4xl">
              The current state of the farming industry is no better than many other industries. 
              Preservative chemicals such as sorbates and benzoates, which commonly appear on nutrition labels, are undeniably detrimental to the human body. 
              Large farms also primarily use cheap and dangerous pesticides, while local farms can take more care in anti-pest measures. 
              By partnering with local farms such as Doe Organics and Three Sisters Farms, we can provide delicious greens and vegetables without the risk of unnecessary chemicals.
            </p>
          </div>

          <div className="lg:hidden">
            <p className="absolute top-[35vh] left-[10vw] w-[80vw] z-30 text-white font-medium font-seasons text-xl sm:text-3xl">
              The current state of the farming industry is no better than many other industries. 
              Preservative chemicals such as sorbates and benzoates, which commonly appear on nutrition labels, are undeniably detrimental to the human body. 
              Large farms also primarily use cheap and dangerous pesticides, while local farms can take more care in anti-pest measures. 
              By partnering with local farms such as Doe Organics and Three Sisters Farms, we can provide delicious greens and vegetables without the risk of unnecessary chemicals.
            </p>
          </div>

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

          <div className="absolute top-[10vh] lg:top-[30vh] left-[5vw] lg:left-[5vw] z-30">
            <p className="text-6xl xl:text-7xl text-white mb-[5%] font-seasons">
              Farm To Table
            </p>
            <p className="text-4xl text-white font-seasons">
              Our Humanity
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="absolute top-[30vh] right-[10vw] w-[45vw] z-30 text-white font-medium font-seasons text-2xl xl:text-4xl">
              Craftroots provides a connection between people, not machines, through every step of the way. 
              From vegetables hand picked and transported by local farmers to the same vegetables being stocked and tracked by our pantry chef, 
              to the same vegetables being prepared expertly by our chefs, to the same vegetables being served by our wait staff, 
              to the same vegetables being enjoyed by our customers, human connections can help us benefit the community as a whole.
            </p>
          </div>

          <div className="lg:hidden">
            <p className="absolute top-[35vh] left-[10vw] w-[80vw] z-30 text-white font-medium font-seasons text-xl sm:text-3xl">
              Craftroots provides a connection between people, not machines, through every step of the way. 
              From vegetables hand picked and transported by local farmers to the same vegetables being stocked and tracked by our pantry chef, 
              to the same vegetables being prepared expertly by our chefs, to the same vegetables being served by our wait staff, 
              to the same vegetables being enjoyed by our customers, human connections can help us benefit the community as a whole.
            </p>
          </div>

        </div>
      </div>
    );
  };


  export { GetPage1Content, GetPage2Content, GetPage3Content, GetPage4Content, GetPage5Content };

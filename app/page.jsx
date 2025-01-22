import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ParallaxBanner from "@/components/SimpleParallaxBanner";
import AnimatedNumber from "@/components/AnimatedNumber";

import MenuPreview from "@/components/MenuPreview";

import homeBanner from "@/public/placeholders/home-banner.jpg"; //placeholder

import logoImage from "/public/logo.png";

import ourStoryImage0 from "/public/homepage/ourStoryImage0.png";
import ourStoryImage1 from "/public/homepage/ourStoryImage1.png";
import katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter from "/public/homepage/katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter.png";


export default function Home() {
  return (
      <main className="">
        {/*Our Story*/}
        {ourStorySection()}

        {/*Menu preview*/}
        <MenuPreview/>

        {/*Statistics*/}
        <section
            className={"w-full flex flex-col items-center justify-center"}
        >
          <div className={"flex flex-row w-full justify-between items-center "}>
            <div
                className={"pl-[12%] h-fit w-1/3 flex items-center justify-center"}
            >
              <Image
                  src={logoImage}
                  alt={"logo"}
                  width={300}
                  className={"h-max"}
              />
            </div>

            <div
                className={
                  "px-[12%] flex flex-col w-2/3 text-md md:text-4xl justify-center md:pt-[5%]"
                }
            >
              <AnimatedNumber
                  targetNumber={4_326_994_192}
                  targetString={"4,000,000,000"}
                  startingFraction={0.5}
                  duration={1000}
                  extraStyle={"text-2xl md:text-7xl"}
              />
              <p className={"pb-[10%]"}>
                What we&#39;re doing to keep abusing children
              </p>

              <AnimatedNumber
                  targetNumber={4_291_496_623}
                  targetString={"4,000,000,000"}
                  startingFraction={0.5}
                  duration={1000}
                  extraStyle={"text-2xl md:text-7xl"}
              />
              <p className={"pb-[10%]"}>
                What we&#39;re doing to keep abusing children
              </p>

              <AnimatedNumber
                  targetNumber={4_000_000_000}
                  targetString={"4,000,000,000"}
                  startingFraction={0.5}
                  duration={1000}
                  extraStyle={"text-2xl md:text-7xl"}
              />
              <p className={"pb-[10%]"}>
                What we&#39;re doing to keep abusing children
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}

function ourStorySection() {
  return (
    <section className={"mb-[20vh] lg:h-[100vh] xl:h-[70vh] h-max"}>
      <div className={"bg-white w-[96%] md:w-[90%] h-max mx-[2%] md:ml-[5%] mt-[10%]"}>

        {/*Desktop Version*/}
        <div className={"hidden lg:block pb-[15vh] relative"}>
          <div className={"p-[2%] px-[4%] h-max flex flex-row"}>

            <div className={"w-1/2 relative"}>
              <h1 className={"text-7xl 2xl:text-8xl text-green-900 font-extrabold"}>
                Our Story
              </h1>
              <h1 className={"absolute w-[70vw] top-[-25%] xl:top-[-30%] left-[-25%] xl:left-[-20%] font-mistrully opacity-15 text-[10rem] lg:text-[12rem] 2xl:text-[14rem] pointer-events-none select-none text-clip text-green-900"}>
                Our Story
              </h1>
              <p className={"pt-[5%] pb-[15%] w-[90%] leading-8"}>
                Founded in 1999, we at Craftroots have been trying our absolute
                hardest to provide the best service possible. From our founders&apos;
                humble beginnings of working in South Indian textiles and Chinese
                manufacturing industries to their immigration to the United States, we
                now look to serve nothing but the best, using nothing but the freshest
                ingredients and most talented chefs.
              </p>

              <Link href={"/our-story"} className={"absolute bottom-0 left-0"}>
                <button className="bg-[#d0b577] hover:bg-[#d4b161] py-2 px-8 text-black text-md md:text-lg">
                  Our Story
                </button>
              </Link>
              <Link href={"/reference"} className={"absolute bottom-0 left-[max(10vw,35%)] 2xl:left-[min(10vw,20%)] triangle-clip-path"}>
                <button className="bg-[#9da57f] hover:bg-[#b0bf75] py-2 px-8 pr-20 text-black text-md md:text-lg">
                  References
                </button>
              </Link>
            </div>

            <div className={"w-1/2 justify-center items-center relative"}>
              <div className={"relative w-full h-full flex flex-row justify-center items-center"}>
                <div className={"flex h-[min(50vh,100%)]"}>
                  <Image src={ourStoryImage0} alt={"Image of table with food"} className={"object-cover object-center katherine-weird-border-rounding-web-dev-sucks-im-tilted-as-you-can-tell-screw-this-lmao-verbose-but-not-as-verbose-as-java"}/>
                </div>
                <Image src={ourStoryImage1} alt={"Plate with food"} className={"w-[50%] top-[min(45vh,90%)] xl:top-[min(35vh,70%)] left-[30vh] lg:left-[34vh] xl:left-[37vh] h-auto absolute"}/>
              </div>
            </div>

          </div>

          <Image src={katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter}
                 alt={"leafImage"}
                 className={"absolute bottom-[-25%] left-[-7vw] w-[20%] h-auto rotate-[35deg] pointer-events-none"}
          />
        </div>

        {/*Mobile Version*/}
        <div className={"lg:hidden p-[2%] mt-[10vh] h-max flex flex-col"}>
          <div className={"p-[2%] px-[1%] h-max flex flex-col"}>
            <div className={"w-full relative"}>
              <div className={"relative w-full h-full flex flex-row justify-center items-center"}>
                <div className={"flex h-[min(50vh,100%)]"}>
                  <Image src={ourStoryImage0} alt={"Image of table with food"}
                           className={"object-cover object-center katherine-weird-border-rounding-web-dev-sucks-im-tilted-as-you-can-tell-screw-this-lmao-verbose-but-not-as-verbose-as-java"}/>
                </div>
                <Image src={ourStoryImage1} alt={"Plate with food"} className={"w-[50%] top-[60%] left-[50%] h-auto absolute z-10"}/>
              </div>
            </div>

            <div className={"w-full relative"}>
              <h1 className={"text-7xl text-green-900 font-black pt-[7%]"}>
                Our
                <br/> {/*Crimes being commited here. oh well. */}
                Story
              </h1>
              <h1 className={"absolute h-[25%] w-[100vw] top-[5%] left-[-5%] pt-[2%] leading-snug font-mistrully opacity-20 text-[5.5rem] pointer-events-none text-clip text-green-900 overflow-x-hidden"}>
                Our Story
              </h1>
              <p className={"pt-[5%] pb-[45%] leading-8"}>
                Founded in 1999, we at Craftroots have been trying our absolute
                hardest to provide the best service possible. From our founders&apos;
                humble beginnings of working in South Indian textiles and Chinese
                manufacturing industries to their immigration to the United States, we
                now look to serve nothing but the best, using nothing but the freshest
                ingredients and most talented chefs.

                {/*Image being here is the most consistent way to get it to line up*/}
                <Image
                    src={katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter}
                    alt={"Image of leafs"}
                    className={"absolute bottom-[-13%] left-[-12vw] w-[50%] h-auto rotate-[35deg]"}
                />
              </p>

              <Link href={"/our-story"} className={"absolute bottom-[14%] left-0"}>
                <button className="bg-[#d0b577] hover:bg-[#d4b161] py-1 px-4 pr-6 text-black text-md">
                  Our Story
                </button>
              </Link>
              <Link href={"/reference"} className={"absolute bottom-[14%] left-[40%] triangle-clip-path"}>
                <button className="bg-[#9da57f] hover:bg-[#b0bf75] py-1 px-6 pr-14 text-black text-md">
                  References
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


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
    <section className={"mb-[20vh] lg:h-[100vh] h-max"}>
      <div className={"bg-white w-[90%] h-max ml-[5%] mt-[10%]"}>

        {/*Desktop Version*/}
        <div className={"hidden lg:block pb-[15vh] relative"}>
          <div className={"p-[2%] px-[4%] h-max flex flex-row"}>

            <div className={"w-1/2 relative"}>
              <h1 className={"text-7xl 2xl:text-8xl text-green-900 font-extrabold"}>
                Our Story
              </h1>
              <h1 className={"absolute w-[70vw] top-[-25%] xl:top-[-30%] left-[-25%] xl:left-[-20%] font-mistrully opacity-15 text-[10rem] lg:text-[12rem] 2xl:text-[14rem] select-none text-clip text-green-900"}>
                Our Story
              </h1>
              <p className={"pt-[5%] pb-[15%] w-[90%] leading-8"}>
                kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys
                kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys
                kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys
                kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys
                kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys
                kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys
                kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys
                kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys kys
                kys kys kys
              </p>

              <Link href={"/our-story"} className={"absolute bottom-0 left-0"}>
                <button className="bg-[#d0b577] hover:bg-[#d1c19c] active:bg-[#c6ba9d] py-2 px-8 text-black text-md md:text-lg">
                  Our Story
                </button>
              </Link>
              <Link href={"/reference"} className={"absolute bottom-0 left-[max(10vw,35%)] 2xl:left-[min(10vw,20%)] triangle-clip-path"}>
                <button className="bg-[#9da57f] hover:bg-[#9da57f] active:bg-[#9da57f] py-2 px-8 pr-20 text-black text-md md:text-lg">
                  References
                </button>
              </Link>
            </div>

            <div className={"w-1/2 justify-center items-center relative"}>
              <div className={"relative w-full h-full flex flex-row justify-center items-center"}>
                <div className={"flex h-[min(50vh,100%)]"}>
                  <Image src={ourStoryImage0} alt={"Image"} className={"object-cover object-center katherine-weird-border-rounding-web-dev-sucks-im-tilted-as-you-can-tell-screw-this-lmao-verbose-but-not-as-verbose-as-java"}/>
                </div>
                <Image src={ourStoryImage1} alt={"Image"} className={"w-[50%] top-[min(45vh,90%)] xl:top-[min(35vh,70%)] left-[30vh] lg:left-[34vh] xl:left-[37vh] h-auto absolute"}/>
              </div>
            </div>

          </div>

          <Image src={katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter}
                 alt={"leafImage"}
                 className={"absolute bottom-[-25%] left-[-2vw] w-[20%] h-auto rotate-[35deg]"}
          />
        </div>

        {/*Mobile Version*/}
        <div className={"lg:hidden p-[2%] px-[4%] mt-[10vh] h-max flex flex-col"}>
          <p className={"font-mistrully"}>
            Our Story kys!
          </p>
        </div>
      </div>
    </section>
  );
}


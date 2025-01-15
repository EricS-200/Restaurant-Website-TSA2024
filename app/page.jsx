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

export default function Home() {
  return (
    <main className="">
      {/*Our Story*/}
      <section className={"mb-[5vw] h-[100vh]"}>
        <div className={"bg-white w-[90%] h-[75%] ml-[5%] mt-[10%]"}>
          <div className={"p-[2%] px-[4%] flex flex-row"}>

            <div className={"w-1/2 relative"}>
              <h1 className={"text-4xl"}>
                Our Story kys!
              </h1>
              <p className={"pt-[5%] pb-[7%] w-[90%]"}>
                Add a little bit of body text Through this
                environment, I’ve found my own passion:
                electrical engineering and neuroscience. To me,
                they represent a bridge between what I’ve
                inherited and what I aspire to create. Like my
                family, I want to explore the unknown, but I also
                want to shape a world where science works as
                hard for us as we do for it. Still, I’ve learned
                something in my small town: the real magic of
                science lies in the people.
              </p>

              <Link href={"/our-story"} className={"absolute bottom-0 left-0 w-[20%]"}>
                <button className="bg-[#d0b577] hover:bg-[#d1c19c] active:bg-[#c6ba9d] py-1 px-8 mt-3 text-black">
                  Our Story
                </button>
              </Link>
              <Link href={"/reference"} className={"absolute bottom-0 left-[25%] triangle-clip-path katherine-green"}>
                <button className="bg-[#9da57f] hover:bg-[#9da57f] active:bg-[#9da57f] py-1 px-8 text-black">
                  References&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </button>
              </Link>

            </div>

            <div className={"w-1/2 justify-center items-center flex flex-row relative"}>
                <Image src={ourStoryImage0} alt={"Image"} className={"h-[100%] justify-center items-center"}/>
                <Image src={ourStoryImage1} alt={"Image"} className={"w-[40%] justify-center items-center absolute bottom-[-30%] right-[10%]"}/>
            </div>

          </div>
        </div>
      </section>

      <MenuPreview />

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

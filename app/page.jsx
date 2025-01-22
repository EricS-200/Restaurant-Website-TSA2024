import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import AnimatedNumber from "@/components/AnimatedNumber";
import HomePageBanner from "@/components/HomePageBanner";
import MenuPreview from "@/components/MenuPreview";
import GoldenImages from "@/components/GoldenImages";
import leaves3 from "@/public/home/leaves3.png";
import bowl from "@/public/home/bowl.png";
import spices from "@/public/home/spices.png";
import logoImage from "/public/logo.png";
import ourStoryImage0 from "/public/homepage/ourStoryImage0.png";
import ourStoryImage1 from "/public/homepage/ourStoryImage1.png";
import katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter from "/public/homepage/katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter.png";


export default function Home() {
  return (
    <main className="">
      <HomePageBanner />

      {/* Our Story. Does not work with parallax rn*/}
      {ourStorySection()}

      <MenuPreview />

      <section className="flex justify-evenly relative pt-6 overflow-x-clip">
        <Image
          src={leaves3}
          alt="leaves (3)"
          className="absolute -rotate-[25deg] w-[500px] right-0 top-0 -translate-y-[70%] translate-x-[25%] overflow-hidden lg:block hidden"
        />

        <div className="w-1/2">
          <div className="w-full h-full relative">
            <Image
              src={spices}
              className="absolute right-0 top-0 translate-x-[50%] rotate-45"
              alt=""
            />
            <Image
              src={bowl}
              alt="wooden bowl"
              className="-translate-x-[5%] max-w-[800px]"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-end pr-[140px]">
          <div className="pointer-events-none select-none relative flex flex-col w-full text-right mb-10">
            <h3 className="absolute right-0 top-0 font-mistrully text-[#9da57f] text-[12rem] leading-none shrink-0 opacity-25 text-nowrap">
              Our Impact
            </h3>
            <h2 className="text-[#1e5541] font-dm text-[6rem] leading-none z-50 ">
              Our Impact
            </h2>
          </div>

          <div className="flex flex-col items-end w-full">
            <AnimatedNumber
              targetNumber={3058134}
              targetString={"3,058,134"}
              startingFraction={0.5}
              duration={1000}
              className={"text-white text-9xl font-dm"}
            />
            <p className="text-right font-seasons text-[#9da57f] xl:max-w-[90%] text-2xl my-4">
              Math felt dry, physics seemed like endless equations on a
              chalkboard, and computer science felt like typing gibberish into a
              black screen.
            </p>
          </div>

          <div className="flex flex-col items-end w-full">
            <AnimatedNumber
              targetNumber={238134}
              targetString={"238,134 "}
              startingFraction={0.5}
              duration={1000}
              className={"text-white text-9xl font-dm"}
            />
            <p className="text-right font-seasons text-[#d5b928] xl:max-w-[90%] text-2xl my-4">
              Math felt dry, physics seemed like endless equations on a
              chalkboard, and computer science felt like typing gibberish into a
              black screen.
            </p>
          </div>

          <div className="flex flex-col items-end w-full">
            <AnimatedNumber
              targetNumber={12058134}
              targetString={"12,058,134"}
              startingFraction={0.5}
              duration={1000}
              className={"text-white text-9xl font-dm"}
            />
            <p className="text-right font-seasons text-[#e29953] xl:max-w-[90%] text-2xl my-4">
              Math felt dry, physics seemed like endless equations on a
              chalkboard, and computer science felt like typing gibberish into a
              black screen.
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


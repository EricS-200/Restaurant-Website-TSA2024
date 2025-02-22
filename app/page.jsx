import Image from "next/image";
import Link from "next/link";
import AnimatedNumber from "@/components/AnimatedNumber";
import HomePageBanner from "@/components/HomePageBanner";
import DraggableCarousel from "@/components/SnappingCarousel";
import MenuPreview from "@/components/MenuPreview";
import leaves3 from "@/public/home/leaves3.png";
import bowl from "@/public/home/bowl.png";
import spices from "@/public/home/spices.png";
import leaves4 from "@/public/home/leaves4.png";
import leaves5 from "@/public/home/leaves5.png";
import lettuce from "@/public/home/lettuce.png";
import tomatos from "@/public/home/tomatos.png";
import lemon from "@/public/home/lemon.png";
import mushroom from "@/public/home/mushroom.png";
import mushroom2 from "@/public/home/mushroom-outline.png";
import parsley from "@/public/home/parsley.png";
import fiveStars from "@/public/home/five-stars.png";
import pumpkin from "@/public/home/star-pumpkin.png";
import ClickToChange from "@/components/ClickToChange";

import ourStoryImage0 from "/public/homepage/ourStoryImage0.png";
import ourStoryImage1 from "/public/homepage/ourStoryImage1.png";
import katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter from "/public/homepage/katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter.png";
import tajMahal from "/public/homepage/tajmahal.png";

export default function Home() {
  return (
    <main className="">

      <HomePageBanner />

      <OurStorySection/>

      <MenuPreview />

      <section className="flex justify-evenly relative pt-6 overflow-x-clip h-full pb-12">
        <Image
          src={leaves3}
          alt="leaves (3)"
          className="absolute -rotate-[25deg] w-[500px] right-0 top-0 -translate-y-[70%] translate-x-[25%] overflow-hidden lg:block hidden"
        />

        <div className="w-1/2 hidden lg:block relative ">
          <Image
            src={parsley}
            alt=""
            className="absolute w-[500px] rotate-12 top-0 left-0 xl:left-12 -translate-y-[30%] z-20 lg:block hidden"
          />
          <Image
            src={lettuce}
            alt=""
            className="absolute top-0 left-0 w-[500px] -translate-y-1/2 xl:translate-x-1/4"
          />
          <Image
            src={mushroom2}
            alt=""
            className="absolute w-[500px] xl:bottom-0 bottom-[10%] right-0 2xl:translate-y-[20%]"
          />
          <Image
            src={lemon}
            alt=""
            className="absolute w-[500px] xl:bottom-0 bottom-[20%] translate-y-[25%] -translate-x-[20%] "
          />
          <Image
            src={spices}
            className="absolute right-0 top-0 translate-x-[50%] rotate-45"
            alt=""
          />
          <Image
            src={bowl}
            alt="wooden bowl"
            className="2xl:-translate-x-[15%] max-w-[800px] absolute right-0"
          />{" "}
          <Image
            src={mushroom}
            alt=""
            className="absolute w-[500px] right-[20%] top-[5%] -rotate-45 z-50"
          />
          <Image
            src={tomatos}
            alt=""
            className="absolute -rotate-45 w-[800px] lg:bottom-1/3 xl:bottom-1/4 2xl:bottom-0 right-0"
          />
        </div>
        <div className="w-[90vw] lg:w-1/2 flex flex-col items-end lg:pr-[140px] ">
          <div className="pointer-events-none select-none relative flex flex-col w-full text-right mb-10 ">
            <h3 className="absolute right-0 top-0 font-mistrully text-[#9da57f] text-[9rem] md:text-[12rem] leading-none shrink-0 opacity-25 text-nowrap md:block hidden">
              Our Impact
            </h3>
            <h2 className="text-[#1e5541] font-dm text-[6rem] leading-none z-50">
              Our Impact
            </h2>
          </div>

          <div className="flex flex-col items-end w-full">
            <AnimatedNumber
              targetNumber={3058134}
              targetString={"3,058,134"}
              startingFraction={0.5}
              duration={1000}
              className={"text-white text-7xl lg:text-9xl font-dm"}
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
              className={"text-white text-7xl lg:text-9xl font-dm"}
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
              className={"text-white text-7xl lg:text-9xl font-dm"}
            />
            <p className="text-right font-seasons text-[#e29953] xl:max-w-[90%] text-2xl my-4">
              Math felt dry, physics seemed like endless equations on a
              chalkboard, and computer science felt like typing gibberish into a
              black screen.
            </p>
          </div>
        </div>
      </section>
      <section className="relative w-full flex justify-center md:space-x-4 flex-col md:flex-row items-center md:space-y-0 space-y-4">
        <Link href={"/farm-to-table"}>
          <button className="bg-[#9da57f] hover:bg-[#b0bf75] active:bg-[#2b6651] px-[50px] py-1 text-white -translate-y-1/2 lg:-translate-y-[150%] ">
            Our Farm-to-Table Processes
          </button>
        </Link>
        <Link href={"/sustainability"}>
          <button className="bg-[#1e5541] hover:bg-[#2a7d5f] active:bg-[#2b6651] px-[50px] py-1 text-white -translate-y-1/2 lg:-translate-y-[150%] ">
            Our Sustainable Processes
          </button>
        </Link>
      </section>

      <section className="py-16 relative overflow-visible overflow-x-clip">
        <Image
          src={leaves4}
          alt=""
          className="absolute inset-0 rotate-45 w-[300px] lg:block hidden z-50 -translate-x-[5%] xl:translate-y-0 -translate-y-[50%]"
        />
        <div className="relative flex flex-col w-full text-center bg-[var(--background)] mb-6">
          <h3 className="pointer-events-none select-none absolute right-0 top-0 font-mistrully text-[#a38060] text-[9rem] lg:text-[11rem] leading-none opacity-25 w-full text-center hidden lg:block">
            Our Community
          </h3>
          <h2 className="text-[#755d48] font-dm text-6xl md:text-[6rem] leading-none">
            Our Community
          </h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="h-[100px] overflow-hidden flex items-center">
            <Image src={fiveStars} className="w-[300px]" alt="" />
          </div>{" "}
        </div>
        <DraggableCarousel className={"mt-4 mb-8"}>
          <Review author={"Jake He, Certified Fattie"}>
            It&apos;s why we can send emails in milliseconds and why stars
            appear to twinkle in the night sky. It&apos;s how we turn lines of
            code into self-driving cars, how we turn questions into answers, and
            answers into even bigger questions. And that&apos;s the best part:
            the chase.
          </Review>
          <Review author={"Jake He, Certified Fattie"}>
            It&apos;s why we can send emails in milliseconds and why stars
            appear to twinkle in the night sky. It&apos;s how we turn lines of
            code into self-driving cars, how we turn questions into answers, and
            answers into even bigger questions. And that&apos;s the best part:
            the chase.
          </Review>
          <Review author={"Jake He, Certified Fattie"}>
            It&apos;s why we can send emails in milliseconds and why stars
            appear to twinkle in the night sky. It&apos;s how we turn lines of
            code into self-driving cars, how we turn questions into answers, and
            answers into even bigger questions. And that&apos;s the best part:
            the chase.
          </Review>
          <Review author={"Jake He, Certified Fattie"}>
            It&apos;s why we can send emails in milliseconds and why stars
            appear to twinkle in the night sky. It&apos;s how we turn lines of
            code into self-driving cars, how we turn questions into answers, and
            answers into even bigger questions. And that&apos;s the best part:
            the chase.
          </Review>
        </DraggableCarousel>{" "}
        <div className="w-full flex justify-center items-center flex-col mt-12">
          <p className="text-center w-[95vw] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-1/2">
            Beyond providing high quality vegetarian and vegan food, we also
            love interacting with our community! Our blog contains some more
            insight about vegetarianism and veganism. We also share some amazing
            vegan and vegetarian recipes, as well as vegetarian lifestyle
            information. Consider checking it out!
          </p>
          <Link href={"/community"}>
            <button className="text-white px-16 bg-[#e29953] mt-5 mb-8">
              Community Engagement
            </button>
          </Link>
        </div>
        <Image
          src={leaves5}
          alt=""
          className="absolute bottom-0 right-0 w-[400px] translate-x-1/2 lg:block hidden"
        />
        <Image
          src={pumpkin}
          alt=""
          className="absolute bottom-[250px] left-0 w-[500px] -translate-x-1/2 xl:-translate-x-[20%] lg:block hidden"
        />
      </section>
      <section className="overflow-hidden">
        <ClickToChange />
      </section>
    </main>
  );
}

function Review({ children, author = "", className }) {
  return (
    <div className="w-screen h-fit flex justify-center relative flex-shrink-0 pb-12">
      <div className="text-center w-[95vw] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-1/2 text-[#03402a]">
        {children}
      </div>
      <p className="text-base text-[#9da57f] absolute bottom-0 left-1/2 -translate-x-1/2">
        {author}
      </p>
    </div>
  );
}

function OurStorySection({}) {
  return (
    <section className={"relative h-max pt-[1px] pb-[10vh] overflow-x-clip"}>
      <div className={"absolute w-screen h-[10%]"}>
        <div
          className={
            "relative w-screen h-[100%] flex justify-center items-center"
          }
        >
          <Image
            src={tajMahal}
            alt={"fancy line to indicate next section"}
            className={
              "h-auto w-[60%] md:w-[25%] absolute top-[-6.5vh] md:top-[-6vh] xl:top[-10vh] xl:top-[-9vh]"
            }
          />
        </div>
      </div>

      <div
        className={
          "bg-white w-[96%] md:w-[90%] h-max mx-[2%] md:ml-[5%] mt-[7%]"
        }
      >
        {/*Desktop Version*/}
        <div className={"hidden lg:block pb-[15vh] relative"}>
          <div className={"p-[2%] px-[4%] h-max flex flex-row"}>
            <div className={"w-1/2 relative"}>
              <h1
                className={
                  "text-7xl 2xl:text-8xl text-green-900 font-extrabold"
                }
              >
                Our Story
              </h1>
              <h1
                className={
                  "absolute w-[70vw] top-[-25%] xl:top-[-30%] left-[-25%] xl:left-[-20%] font-mistrully opacity-15 text-[10rem] lg:text-[12rem] 2xl:text-[14rem] pointer-events-none select-none text-clip text-green-900"
                }
              >
                Our Story
              </h1>
              <p className={"pt-[5%] pb-[15%] w-[90%] leading-8"}>
                Founded in 1999, we at Craftroots have been trying our absolute
                hardest to provide the best service possible. From our
                founders&apos; humble beginnings of working in South Indian
                textiles and Chinese manufacturing industries to their
                immigration to the United States, we now look to serve nothing
                but the best, using nothing but the freshest ingredients and
                most talented chefs.
              </p>

              <Link href={"/our-story"} className={"absolute bottom-0 left-0"}>
                <button className="bg-[#d0b577] hover:bg-[#d4b161] py-2 px-8 text-black text-md md:text-lg">
                  Our Story
                </button>
              </Link>
              <Link
                href={"/reference"}
                className={"absolute bottom-0 w-[400px] lg:pl-[160px] xl:pl-[160px] 2x:pl-[175px] katherine-triangle-clip-path"}
              >
                <button className="bg-[#9da57f] hover:bg-[#b0bf75] py-2 px-4 pr-20 text-black text-md md:text-lg">
                  References
                </button>
              </Link>
            </div>

            <div className={"w-1/2 justify-center items-center relative"}>
              <div
                className={
                  "relative w-full h-full flex flex-row justify-center items-center"
                }
              >
                <div className={"flex h-[min(50vh,100%)]"}>
                  <Image
                    src={ourStoryImage0}
                    alt={"Image of table with food"}
                    className={
                      "object-cover object-center katherine-weird-border-rounding-web-dev-sucks-im-tilted-as-you-can-tell-screw-this-lmao-verbose-but-not-as-verbose-as-java"
                    }
                  />
                </div>
                <Image
                  src={ourStoryImage1}
                  alt={"Plate with food"}
                  className={
                    "w-[50%] top-[min(45vh,90%)] xl:top-[min(35vh,70%)] left-[30vh] lg:left-[34vh] xl:left-[37vh] h-auto absolute z-10"
                  }
                />
              </div>
            </div>
          </div>

          <Image
            src={
              katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter
            }
            alt={"leafImage"}
            className={
              "absolute bottom-[-25%] left-[-7vw] w-[20%] h-auto rotate-[35deg] pointer-events-none"
            }
          />
        </div>

        {/*Mobile Version*/}
        <div className={"lg:hidden p-[2%] mt-[10vh] h-max flex flex-col"}>
          <div className={"p-[2%] px-[1%] h-max flex flex-col"}>
            <div className={"w-full relative"}>
              <div
                className={
                  "relative w-full h-full flex flex-row justify-center items-center"
                }
              >
                <div className={"flex h-[min(50vh,100%)]"}>
                  <Image
                    src={ourStoryImage0}
                    alt={"Image of table with food"}
                    className={
                      "object-cover object-center katherine-weird-border-rounding-web-dev-sucks-im-tilted-as-you-can-tell-screw-this-lmao-verbose-but-not-as-verbose-as-java"
                    }
                  />
                </div>
                <Image
                  src={ourStoryImage1}
                  alt={"Plate with food"}
                  className={
                    "w-[50%] top-[60%] left-[50%] h-auto absolute z-10"
                  }
                />
              </div>
            </div>

            <div className={"w-full relative"}>
              <h1 className={"text-7xl text-green-900 font-black pt-[7%]"}>
                Our
                <br /> {/*Crimes being commited here. oh well. */}
                Story
              </h1>
              <h1
                className={
                  "absolute h-[25%] w-[100vw] top-[5%] left-[-5%] pt-[2%] leading-snug font-mistrully opacity-20 text-[5.5rem] pointer-events-none text-clip text-green-900 overflow-x-hidden"
                }
              >
                Our Story
              </h1>
              <p className={"pt-[5%] pb-[45%] leading-8"}>
                Founded in 1999, we at Craftroots have been trying our absolute
                hardest to provide the best service possible. From our
                founders&apos; humble beginnings of working in South Indian
                textiles and Chinese manufacturing industries to their
                immigration to the United States, we now look to serve nothing
                but the best, using nothing but the freshest ingredients and
                most talented chefs.
                {/*Image being here is the most consistent way to get it to line up*/}
                <Image
                  src={
                    katherinesDumbLeafThatSheReallyWantedAndImReallyTiltedRnINeedToHopOffWebDevScrewWebDevCppIsBetter
                  }
                  alt={"Image of leafs"}
                  className={
                    "absolute bottom-[-13%] left-[-12vw] w-[50%] h-auto rotate-[35deg]"
                  }
                />
              </p>

              <Link
                href={"/our-story"}
                className={"absolute bottom-[12%] left-0"}
              >
                <button className="bg-[#d0b577] hover:bg-[#d4b161] py-1 px-4 pr-6 text-black text-md">
                  Our Story
                </button>
              </Link>
              <Link
                href={"/reference"}
                className={
                  "absolute bottom-[12%] left-[clamp(130px,40%,140px)] katherine-triangle-clip-path"
                }
              >
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

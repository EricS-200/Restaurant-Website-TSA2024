import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ParallaxBanner from "@/components/SimpleParallaxBanner";
import AnimatedNumber from "@/components/AnimatedNumber";
import MouseMoveParallax from "@/components/MouseMoveParallax";
import StyledText from "@/components/StyledText";

import MenuPreview from "@/components/MenuPreview";

// import homeBanner from "@/public/placeholders/home-banner.jpg"; //placeholder

import logoImage from "/public/logo.png";
import GoldenImages from "@/components/GoldenImages";
import seperator1 from "@/public/home/seperator1.png";
import droplets1 from "@/public/home/droplets1.png";
import droplets2 from "@/public/home/droplets2.png";
import leaves1 from "@/public/home/leaves1.png";
import leaves2 from "@/public/home/leaves2.png";
import fog from "@/public/home/fog.png";

export default function Home() {
  return (
    <main className="">
      <ParallaxBanner className="overflow-hidden" speed={0.5}>
        <div className="h-screen">
          <video
            className=" inset-0 w-screen h-[112vh] object-cover object-center -translate-y-[50px]"
            src="/home/background.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <MouseMoveParallax
          translate={{
            default: { hidden: true },
            lg: { x: "50%", y: "5%", hidden: false },
            xl: { x: "40%", y: "3%" },
            xxl: { x: "30%", y: "0%" },
          }}
          className="lg:block hidden absolute right-0 bottom-0  h-full"
        >
          <Image src={droplets1} alt="water droplets (1)" />
        </MouseMoveParallax>

        <MouseMoveParallax
          translate={{
            default: { hidden: true },
            lg: { x: "-50%", y: "7%", hidden: false },
            xl: { x: "-40%", y: "10%" },
            xxl: { x: "-30%", y: "0%" },
          }}
          className="lg:block hidden absolute left-0 bottom-0 h-full lg:h-[90%] "
        >
          <Image src={droplets2} alt="water droplets (2)" />
        </MouseMoveParallax>

        <MouseMoveParallax
          sensitivity={50}
          translate={{
            default: { hidden: true },
            lg: { x: "-40%", y: "-15%", hidden: false },
            xl: { x: "-40%", y: "-15%" },
            xxl: { x: "-30%", y: "-20%" },
          }}
          className={
            "lg:block hidden absolute left-0 top-0 lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
          }
        >
          <Image src={leaves1} alt="leaves (1)" />
        </MouseMoveParallax>

        <MouseMoveParallax
          sensitivity={50}
          translate={{
            default: { hidden: true },
            lg: { x: "25%", y: "15%", hidden: false },
            xl: { x: "25%", y: "15%" },
            xxl: { x: "25%", y: "15%" },
          }}
          className={
            "lg:block hidden absolute right-0 bottom-0 lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
          }
        >
          <Image src={leaves2} alt="leaves (2)" />
        </MouseMoveParallax>

        <Image src={fog} className="w-screen absolute inset-0" alt="fog" />
        <div className="w-full h-screen flex flex-col items-center justify-center text-white absolute inset-0 space-y-2">
          <h1 className="font-seasons text-7xl text-transparent bg-clip-text bg-white">
            Craftroots
          </h1>
          <StyledText
            className="font-kenao text-4xl sm:text-7xl md:text-8xl lg:text-9xl sm:-translate-y-[20%] text-center"
            charClassName="transition-all hover:scale-[1.05]"
          >
            Feast on Fresh
          </StyledText>
          {/* <h1 className="font-kenao text-4xl sm:text-7xl md:text-8xl lg:text-9xl sm:-translate-y-[20%] text-center">
            Feast on Fresh
          </h1> */}
          <Image
            src={seperator1}
            alt="decorated seperator"
            className="w-[700px]"
          />
          <h2 className="font-2xl w-[650px] max-w-[95vw] text-center">
            Healthy, high end vegetarian & vegan dishes sourced from authentic
            farms all across the world
          </h2>
          <Link href={"/order"}>
            <button className="bg-[#d0b577] hover:bg-[#d1c19c] active:bg-[#c6ba9d] py-1 px-8 mt-3 text-black">
              Reserve & Order
            </button>
          </Link>
        </div>
      </ParallaxBanner>

      <section className="w-full flex flex-col items-center py-8 pb-12  space-y-4 relative overflow-hidden">
        <GoldenImages />

        <h2 className="text-8xl font-bold uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300">
          Our Story
        </h2>
        <p className="center-text">
          We began with a simple passion: creating a kinder, healthier, and more
          sustainable world through food. Inspired by the beauty of plant-based
          living, we set out to craft delicious vegan recipes and products that
          nourish both body and planet. What started as a small idea has
          blossomed into a thriving community dedicated to celebrating the power
          of plants, innovation, and compassion. Together, we&apos;re rewriting
          the story of food—one plant-based bite at a time.
        </p>
        <p className="center-text">
          Founded in 1999, we at Craftroots have been trying our absolute
          hardest to provide the best service possible. From our founders&apos;
          humble beginnings of working in South Indian textiles and Chinese
          manufacturing industries to their immigration to the United States, we
          now look to serve nothing but the best, using nothing but the freshest
          ingredients and most talented chefs.
        </p>
        <Link href="/our-story">
          <Button transparent={false}>Learn More</Button>
        </Link>
      </section>

      <MenuPreview />

      <section
        className={"bg-white w-full flex flex-col items-center justify-center"}
      >
        <div
          className={
            "flex flex-row w-full justify-between items-center bg-white"
          }
        >
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

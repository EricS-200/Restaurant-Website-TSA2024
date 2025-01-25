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
import leaves4 from "@/public/home/leaves4.png";
import leaves5 from "@/public/home/leaves5.png";
import lettuce from "@/public/home/lettuce.png";
import tomatos from "@/public/home/tomatos.png";
import lemon from "@/public/home/lemon.png";
import mushroom from "@/public/home/mushroom.png";
import mushroom2 from "@/public/home/mushroom-outline.png";
import parsley from "@/public/home/parsley.png";

export default function Home() {
  return (
    <main className="">
      <HomePageBanner />
      <section className="w-full flex flex-col items-center py-8 pb-12  space-y-4 relative overflow-hidden">
        <GoldenImages />

        <h2 className=" text-8xl font-bold uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300">
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

      <section className="pt-16 relative overflow-visible">
        <Image
          src={leaves4}
          alt=""
          className="absolute inset-0 rotate-45 w-[300px] lg:block hidden z-50 -translate-x-[5%] xl:translate-y-0 -translate-y-[50%]"
        />
        <div className="relative flex flex-col w-full text-center bg-[var(--background)]">
          <h3 className="pointer-events-none select-none absolute right-0 top-0 font-mistrully text-[#9da57f] text-[9rem] lg:text-[11rem] leading-none opacity-25 w-full text-center hidden lg:block">
            Our Community
          </h3>
          <h2 className="text-[#1e5541] font-dm text-6xl md:text-[6rem] leading-none">
            Our Community
          </h2>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ParallaxBanner from "@/components/SimpleParallaxBanner";
import HorizontalScroll from "@/components/HorizontalScroll";

import homeBanner from "@/public/placeholders/home-banner.jpg"; //placeholder

import goldenLeaves from "@/public/golden-leaves1.png";
import goldenVegetable1 from "@/public/golden-vegetable1.png";
import goldenVegetable2 from "@/public/golden-vegetable2.png";

import entree1 from "@/public/menu/entree1.png";
import entree2 from "@/public/menu/entree2.png";
import entree3 from "@/public/menu/entree3.png";
import entree4 from "@/public/menu/entree4.png";
import special1 from "@/public/menu/special1.png";
import special2 from "@/public/menu/special2.png";
import special3 from "@/public/menu/special3.png";

export default function Home() {
  return (
    <main className="">
      <ParallaxBanner
        speed={0.5}
        className="h-[50vh] lg:h-[75vh] "
        src={homeBanner}
      >
        <div className="absolute inset-0 w-full h-full bg-black/20">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 h-full flex-col items-center justify-center w-full flex">
            <h1 className="text-6xl sm:text-8xl text-center font-bold ">
              CraftRoots
            </h1>
            <h2 className="text-center text-4xl font-semibold">
              Vegetarian Asian Cuisine
            </h2>
          </div>
        </div>
      </ParallaxBanner>

      <section className="w-full flex flex-col items-center py-8 space-y-4 relative overflow-hidden bg">
        {/* Positioning may be broken for extremly large screens; check */}
        <Image
          alt="golden leaves 1"
          src={goldenLeaves}
          className="hidden lg:block absolute bottom-0 left-0 lg:-translate-y-[150px] xl:translate-y-0 lg:max-w-[23vw] rotate-[330deg] scale-x-[-1] 2xl:translate-y-[50px]"
        />
        <Image
          alt="golden vegetable 1"
          src={goldenVegetable1}
          className="hidden lg:block absolute rotate-[150deg] lg:left-5 lg:top-5 lg:translate-y-20 xl:translate-y-0 xl:left-10 xl:top-10 lg:max-w-[250px] xl:max-w-[350px] "
        />
        <Image
          alt="golden vegetable 2"
          src={goldenVegetable2}
          className="hidden lg:block absolute rotate-[-80deg] right-0 translate-x-[100px] max-w-[40vw] lg:translate-y-[150px] xl:translate-y-0"
        />

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
          humble beginnings of working in South Indian textile factories to
          their immigration to the United States, we now look to serve nothing
          but the best, using nothing but the freshest ingredients and most
          talented chefs.
        </p>
        <Link href="/our-story">
          <Button transparent={false}>Learn More</Button>
        </Link>
      </section>

      <HorizontalScroll
        scrollTime={5}
        className="bg-white"
        header={
          <h2 className="text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r bg-amber-500 text-center">
            Featured Dishes{" "}
          </h2>
        }
        footer={
          <Link href="/menu">
            <Button>Our Full Menu</Button>
          </Link>
        }
      >
        <Image alt="" placeholder="blur" src={entree1} className="w-[500px]" />
        <Image alt="" placeholder="blur" src={entree2} className="w-[500px]" />
        <Image alt="" placeholder="blur" src={entree3} className="w-[500px]" />
        <Image alt="" placeholder="blur" src={entree4} className="w-[500px]" />
        <Image alt="" placeholder="blur" src={special1} className="w-[500px]" />
        <Image alt="" placeholder="blur" src={special1} className="w-[500px]" />
        <Image alt="" placeholder="blur" src={special2} className="w-[500px]" />
        <Image alt="" placeholder="blur" src={special3} className="w-[500px]" />
      </HorizontalScroll>
    </main>
  );
}

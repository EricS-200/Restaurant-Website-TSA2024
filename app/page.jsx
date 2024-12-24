import Image from "next/image";
import HorizontalScroll from "@/components/HorizontalScroll";
import food from "@/public/placeholders/Vegetarian-Food-Bowl.jpg";
import ParallaxBanner from "@/components/SimpleParallaxBanner";

export default function Home() {
  return (
    <main className="">
      <ParallaxBanner />

      <section className="bg-gray-200 w-full flex flex-col items-center">
        <h2 className="text-6xl font-bold uppercase">Our Story</h2>
        <p>
          Learn about the benefits and applications of wind & turbine-based
          energy in our rapidly changing world.
        </p>
      </section>
    </main>
  );
}

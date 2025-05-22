import image14 from "@/public/sustainability/14.png";
import image15 from "@/public/sustainability/15.png";
import image16 from "@/public/sustainability/16.png";
import image17 from "@/public/sustainability/17.png";
import image18 from "@/public/sustainability/18.png";
import image19 from "@/public/sustainability/19.png";
import image20 from "@/public/sustainability/20.png";
import image21 from "@/public/sustainability/21.png";
import image22 from "@/public/sustainability/22.png";
import image23 from "@/public/sustainability/23.png";
import image24 from "@/public/sustainability/24.png";
import image25 from "@/public/sustainability/25.png";
import image26 from "@/public/sustainability/26.png";
import image27 from "@/public/sustainability/27.png";
import image28 from "@/public/sustainability/28.png";

import Image from "next/image";
import Link from "next/link";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function sustainability() {
  return (
    <main className="">
      <ScrollIndicator/>
      <section className="w-full h-screen flex relative overflow-clip">
        <div className="w-1/2 h-full bg-[#36685d]"></div>
        <div className="w-1/2 h-full bg-[#e29953]"></div>
        <div className="absolute inset-0 w-full h-full z-50 scale-[1.1]">
          <Image
            src={image28}
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl sm:text-7xl md:text-9xl text-center font-dm">
            Sustainability in our Food
          </div>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="flex-1 relative">
          <Image src={image14} alt="" className="w-full h-auto" />
          <p className="absolute left-1/2 -translate-x-1/2 bottom-[10%] lg:bottom-[20%] font-kenao text-[#1e5541] text-2xl md:text-4xl">
            Recycling
          </p>
        </div>
        <div className="flex-1 relative">
          <Image src={image15} alt="" className="w-full h-auto" />
          <p className="absolute left-1/2 -translate-x-1/2 bottom-[10%] lg:bottom-[20%] font-kenao text-[#cfb53b] text-2xl md:text-4xl">
            Sustainability
          </p>
        </div>
        <div className="flex-1 relative">
          <Image src={image16} alt="" className="w-full h-auto" />
          <p className="absolute left-1/2 -translate-x-1/2 bottom-[10%] lg:bottom-[20%] font-kenao text-[#262626] text-2xl md:text-4xl">
            Farming
          </p>
        </div>
      </section>
      <section className="w-full h-[100vh] relative">
        <div className="relative w-full h-full">
          <Image
            fill
            src={image18}
            alt=""
            className="object-right object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black to-transparent"></div>
        <div className="flex flex-col absolute right-0 top-1/2 -translate-y-1/2 text-white max-w-[500px] text-right w-[95%] mr-4 sm:mr-[100px]">
          <h2 className="font-seasons text-6xl">Community</h2>
          <p className="mb-2">
            At Craftroots, we believe that great food starts at the source.
            That&apos;s why we partner with local farmers who share our
            commitment to sustainability, quality, and ethical growing
            practices. By sourcing fresh, organic, and seasonal ingredients, we
            not only ensure that our dishes are bursting with flavor but also
            support a food system that prioritizes environmental responsibility.
          </p>
          <p>
            When you dine at Craftroots, you&apos;re not just enjoying
            plant-based meals; you&apos;re investing in a movement that values
            fresh, locally grown food and a thriving, sustainable future for our
            communities. Together, we can create a food system that nourishes
            both people and the planet, one delicious bite at a time.
          </p>
        </div>
      </section>
      <section className="overflow-x-clip">
        <div className="flex flex-col lg:flex-row py-[100px] justify-center items-center -mb-[100px]">
          <Image
            src={image21}
            alt=""
            className="w-[80%] lg:w-1/2 self-start relative z-50"
          />
          <div className="w-full my-[50px] lg:w-1/2 relative flex items-center justify-center">
            <Image src={image19} alt="" className="absolute lg:scale-[1.5]" />
            <p className="text-center relative text-[#1e5541] font-bold w-[80%] text-2xl">
              At Craftroots, we believe in reducing pollution and embracing
              solar energy to protect our planet and the plants that sustain us.
              Pollution harms soil and air quality, but renewable energy helps
              farms grow fresh, vibrant crops with less environmental impact.
            </p>
          </div>
        </div>

        <div className="flex py-[100px] flex-col lg:flex-row justify-center items-center ">
          <div className="w-full lg:w-1/2 relative flex items-center justify-center order-2 lg:order-1">
            <Image src={image19} alt="" className="absolute lg:scale-[1.7]" />
            <p className="text-center relative text-[#1e5541] font-bold w-[80%] text-2xl">
              Deforestation threatens ecosystems, depletes soil, and accelerates
              climate change. But at Craftroots, we believe in a better way. By
              choosing plant-based ingredients from sustainable farms, we reduce
              the demand for deforestation-driven agriculture and promote
              reforestation efforts. Healthy forests purify our air, protect
              biodiversity, and create rich soil for future crops.
            </p>
          </div>
          <Image
            src={image20}
            alt=""
            className="w-[80%] self-end lg:w-1/2 order-1 lg:order-2 relative z-50"
          />
        </div>
      </section>
      <section className="mt-[px] md:mt-[150px] lg:mt-[0px] flex px-[50px] overflow-x-clip pb-[100px] lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <Image
            src={image25}
            alt=""
            className="max-w-[400px] hidden lg:block"
          />
          <p className="text-xl leading-loose text-center lg:text-left ">
            Sustainability isn&apos;t just a choice, it&apos;s a commitment to
            protecting the earth for future generations. By reducing waste,
            conserving resources, and supporting eco-friendly farming, we help
            restore soil health, protect clean water, and reduce carbon
            emissions. Every meal we serve is a step toward a healthier planet.
            Because when we care for the earth, it provides for us in return.
          </p>
        </div>
        <div>
          <Image src={image26} alt="" className="w-full lg:translate-x-[20%]" />
        </div>
      </section>
      <section className="-mb-[100px]">
        <Image src={image27} className="w-full -translate-y-[100px]" alt="" />
      </section>
    </main>
  );
}

import ParallaxBanner from "@/components/SimpleParallaxBanner";
import Link from "next/link";
import Image from "next/image";

import image1 from "@/public/about/1.png";
import image2 from "@/public/about/2.png";
import image3 from "@/public/about/3.png";
import image4 from "@/public/about/4.png";
import image5 from "@/public/about/5.png";
import image6 from "@/public/about/6.png";
import image7 from "@/public/about/7.png";
import image8 from "@/public/about/8.png";
import image9 from "@/public/about/9.png";
import image10 from "@/public/about/10.png";
import image11 from "@/public/about/11.png";
import image12 from "@/public/about/12.png";
import image13 from "@/public/about/13.png";
import image14 from "@/public/about/14.png";
import image15 from "@/public/about/15.png";
import image16 from "@/public/about/16.png";

export default function about() {
  return (
    <main className="relative text-xl leading-loose flex flex-col items-center overflow-x-clip">
      <section className="relative w-full h-[100vh]">
        <Image
          src={image1}
          alt=""
          className="object-top object-cover h-full w-full"
          fill
        />
        <div className="w-full h-full absolute inset-0 bg-black/15 "></div>
        <h1 className="w-full text-center absolute left-1/2 top-1/2 text-white text-9xl lg:text-[10rem] font-dm -translate-x-1/2 -translate-y-1/2 z-50">
          About Us
        </h1>
      </section>
      <section className="my-8  relative">
        <div className="text-center relative bg-white py-6">
          <h3 className="text-nowrap hidden md:block text-[#de7008] font-mistrully opacity-30 text-[10rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] select-none pointer-events-none">
            Our Story
          </h3>
          <h2 className="text-[#d17217] text-8xl font-dm">Our Story</h2>
        </div>
        <div className="flex justify-center items-center mt-6">
          <div className="flex flex-col lg:flex-row lg:space-x-8 px-8 xl:w-2/3 items-center">
            <Image src={image2} alt="" className="" />
            <p className="w-full sm:w-[80%] text-center lg:text-left text-xl leading-loose">
              Craftroots provides a connection between people, not machines,
              through every step of the way. From vegetables hand-picked and
              transported by local farmers to the same vegetables being stocked
              & tracked by our pantry chef, to the same vegetables being
              prepared expertly by our chefs,
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white mx-4 lg:mx-14 my-4 p-4 lg:p-16">
        <div className="relative">
          <h3 className="inset-0 text-center lg:text-left -translate-y-full -translate-x-[5%] text-nowrap hidden md:block text-[#fddc5c] font-mistrully opacity-50 text-[9rem] absolute select-none pointer-events-none">
            Our Mission
          </h3>
          <h2 className="text-[#cfb53b] text-7xl font-dm relative text-center lg:text-left">
            Our Mission
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-4 ">
          <p className="lg:w-1/2 text-xl mt-4 leading-loose text-center lg:text-left">
            Craftroots provides a connection between people, not machines,
            through every step of the way. From vegetables hand-picked and
            transported by local farmers to the same vegetables being stocked &
            tracked by our pantry chef, to the same vegetables being prepared
            expertly by our chefs,
          </p>
          <div className="lg:w-1/2 h-full flex items-center justify-center">
            <Image src={image15} alt="" className="lg:max-w-[600px]" />
            <Image
              src={image16}
              alt=""
              className="absolute right-0 w-[500px] -translate-y-[30%] hidden lg:block"
            />
          </div>
        </div>
      </section>
      <section className="lg:p-8 2xl:w-[90%] lg:mx-4 space-y-8">
        <div className="relative my-4 lg:w-2/3 ml-auto">
          <h3 className="text-center inset-0 -translate-y-full text-nowrap hidden md:block text-[#2c8748] font-mistrully opacity-30 text-[9rem] absolute select-none pointer-events-none">
            Our Goals
          </h3>
          <h2 className="text-[#1e5541] text-7xl font-dm relative text-center">
            Our Goals
          </h2>
        </div>

        <div className="w-full flex flex-col lg:flex-row relative">
          <div className="basis-1/3 flex items-center justify-center order-2 lg:order-1 my-4 lg:my-0">
            <Image src={image6} className="" alt="" />
          </div>
          <div className="basis-2/3 space-y-5 flex flex-col justify-center items-center order-1 lg:order-2">
            <h4 className="text-center font-kenao text-7xl text-[#2c8748]">
              Goal I
            </h4>
            <p className="text-center max-w-[90%]">
              Craftroots provides a connection between people, not machines,
              through every step of the way. From vegetables hand-picked and
              transported by local farmers to the same vegetables being stocked
              & tracked by our pantry chef, to the same vegetables being
              prepared expertly by our chefs,
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row relative">
          <div className="basis-1/3 flex items-center justify-center order-2 lg:order-1 my-4 lg:my-0">
            <Image src={image7} className="" alt="" />
          </div>
          <div className="basis-2/3 space-y-5 flex flex-col justify-center items-center order-1 lg:order-2">
            <h4 className="text-center font-kenao text-7xl text-[#2c8748]">
              Goal II
            </h4>
            <p className="text-center max-w-[90%]">
              Craftroots provides a connection between people, not machines,
              through every step of the way. From vegetables hand-picked and
              transported by local farmers to the same vegetables being stocked
              & tracked by our pantry chef, to the same vegetables being
              prepared expertly by our chefs,
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row relative">
          <div className="basis-1/3 flex items-center justify-center order-2 lg:order-1 my-4 lg:my-0">
            <Image src={image8} className="" alt="" />
          </div>
          <div className="basis-2/3 space-y-5 flex flex-col justify-center items-center order-1 lg:order-2">
            <h4 className="text-center font-kenao text-7xl text-[#2c8748]">
              Goal III
            </h4>
            <p className="text-center max-w-[90%]">
              Craftroots provides a connection between people, not machines,
              through every step of the way. From vegetables hand-picked and
              transported by local farmers to the same vegetables being stocked
              & tracked by our pantry chef, to the same vegetables being
              prepared expertly by our chefs,
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row relative">
          <div className="basis-1/3 flex items-center justify-center order-2 lg:order-1 my-4 lg:my-0">
            <Image src={image9} className="" alt="" />
          </div>
          <div className="basis-2/3 space-y-5 flex flex-col justify-center items-center order-1 lg:order-2">
            <h4 className="text-center font-kenao text-7xl text-[#2c8748]">
              Goal IV
            </h4>
            <p className="text-center max-w-[90%]">
              Craftroots provides a connection between people, not machines,
              through every step of the way. From vegetables hand-picked and
              transported by local farmers to the same vegetables being stocked
              & tracked by our pantry chef, to the same vegetables being
              prepared expertly by our chefs,
            </p>
          </div>
        </div>
      </section>
      <div className="w-full h-48 bg-repeat-x bg-[url('/about/10.png')] bg-[length:auto_100%]"></div>
    </main>
  );
}

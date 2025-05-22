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
import ScrollIndicator from "@/components/ScrollIndicator";

export default function about() {
  return (
    <main className="relative text-xl leading-loose flex flex-col items-center overflow-x-clip">
      <ScrollIndicator/>
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
      <section className="my-8 relative">
        <Image
          src={image3}
          alt=""
          className="absolute left-0 top-[100px] max-w-[300px] md:block hidden"
        />
        <Image
          alt=""
          className="absolute bottom-0 right-[30%] 2xl:right-[40%] translate-y-[20%] lg:block hidden"
          src={image5}
        />
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
              We take care to celebrate the farmers that work hard to provide
              the highest quality food to serve our customers. Sourced from
              natural grown farms all across the world, we ensure our
              ingredients are not only fresh, but delicious.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white mx-4 lg:mx-14 my-4 p-4 lg:p-16 relative">
        <div className="relative">
          <h3 className="inset-0 text-center lg:text-left -translate-y-full -translate-x-[5%] text-nowrap hidden md:block text-[#fddc5c] font-mistrully opacity-50 text-[9rem] absolute select-none pointer-events-none">
            Our Mission
          </h3>
          <h2 className="text-[#cfb53b] text-7xl font-dm relative text-center lg:text-left">
            Our Mission
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-4 ">
          <div className="lg:w-1/2 text-xl mt-4 leading-loose text-center lg:text-left">
            <p className="mb-4">
              We are a passionate collective of food lovers, chefs, and
              sustainability advocates brought together by one shared belief:
              that plant-based food should never be boring. Our restaurant was
              born from a dream to reinvent traditional Pan-Asian cuisine
              through a vibrant, vegan lens, where bold flavors, seasonal
              ingredients, and innovative techniques come together in every
              bite.
            </p>
            <p>
              Our mission is to bring flavorful, plant-powered Pan-Asian cuisine
              to the table while supporting local farmers, reducing our
              environmental impact, and promoting a more compassionate way of
              eating. We believe in food that nourishes the body, respects the
              planet, and celebrates culture.
            </p>
          </div>
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
      <section className="lg:p-8 2xl:w-[90%] lg:mx-4 space-y-8 relative">
        <Image
          src={image14}
          alt=""
          className="absolute left-0 top-0 max-w-[300px] 2xl:max-w-[400px] 2xl:-translate-x-[70px] -translate-y-[30%] hidden lg:block"
        />
        <div className="relative my-4 lg:w-2/3 ml-auto">
          <h3 className="text-center inset-0 -translate-y-full text-nowrap hidden md:block text-[#2c8748] font-mistrully opacity-30 text-[9rem] absolute select-none pointer-events-none">
            Our Goals
          </h3>
          <h2 className="text-[#1e5541] text-7xl font-dm relative text-center">
            Our Goals
          </h2>
        </div>

        <div className="w-full flex flex-col lg:flex-row relative">
          <Image
            src={image11}
            alt=""
            className="absolute right-0 top-0 translate-x-[60%] 2xl:translate-x-[80px] -translate-y-[30px] hidden lg:block"
          />
          <div className="basis-1/3 flex items-center justify-center order-2 lg:order-1 my-4 lg:my-0">
            <Image src={image6} className="" alt="" />
          </div>
          <div className="basis-2/3 space-y-5 flex flex-col justify-center items-center order-1 lg:order-2">
            <h4 className="text-center font-kenao text-7xl text-[#2c8748]">
              I. Elevate Veganism
            </h4>
            <p className="text-center max-w-[90%]">
              We collaborate with chefs and culinary innovators to reinvent
              traditional Asian recipes using creative plant-based alternatives,
              offering guests a dining experience that is both nostalgic and
              new.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row relative">
          <Image
            src={image12}
            className="absolute bottom-0 translate-y-1/2 -translate-x-1/2 right-0 xl:block hidden"
            alt=""
          />
          <Image
            alt=""
            src={image13}
            className="absolute translate-y-1/2 -translate-x-[10%] bottom-0 left-0 lg:block hidden"
          />
          <div className="basis-1/3 flex items-center justify-center order-2 lg:order-1 my-4 lg:my-0">
            <Image src={image7} className="" alt="" />
          </div>
          <div className="basis-2/3 space-y-5 flex flex-col justify-center items-center order-1 lg:order-2">
            <h4 className="text-center font-kenao text-7xl text-[#2c8748]">
              II. Support Local Farmers
            </h4>
            <p className="text-center max-w-[90%]">
              We source the majority of our fresh produce and key ingredients
              from local farms within a 100-mile radius, fostering strong
              community partnerships and reducing food miles.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row relative">
          <div className="basis-1/3 flex items-center justify-center order-2 lg:order-1 my-4 lg:my-0">
            <Image src={image8} className="" alt="" />
          </div>
          <div className="basis-2/3 space-y-5 flex flex-col justify-center items-center order-1 lg:order-2">
            <h4 className="text-center font-kenao text-7xl text-[#2c8748]">
              III. Promote Sustainability
            </h4>
            <p className="text-center max-w-[90%]">
              From compostable takeout packaging to minimizing food waste in our
              kitchen, we&apos;ve built sustainability into the core of our
              operations. We also offer incentives for guests who bring reusable
              containers.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row relative">
          <div className="basis-1/3 flex items-center justify-center order-2 lg:order-1 my-4 lg:my-0">
            <Image src={image9} className="" alt="" />
          </div>
          <div className="basis-2/3 space-y-5 flex flex-col justify-center items-center order-1 lg:order-2">
            <h4 className="text-center font-kenao text-7xl text-[#2c8748]">
              IV. Build a Community
            </h4>
            <p className="text-center max-w-[90%]">
              Through cooking workshops, community dinners, and educational
              events, we&apos;re creating a space where everyone can connect,
              learn, and share their love for plant-based food.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full h-48 bg-repeat-x bg-[url('/about/10.png')] bg-[length:auto_100%]"></div>
    </main>
  );
}

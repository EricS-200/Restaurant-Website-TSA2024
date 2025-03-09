import image1 from "@/public/preparation/1.png";
import image2 from "@/public/preparation/2.png";
import image3 from "@/public/preparation/3.png";
import image4 from "@/public/preparation/4.png";
import image5 from "@/public/preparation/5.png";
import image6 from "@/public/preparation/6.png";
import image7 from "@/public/preparation/7.png";
import image8 from "@/public/preparation/8.png";
import image9 from "@/public/preparation/9.png";
import image10 from "@/public/preparation/10.png";
import image11 from "@/public/preparation/11.png";
import image12 from "@/public/preparation/12.png";
import image13 from "@/public/preparation/13.png";
import image14 from "@/public/preparation/14.png";
import image15 from "@/public/preparation/15.png";
import image16 from "@/public/preparation/16.png";
import image17 from "@/public/preparation/17.png";
import image18 from "@/public/preparation/18.png";
import image19 from "@/public/preparation/19.png";
import image20 from "@/public/preparation/20.png";
import image21 from "@/public/preparation/21.png";
import image22 from "@/public/preparation/22.png";
import image23 from "@/public/preparation/23.png";
import image24 from "@/public/preparation/24.png";
import image25 from "@/public/preparation/25.png";
import image26 from "@/public/preparation/26.png";
import image27 from "@/public/preparation/27.png";
import image28 from "@/public/preparation/28.png";
import image29 from "@/public/preparation/29.png";
import image30 from "@/public/preparation/30.png";
import image31 from "@/public/preparation/31.png";
import image32 from "@/public/preparation/32.png";
import image33 from "@/public/preparation/33.png";
import image34 from "@/public/preparation/34.png";
import image35 from "@/public/preparation/35.png";
import image36 from "@/public/preparation/36.png";
import image37 from "@/public/preparation/37.png";
import shadow from "@/public/preparation/shadow.png";
import wood from "@/public/preparation/wood.jpg";

import ParallaxBanner from "@/components/SimpleParallaxBanner.jsx";
import Image from "next/image";
import Link from "next/link";

export default function preparation() {
  return (
    <main className="overflow-x-clip">
      <ParallaxBanner speed={0.5}>
        <section className="relative h-screen overflow-x-clip">
          <Image
            src={image2}
            alt=""
            className="object-cover object-center"
            fill
          />
          <Image
            src={image1}
            alt=""
            className="absolute inset-0 w-[800px] lg:block hidden -translate-x-[30%] -translate-y-[30%]"
          />
          <Image
            src={image4}
            alt=""
            className="absolute bottom-0 right-0 w-[800px] lg:block hidden translate-x-[40%] translate-y-[30%]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center w-full">
            <h1 className="font-kenao text-7xl lg:text-9xl">Preparation</h1>
            <div className="sm:w-3/4 w-[95%] md:w-1/2 flex flex-col items-center">
              <Image alt="" src={image3} className="mt-4 mb-1 w-3/4" />
              <p className="text-center md:w-[70%]">
                Curabitur varius, ex eget tempus interdum, elit arcu fermentum
                odio, in scelerisque nunc erat nec nunc. Vestibulum dignissim
                justo non lectus tristique, ac luctus odio molestie. Aenean ut
                erat in turpis
              </p>
              <div className="flex md:flex-row flex-col md:space-y-0 space-y-4 md:space-x-8 mt-4">
                <Link href={"/sustainability"}>
                  <button className="px-8 py-1 border-white border-2 hover:bg-gray-100/20 active:bg-gray-200/20 ">
                    Sustainability
                  </button>
                </Link>
                <Link href={"/farm-to-table"}>
                  <button className="px-8 py-1 bg-[#de7008] hover:bg-[#e1842b] active:bg-[#d17217]">
                    Farm to Table
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ParallaxBanner>
      <section className="p-[20px] md:p-[50px] relative z-10 ">
        <div className="bg-white w-full h-full p-[20px] md:px-[50px] md:py-[60px] relative">
          <Image
            src={image5}
            alt=""
            className="absolute bottom-0 right-0  xl:translate-y-[30%] translate-x-[30%] hidden xl:block xl:w-[700px] 2xl:w-1/2"
          />
          <div className=" xl:w-[60%]">
            <div className="relative mt-4 mb-8">
              <h3 className="hidden md:block absolute text-[11rem] inset-0 text-[#9da57f] opacity-30 -translate-y-full font-mistrully select-none pointer-events-none">
                Preparation
              </h3>
              <h2 className="font-dm text-6xl md:text-8xl text-[#03402a] relative ">
                Preparation
              </h2>
            </div>
            <p className="text-xl leading-loose">
              Add a little bit of body text Through this environment, I&apos;ve
              found my own passion: electrical engineering and neuroscience. To
              me, they represent a bridge between what I&apos;ve inherited and
              what I aspire to create. Like my family, I want to explore the
              unknown, but I also want to shape a world where science works as
              hard for us as we do for it. Still, I&apos;ve learned something in
              my small town: the real magic of science lies in the people.
            </p>
            <p className="text-xl leading-loose mt-2">
              Add a little bit of body text Through this environment, I&apos;ve
              found my own passion: electrical engineering and neuroscience. To
              me, they represent a bridge between what I&apos;ve inherited and
              what I aspire to create. Like my family, I want to explore the
              unknown, but I also want to shape a world where science works as
              hard for us as we do for it. Still, I&apos;ve learned something in
              my small town: the real magic of science lies in the people
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center md:mb-[150px] pt-[80px] z-50">
        <Image
          src={image14}
          alt=""
          className="absolute w-full scale-125 bottom-0 xl:translate-y-1/2 translate-y-[60%] "
        />
        <Image
          src={image6}
          alt=""
          className="absolute inset-0 hidden lg:block"
        />
        <Image
          src={image11}
          alt=""
          className="absolute right-0 hidden lg:block -translate-y-1/2"
        />
        <Image
          src={image12}
          alt=""
          className="absolute bottom-0 left-0 hidden lg:block"
        />
        <Image
          src={image13}
          alt=""
          className="absolute bottom-0 right-0 hidden lg:block"
        />
        <Image
          src={image9}
          alt=""
          className="w-full scale-[1.4] sm:scale-100 lg:w-full xl:w-[70%]  absolute"
        />
        <div className="flex flex-col items-center justify-center">
          <Image src={image7} alt="" className=" w-[100px] lg:w-[150px]" />
          <Image
            src={image10}
            alt=""
            className=" w-[200px] sm:w-[300px] md:w-[400px] 2xl:w-[550px] "
          />
          <div className="w-full flex items-center flex-col space-y-4">
            <h3 className="text-[#1e5541] text-3xl md:text-4xl 2xl:text-6xl font-seasons text-center w-[80%] sm:w-1/2 lg:w-1/3">
              Learn More About How We Make Our Food
            </h3>
            <p className="text-[#de7008] text-center leading-normal xl:leading-loose text-base xl:text-xl w-[80%] sm:w-1/2 lg:w-1/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              aliquet, justo in efficitur bibendum, ligula felis sollicitudin
              urna, at tincidunt magna nunc at nulla.
            </p>
          </div>
        </div>
      </section>
      <section className="text-white w-full relative py-[100px]">
        <Image
          src={wood}
          alt=""
          className="absolute inset-0 w-full -z-50"
          fill
        />
        <div className="relative w-full">
          <div className="w-full flex md:flex-row flex-col items-center">
            <Image
              src={image16}
              alt=""
              className="absolute left-[20%] translate-y-1/3 hidden lg:block"
            />
            <Image
              src={image15}
              alt=""
              className="lg:w-1/2 relative self-start"
            />
            <div className="text-center relative flex-1 flex justify-center -translate-y-1/3 md:translate-y-0">
              <p className="lg:w-1/2 w-[95%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquet, justo in efficitur bibendum, ligula felis sollicitudin
                urna, at tincidunt magna nunc at nulla. Suspendisse potenti.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center lg:-translate-y-1/4 md:flex-row flex-col">
            <div className="text-center relative flex-1 flex justify-center order-2 md:order-1 -translate-y-[20%] md:translate-y-0">
              <p className="lg:w-1/2 w-[95%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquet, justo in efficitur bibendum, ligula felis sollicitudin
                urna, at tincidunt magna nunc at nulla. Suspendisse potenti.
              </p>
            </div>
            <Image
              src={image17}
              alt=""
              className="md:w-1/2 relative translate-x-[15%] -translate-y-[10%] flex-0 order-1 md:order-2 self-end"
            />
          </div>
          <div className="w-full flex items-center lg:-translate-y-1/2 md:flex-row flex-col z-50">
            <Image
              src={image19}
              alt=""
              className="absolute left-[15%] w-[700px] hidden lg:block"
            />
            <Image
              src={image18}
              alt=""
              className="md:w-[55%] -translate-x-[11%] relative flex-none self-start"
            />
            <div className="text-center relative flex-1 flex justify-center -translate-y-1/3 md:translate-y-0">
              <p className="lg:w-1/2 w-[95%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquet, justo in efficitur bibendum, ligula felis sollicitudin
                urna, at tincidunt magna nunc at nulla. Suspendisse potenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center z-10 my-[100px] xl:my-0">
        <Image
          src={image14}
          alt=""
          className=" w-full scale-125 -translate-y-2/3 sm:-translate-y-[55%]"
        />
        <Image
          src={image24}
          alt=""
          className="absolute top-0 lg:top-[100px] left-0 w-full hidden 2xl:block"
        />
        <Image
          src={image20}
          alt=""
          className="absolute inset-0 w-full scale-[1.2] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={image21}
          alt=""
          className="absolute top-0 right-0 w-[1000px] translate-x-[20%] hidden 2xl:block "
        />
        <Image
          src={image23}
          alt=""
          className="absolute top-[500px] left-[350px] w-[800px] hidden 2xl:block "
        />
        <Image
          src={image22}
          alt=""
          className="absolute top-[400px] left-0 w-[1100px] -translate-x-[25%] hidden 2xl:block "
        />
        <Image
          src={image25}
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-[10%] -translate-y-[10%] hidden 2xl:block "
        />
      </section>
      <section className="md:px-[50px] pb-[50px] w-full -translate-y-[300px] sm:-translate-y-[500px] lg:-translate-y-[700px] 2xl:-translate-y-[200px] -mb-[200px] sm:-mb-[400px] lg:-mb-[600px] 2xl:-mb-[150px] z-10 relative">
        <div className="relative px-4 sm:ml-4">
          <h3 className="absolute font-mistrully text-[13rem] left-0 top-1/2 -translate-y-1/2 text-[#d95204] opacity-[.25] hidden md:block">
            Sourcing
          </h3>
          <h2 className="relative font-dm text-7xl  md:text-9xl text-[#de7008]">
            Sourcing
          </h2>
        </div>
        <div className="w-full relative flex justify-center md:justify-normal">
          <p className="text-center w-[95%] md:w-[85%] xl:w-[60%] mt-4 text-xl leading-loose ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquet, justo in efficitur bibendum, ligula felis sollicitudin
            urna, at tincidunt magna nunc at nulla. Suspendisse potenti. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
            justo in efficitur bibendum, ligula felis sollicitudin urna, at
            tincidunt magna nunc at nulla. Suspendisse potenti.
          </p>
          <Image
            src={image27}
            alt=""
            className="absolute right-0 w-[600px] -translate-y-[20%] translate-x-[10%] xl:block hidden"
          />
          <Image
            src={image26}
            alt=""
            className="absolute right-0 translate-x-[39%] w-[500px] 2xl:w-[700px] top-0 -translate-y-[90%] hidden md:block"
          />
        </div>
        <div className="relative md:space-y-0 space-y-8">
          <Image
            src={image31}
            alt=""
            className="absolute left-1/2 -translate-x-1/2 top-[12%] h-1/2 md:block hidden"
          />
          <div className="flex w-full relative md:flex-row flex-col items-center">
            <Image
              src={image29}
              alt=""
              className="absolute left-0 bottom-0 w-[450px] translate-y-[15%] -translate-x-[10%] hidden lg:block"
            />
            <Image
              src={image30}
              alt=""
              className="absolute right-0 top-0 -translate-y-[15%] md:bottom-0 md:translate-y-1/2 translate-x-[30%] sm:block hidden md:hidden lg:block"
            />
            <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center items-center">
              <Image src={image28} alt="" className="" />
            </div>
            <div className="w-[95%] sm:w-[80%] md:w-1/2 flex justify-center items-center ">
              <p className="text-center w-full md:w-[70%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquet, justo in efficitur bibendum, ligula felis sollicitudin
                urna, at tincidunt magna nunc at nulla. Suspendisse potenti.
              </p>
            </div>
          </div>
          <div className="flex w-full relative md:flex-row flex-col items-center">
            <Image
              src={image33}
              alt=""
              className="absolute right-0 bottom-0 translate-y-1/2 -translate-x-[10%] hidden lg:block"
            />
            <div className="w-[95%] sm:w-[80%] md:w-1/2 flex justify-center items-center order-2 md:order-1">
              <p className="text-center w-full md:w-[70%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquet, justo in efficitur bibendum, ligula felis sollicitudin
                urna, at tincidunt magna nunc at nulla. Suspendisse potenti.
              </p>
            </div>
            <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center items-center  order-1 md:order-2">
              <Image src={image32} alt="" className="" />
            </div>
          </div>
          <div className="flex w-full relative md:flex-row flex-col items-center">
            <Image
              src={image35}
              alt=""
              className="absolute left-0 bottom-0 md:translate-x-0 -translate-x-[30%] sm:block hidden md:hidden lg:block"
            />
            <Image
              src={image36}
              alt=""
              className="absolute right-0 bottom-0 w-[600px] translate-x-[40%] translate-y-[30%] md:translate-y-[20%] sm:block hidden md:hidden lg:block"
            />
            <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center items-center ">
              <Image src={image34} alt="" className="" />
            </div>
            <div className="w-[95%] sm:w-[80%] md:w-1/2 flex justify-center items-center ">
              <p className="text-center w-full md:w-[70%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquet, justo in efficitur bibendum, ligula felis sollicitudin
                urna, at tincidunt magna nunc at nulla. Suspendisse potenti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

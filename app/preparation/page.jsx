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

import Image from "next/image";
import Link from "next/link";

export default function preparation() {
  return (
    <main className="overflow-x-clip">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center">
          <h1 className="font-kenao text-9xl">Preparation</h1>
          <Image alt="" src={image3} className="mt-4 mb-1 w-3/4" />
          <p className="text-center w-[70%]">
            Curabitur varius, ex eget tempus interdum, elit arcu fermentum odio,
            in scelerisque nunc erat nec nunc. Vestibulum dignissim justo non
            lectus tristique, ac luctus odio molestie. Aenean ut erat in turpis
          </p>
          <div className="flex space-x-8 mt-4">
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
      </section>
      <section className="p-[50px] relative">
        <div className="bg-white w-full h-full px-[50px] py-[60px] relative">
          <Image
            src={image5}
            alt=""
            className="absolute bottom-0 right-0 w-1/2 translate-y-[30%] translate-x-[30%]"
          />
          <div className="w-[60%]">
            <div className="relative mt-4 mb-8">
              <h3 className="absolute text-[11rem] inset-0 text-[#9da57f] opacity-30 -translate-y-full font-mistrully select-none pointer-events-none">
                Preparation
              </h3>
              <h2 className="font-dm text-8xl text-[#03402a] relative ">
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
              Add a little bit of body text Through this environment, I've found
              my own passion: electrical engineering and neuroscience. To me,
              they represent a bridge between what I've inherited and what I
              aspire to create. Like my family, I want to explore the unknown,
              but I also want to shape a world where science works as hard for
              us as we do for it. Still, I've learned something in my small
              town: the real magic of science lies in the people
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center">
        <Image
          src={image14}
          alt=""
          className="absolute w-full scale-125 top-0 translate-y-[15%]"
        />
        <Image src={image6} alt="" className="absolute inset-0" />
        <Image src={image11} alt="" className="absolute right-0" />
        <Image src={image12} alt="" className="absolute bottom-0 left-0" />
        <Image src={image13} alt="" className="absolute bottom-0 right-0" />
        <Image
          src={image9}
          alt=""
          className="w-full sm:w-[90%] lg:w-2/3 relative"
        />
        <Image src={image7} alt="" className="absolute w-[200px] top-[60px]" />
        <Image
          src={image10}
          alt=""
          className="absolute w-[35%] -translate-y-[25%]"
        />
        <div className="w-full flex items-center flex-col space-y-4 -translate-y-[170%]">
          <h3 className="text-[#1e5541] text-6xl font-seasons text-center w-1/3">
            Learn More About How We Make Our Food
          </h3>
          <p className="text-[#de7008] text-center w-1/3 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquet, justo in efficitur bibendum, ligula felis sollicitudin
            urna, at tincidunt magna nunc at nulla.
          </p>
        </div>
      </section>
      <section className="bg-white w-full">
        <div className="relative w-full">
          <div className="w-full flex items-center">
            <Image
              src={image16}
              alt=""
              className="absolute left-[20%] translate-y-1/3"
            />
            <Image src={image15} alt="" className="w-1/2 relative flex-none" />
            <div className="text-center relative flex-1 flex justify-center">
              <p className="w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquet, justo in efficitur bibendum, ligula felis sollicitudin
                urna, at tincidunt magna nunc at nulla. Suspendisse potenti.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center -translate-y-1/4">
            <div className="text-center relative flex-1 flex justify-center">
              <p className="w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquet, justo in efficitur bibendum, ligula felis sollicitudin
                urna, at tincidunt magna nunc at nulla. Suspendisse potenti.
              </p>
            </div>
            <Image
              src={image17}
              alt=""
              className="w-1/2 relative translate-x-[15%] -translate-y-[10%] flex-0"
            />
          </div>
          <div className="w-full flex items-center -translate-y-1/2">
            <Image
              src={image19}
              alt=""
              className="absolute left-[15%] w-[700px]"
            />
            <Image
              src={image18}
              alt=""
              className="w-[55%] -translate-x-[11%] relative flex-none"
            />
            <div className="text-center relative flex-1 flex justify-center">
              <p className="w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquet, justo in efficitur bibendum, ligula felis sollicitudin
                urna, at tincidunt magna nunc at nulla. Suspendisse potenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center">
        <Image
          src={image14}
          alt=""
          className=" w-full scale-125 -translate-y-[55%]"
        />
        <Image
          src={image24}
          alt=""
          className="absolute top-[100px] left-0 w-full "
        />
        <Image
          src={image21}
          alt=""
          className="absolute top-0 right-0 w-[1000px] translate-x-[20%]"
        />
        <Image
          src={image23}
          alt=""
          className="absolute top-[500px] left-[350px] w-[800px] "
        />
        <Image
          src={image22}
          alt=""
          className="absolute top-[400px] left-0 w-[1100px] -translate-x-[25%]"
        />
        <Image
          src={image25}
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </section>
      <section>
        <div className="relative">
          <h3 className="absolute"></h3>
          <h2 className="relative"></h2>
        </div>
      </section>
    </main>
  );
}

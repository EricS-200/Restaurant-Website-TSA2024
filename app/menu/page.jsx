"use client";

import Image from "next/image";
import MenuCard from "@/components/MenuCard";
import {
  GetSideDishes,
  GetAppetizers,
  GetEntrees,
  GetDesserts,
  GetDrinks,
  GetSpecials,
} from "@/app/menu/FoodTypes";

import lettuce from "@/public/home/lettuce.png";
import appetizer2 from "@/public/menu/appetizer2.png";
import leaves1 from "@/public/menu/page/leaves1.png";
import beans from "@/public/menu/page/beans.png";
import tomato from "@/public/menu/page/tomato.png";
import apples from "@/public/menu/page/apples.png";
import potato from "@/public/menu/page/potato.png";
import wood from "@/public/menu/page/wood.png";
import seperator from "@/public/menu/page/seperator.png";

export default function menu() {
  let sideDishes = GetSideDishes();
  let appetizers = GetAppetizers();
  let entrees = GetEntrees();
  let specials = GetSpecials();
  let drinks = GetDrinks();
  let desserts = GetDesserts();

  let allDishes = [];
  allDishes.push(sideDishes);
  allDishes.push(appetizers);
  allDishes.push(entrees);
  allDishes.push(specials);
  allDishes.push(drinks);
  allDishes.push(desserts);

  let foodSectionTitles = [
    "Side Dishes",
    "Appetizers",
    "Entrees",
    "Specials",
    "Drinks",
    "Desserts",
  ];

  return (
    <main className="bg-gradient-to-b from-[#4c5a2b] to-[#64642b] relative ">
      <section className="">
        <div className="relative w-full h-[100vh] flex justify-end overflow-x-clip">
          <div className="absolute inset-0 w-[100vw] z-0">
            <Image
              src={wood}
              className="object-center object-cover"
              fill
              alt=""
              unoptimized
            />
          </div>
          <div className="w-screen h-screen bg-gradient-to-b from-transparent to-[#e5d7b3] absolute inset-0 z-0"></div>
          <Image
            src={apples}
            alt=""
            className="absolute bottom-0 right-0 w-[900px] translate-x-1/3 translate-y-1/2 hidden xl:block"
          />
          <Image
            src={potato}
            alt=""
            className="absolute bottom-0 left-0 w-[900px] translate-y-1/4 md:translate-y-1/2 -translate-x-[10%]"
          />
          <Image
            src={appetizer2}
            alt=""
            className="w-[350px] md:w-[50vw] -translate-x-[20%] -translate-y-[20%] absolute inset-0"
            placeholder="blur"
          />
          <Image
            src={leaves1}
            alt=""
            className="absolute inset-0 w-1/2 -translate-x-[20%] -translate-y-[50%]"
          />
          <Image
            src={tomato}
            alt=""
            className="absolute top-0 right-[20%] -translate-y-1/4 w-[600px] hidden xl:block"
          />
          <Image
            src={beans}
            alt=""
            className="absolute top-0 right-0 w-[300px] md:w-[550px]"
          />
          <div
            className="w-full xl:w-1/2 h-full flex flex-col items-center justify-center text-white xl:pr-[10%]
        "
          >
            <div className="relative w-fit h-fit">
              <h2 className="font-mistrully text-center absolute text-[10rem] sm:text-[12rem] lg:text-[18rem] text-black opacity-25 leading-none sm:block hidden text-nowrap left-1/2 -translate-x-1/2">
                Our Menu
              </h2>
              <h1 className="font-kenao text-white text-[5rem] sm:text-[8rem] lg:text-[11rem] text-center relative md:text-nowrap leading-none">
                Our Menu
              </h1>
            </div>
            <Image
              src={seperator}
              alt=""
              className="-translate-y-1/2 mt-8 md:w-1/2 md:mt-12 xl:w-2/3 xl:mt-10"
            />
            <p className="text-center w-[95%] md:w-3/4 xl:w-2/3 md:text-xl leading-normal -translate-y-[20px]">
              Healthy, modern, high end vegetarian dishes sourced from authentic
              farms all across the world. Enjoy a wide variety of traditional
              vegan dishes from all different cultures.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center absolute lg:translate-y-0 -translate-y-[50%]">
          <div className="relative w-full flex justify-center items-center flex-col">
            <div className="absolute bg-black w-[50px] h-[50px] left-0 translate-x-[20px] sm:translate-x-[40px] lg:left-[10%] lg:translate-x-[15px]"></div>
            <input
              type="text"
              className="w-[95%] lg:w-[80%] pl-[80px] pr-4 py-4 text-2xl font-seasons"
              placeholder="Search for a dish!"
            />
          </div>
          <div className="w-[90%] lg:w-[78%] grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6  mt-4 gap-x-8">
            <button className="bg-[#de7008] py-1 text-center text-white">
              Side Dishes
            </button>
            <button className="bg-[#e29953] py-1 text-center text-white">
              Appetizers
            </button>
            <button className="bg-[#d5b928] py-1 text-center text-white">
              Entrees
            </button>
            <button className="bg-[#d0b577] py-1 text-center text-white">
              Specials
            </button>
            <button className="bg-[#9da57f] py-1 text-center text-white">
              Drinks
            </button>
            <button className="bg-[#1e5541] py-1 text-center text-white">
              Desserts
            </button>
          </div>
        </div>
      </section>

      <section className="p-[5%] pt-[10%]">
        <div className={"gap-x-[2%] flex-wrap gap-y-[3vh]"}>
          {allDishes.map((dishArray, index) => {
            return (
              <div key={index} className={"mb-[10vh]"}>
                <MenuSection
                  key={index}
                  dishArray={dishArray}
                  title={foodSectionTitles[index]}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function FoodTypeBoxes({ name, colorStyle }) {
  return (
    <div
      className={`min-w-fit w-[12%] h-[10%] ${colorStyle} text-center mr-[2%]`}
    >
      {name}
    </div>
  );
}

function FoodSectionFancyTitle({ title }) {
  return (
    <div className={"relative pb-[5%]"}>
      <h1 className={"text-7xl 2xl:text-8xl text-green-900 font-extrabold"}>
        {title}
      </h1>
      <h1
        className={
          "absolute w-[70vw] bottom-[-65%] xl:bottom-[-50%] right-[20vw] xl:right-[25vw] font-mistrully opacity-15 text-[7rem] lg:text-[9rem] 2xl:text-[11rem] pointer-events-none select-none text-clip text-green-900"
        }
      >
        {title}
      </h1>
    </div>
  );
}

function MenuSection({ dishArray, title, index }) {
  let extraShit = <></>;

  if (index === 0) {
    extraShit = (
      <>
        <Image
          src={lettuce}
          alt={"fancy onions"}
          className={"absolute top-0 right-[25vw] w-[25%] h-auto"}
        />
      </>
    );
  }

  return (
    <>
      <FoodSectionFancyTitle title={title} />
      <div
        className={
          "relative flex flex-row flex-wrap justify-center gap-x-[4%] gap-y-[5vh]"
        }
      >
        {extraShit}

        {dishArray.map((dish, index) => {
          return (
            <MenuCard
              key={index}
              name={dish.name}
              vegan={dish.vegan}
              type={dish.type}
              spice={dish.spice}
              description={dish.description}
              src={dish.src}
              price={dish.price}
            />
          );
        })}
      </div>
    </>
  );
}

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
    <main className="bg-gradient-to-b from-[#4c5a2b] to-[#64642b] relative w-full h-full">
      <section className="p-[5%]">
        {/*Search box and filtering boxes*/}
        <div className={"flex justify-center items-center"}>
          <div className={"mb-[5%] w-[100%] lg:w-[80%] h-[30%]"}>
            <div className={"w-[100%] h-[5vh] flex items-center bg-white "}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                viewBox="-0.0 -0.0 134.0 134.1"
                className="fill-[rgb(157,165,127)] w-fit h-[80%] z-10 mx-[1%]"
              >
                <g>
                  <path
                    d="M86.143,98.06l32.845,32.834c3.252,3.251 8.533,3.25 11.785,-0.002c3.251,-3.253 3.25,-8.534 -0.002,-11.786l-32.823,-32.811c6.603,-8.981 10.506,-20.072 10.506,-32.068c0,-29.929 -24.298,-54.227 -54.227,-54.227c-29.929,-0 -54.227,24.298 -54.227,54.227c-0,29.929 24.298,54.227 54.227,54.227c11.927,0 22.959,-3.858 31.916,-10.394Zm-31.916,-81.393c20.73,-0 37.561,16.83 37.561,37.56c-0,20.73 -16.831,37.561 -37.561,37.561c-20.73,-0 -37.56,-16.831 -37.56,-37.561c-0,-20.73 16.83,-37.56 37.56,-37.56Z"
                    className={"fill-inherit"}
                  />
                </g>
              </svg>

              <input
                className={"w-[90%]"}
                placeholder={"Search for a dish"}
              ></input>
            </div>

            <div
              className={
                "flex flex-row py-[2%] w-[100%] justify-center items-center"
              }
            >
              <FoodTypeBoxes name="Side Dishes" colorStyle="bg-red-500" />
              <FoodTypeBoxes
                name="Appetizers"
                colorStyle="bg-[color:#e29953]"
              />
              <FoodTypeBoxes name="Entrees" colorStyle="bg-[color:#d5b928]" />
              <FoodTypeBoxes name="Specials" colorStyle="bg-[color:#d0b577]" />
              <FoodTypeBoxes name="Drinks" colorStyle="bg-[color:#9da57f]" />
              <FoodTypeBoxes name="Desserts" colorStyle="bg-[color:#1e5541]" />
            </div>
          </div>
        </div>

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

function FoodSectionFancyTitle({ title, different }) {
  if (different)
  {
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

  let element = null;

  if (index % 2 === 0)
    element = <FoodSectionFancyTitle title={title} different={false} />
  else
    element = <FoodSectionFancyTitle title={title} different={true} />

  return (
    <>
      {element}
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

/* eslint-disable react/display-name */
"use client";

import React, { useEffect, useState, useRef, memo, useCallback } from "react";

import Image from "next/image";
import MenuCard from "@/components/MenuCard";

import lettuce from "@/public/home/lettuce.png";
import leaves1 from "@/public/menu/page/leaves1.png";
import beans from "@/public/menu/page/beans.png";
import tomato from "@/public/menu/page/tomato.png";
import apples from "@/public/menu/page/apples.png";
import potato from "@/public/menu/page/potato.png";
import wood from "@/public/menu/page/wood.png";
import seperator from "@/public/menu/page/seperator.png";
import searchIcon from "@/public/menu/page/search-icon.svg";

import side1 from "@/public/menu/side1.png";
import side2 from "@/public/menu/side2.png";
import side3 from "@/public/menu/side3.png";
import side4 from "@/public/menu/side4.png";

import entree1 from "@/public/menu/entree1.png";
import entree2 from "@/public/menu/entree2.png";
import entree3 from "@/public/menu/entree3.png";
import entree4 from "@/public/menu/entree4.png";

import appetizer1 from "@/public/menu/appetizer1.png";
import appetizer2 from "@/public/menu/appetizer2.png";
import appetizer3 from "@/public/menu/appetizer3.png";

import special1 from "@/public/menu/special1.png";
import special2 from "@/public/menu/special2.png";
import special3 from "@/public/menu/special3.png";

import MixedBerryFruitTart from "@/public/menu/desserts/Mixed Berry Fruit Tart.png";
import OrganicDarkCacaoCakeSlice from "@/public/menu/desserts/Organic Dark Cacao Cake Slice.png";
import SweetMatchaTofuDelight from "@/public/menu/desserts/Sweet Matcha Tofu Delight.png";
import TropicalBerryDriedYogurt from "@/public/menu/desserts/Tropical Berry Dried Yogurt.png";
import ExoticPassionfruitPannacotta from "@/public/menu/desserts/Exotic Passionfruit Pannacotta.png";
import MangoAndPeachSabo from "@/public/menu/desserts/Mango and Peach Sabo.png";
import LemonLimeMocktail from "@/public/menu/drinks/Lemon Lime Mocktail.png";
import OrangeJuice from "@/public/menu/drinks/Orange Juice.png";
import UrbanGreenMatchaIcedTea from "@/public/menu/drinks/Urban Green Matcha Iced Tea.png";
import EarthHerbMixedBlendSmoothie from "@/public/menu/drinks/Earth Herb Mixed Blend Smoothie.png";
import DivineGrapefruit from "@/public/menu/drinks/Divine Grapefruit.png";
import CocaCola from "@/public/menu/drinks/Coca Cola.png";

const FoodSectionFancyTitle = memo(({ title, different }) => {
  if (different) {
    return (
      <div className="relative py-[5%]">
        <h1 className="text-center sm:absolute sm:top-[-10vh] lg:top-[-7vh] sm:left-0 text-5xl sm:text-9xl lg:text-10xl 2xl:text-11xl text-[#755d48] font-extrabold">
          {title}
        </h1>
        <h1 className="absolute w-[70vw] bottom-[-9vh] sm:bottom-[-2vh] lg:bottom-[-7vh] right-[17.7vw] sm:left-[0] xl:left-[0] font-mistrully opacity-30 text-[7rem] lg:text-[11rem] 2xl:text-[13rem] pointer-events-none select-none text-clip text-[#755d48]">
          {title}
        </h1>
      </div>
    );
  }
  return (
    <div className="relative py-[5%]">
      <h1 className="text-center sm:absolute sm:top-0 sm:right-0 text-5xl sm:text-9xl lg:text-10xl 2xl:text-11xl text-green-900 font-extrabold">
        {title}
      </h1>
      <h1 className="absolute w-[70vw] bottom-[-9vh] sm:bottom-[-7vh] xl:bottom-[-14vh] right-[10vw] sm:right-[-40vw] font-mistrully opacity-30 text-[7rem] lg:text-[11rem] 2xl:text-[13rem] pointer-events-none select-none text-clip text-green-900">
        {title}
      </h1>
    </div>
  );
});

const MenuSection = memo(
  ({
    dishArray,
    title,
    index,
    overlaySwitchFunction,
    setOverlayElement,
    showTitle,
  }) => {
    let extraShit = <></>;

    if (index === 0) {
      extraShit = (
        <Image
          src={lettuce}
          alt="fancy onions"
          className="absolute top-0 right-[25vw] w-[25%] h-auto"
        />
      );
    }

    let element = null;
    if (showTitle) {
      if (index === 0) {
        element = (
          <div className="relative py-[5%]">
            <h1 className="text-center sm:absolute sm:top-0 sm:right-0 text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl text-green-900 font-extrabold">
              {title}
            </h1>
            <h1 className="absolute w-[70vw] bottom-[-9vh] sm:bottom-[-7vh] xl:bottom-[-14vh] right-[10vw] sm:right-[-40vw] xl:right-[-30vw] font-mistrully opacity-30 text-[7rem] lg:text-[9rem] 2xl:text-[11rem] pointer-events-none select-none text-clip text-green-900">
              {title}
            </h1>
          </div>
        );
      } else if (index % 2 === 0) {
        element = <FoodSectionFancyTitle title={title} different={false} />;
      } else {
        element = <FoodSectionFancyTitle title={title} different={true} />;
      }
    }

    return (
      <>
        {element}
        <div className="relative flex flex-row flex-wrap justify-center gap-x-[4%] gap-y-[5vh] mt-[10%] lg:mt-[5%]">
          {extraShit}
          {dishArray.map((dish, dishIndex) => (
            <MenuCard
              key={dishIndex}
              name={dish.name}
              vegan={dish.vegan}
              type={dish.type}
              spice={dish.spice}
              shortDescription={dish.shortDescription}
              description={dish.description}
              src={dish.src}
              price={dish.price}
              display={dish.display}
              overlaySwitchFunction={overlaySwitchFunction}
              setOverlayElement={setOverlayElement}
            />
          ))}
        </div>
      </>
    );
  }
);

export default function Menu() {
  let windowRef = null;
  if (typeof window !== "undefined") {
    windowRef = window;
  }

  const Overlay = memo(({ scrollY, overlayActive, overlayElement }) => {
    return (
      <div
        className={`${
          overlayActive
            ? "absolute top-0 left-0 w-screen h-[200vh] bg-black bg-opacity-50 z-[100]"
            : "hidden"
        }`}
        style={{ top: `${scrollY - windowRef?.innerHeight / 2}px` }}
      >
        {overlayElement}
      </div>
    );
  });

  let sideDishes = GetSideDishes();
  let appetizers = GetAppetizers();
  let entrees = GetEntrees();
  let specials = GetSpecials();
  let drinks = GetDrinks();
  let desserts = GetDesserts();

  const allDishes = [
    sideDishes,
    appetizers,
    entrees,
    specials,
    drinks,
    desserts,
  ];

  const foodSectionTitles = [
    "Side Dishes",
    "Appetizers",
    "Entrees",
    "Specials",
    "Drinks",
    "Desserts",
  ];

  const [overlayActive, setOverlayActive] = useState(false);
  const [overlayElement, setOverlayElement] = useState(<div></div>);
  const [allDishesState, setAllDishesState] = useState(allDishes);
  const [scrollY, setScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const HandleSearch = useCallback(
    (e) => {
      const query = e.target.value.toLowerCase();
      setSearchQuery(query);
      if (query.trim() === "") {
        allDishes.forEach((section) => {
          section.forEach((dish) => {
            dish.display = true;
          });
        });
      } else {
        allDishes.forEach((section) => {
          section.forEach((dish) => {
            dish.display = dish.name.toLowerCase().includes(query);
          });
        });
      }
      setAllDishesState([...allDishes]);
    },
    [allDishes]
  );

  const sectionRefs = useRef([]);
  if (sectionRefs.current.length !== foodSectionTitles.length) {
    sectionRefs.current = foodSectionTitles.map(() => React.createRef());
  }

  const HandleScrollTo = useCallback((index) => {
    sectionRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(document.documentElement.scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOverlay = useCallback(() => {
    setOverlayActive((prev) => !prev);
  }, []);

  const showTitle = !(isMobile && searchQuery.trim() !== "");

  return (
    <main className="bg-gradient-to-b from-[#4c5a2b] to-[#64642b] relative overflow-x-hidden">
      <Overlay
        scrollY={scrollY}
        overlayActive={overlayActive}
        overlayElement={overlayElement}
      />
      <section className="pb-[10vh]">
        <div className="relative w-full h-[100vh] flex justify-end">
          <div className="absolute inset-0 w-[100vw] z-0">
            <Image
              src={wood}
              alt=""
              fill
              className="object-center object-cover"
              unoptimized
            />
          </div>
          <div className="w-screen h-screen bg-gradient-to-b from-transparent to-[#e5d7b3] absolute inset-0 z-0"></div>
          <Image
            src={apples}
            alt=""
            className="absolute bottom-0 right-0 w-[900px] translate-x-1/4 translate-y-1/2 hidden xl:block"
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
          <div className="w-full xl:w-1/2 h-full flex flex-col items-center justify-center text-white xl:pr-[10%]">
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
            <Image
              src={searchIcon}
              alt=""
              className="absolute w-[50px] h-[50px] left-0 translate-x-[20px] sm:translate-x-[40px] lg:left-[10%] lg:translate-x-[15px]"
            />
            <input
              type="text"
              className="w-[95%] lg:w-[80%] pl-[80px] pr-4 py-4 text-2xl font-seasons"
              placeholder="Search for a dish"
              onChange={HandleSearch}
            />
          </div>
          <div className="w-[90%] lg:w-[78%] grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mt-4 gap-x-8">
            {foodSectionTitles.map((title, idx) => (
              <button
                key={idx}
                onClick={() => HandleScrollTo(idx)}
                className={
                  idx === 0
                    ? "bg-[#de7008] py-1 text-center text-white"
                    : idx === 1
                    ? "bg-[#e29953] py-1 text-center text-white"
                    : idx === 2
                    ? "bg-[#d5b928] py-1 text-center text-white"
                    : idx === 3
                    ? "bg-[#d0b577] py-1 text-center text-white"
                    : idx === 4
                    ? "bg-[#9da57f] py-1 text-center text-white"
                    : "bg-[#1e5541] py-1 text-center text-white"
                }
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="p-[5%] pt-[15vh] sm:pt-[30vh]">
        <div className="gap-x-[2%] flex-wrap gap-y-[3vh]">
          {allDishesState.map((dishArray, index) => (
            <div
              key={index}
              ref={sectionRefs.current[index]}
              className="mb-[5vh] sm:mb-[10vh]"
            >
              <MenuSection
                overlaySwitchFunction={toggleOverlay}
                setOverlayElement={setOverlayElement}
                title={foodSectionTitles[index]}
                dishArray={dishArray}
                index={index}
                showTitle={showTitle}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/*
{
  name: "",
  price: -1,
  src: ,
  vegan: ,
  spice: ,
  type: "",
  description: ""
},
*/

function GetSideDishes() {
  return [
    {
      name: "House Salad with Fresh Cherry Tomatoes",
      price: 26,
      src: side1,
      vegan: true,
      spice: 0,
      type: "side",
      description:
        "A crisp medley of romaine and mixed greens tossed with sweet cherry tomatoes, crunchy cucumber slices, and a sprinkle of shredded carrots. Served with your choice of dressing, this salad is a refreshing start or complement to any meal.",
      shortDescription:
        "A crisp salad of romaine and mixed greens with cherry tomatoes, cucumber, and carrots.",
      display: true,
    },
    {
      name: "Roasted Tomato Basil Soup",
      price: 30,
      src: side2,
      vegan: false,
      spice: 0,
      type: "side",
      description:
        "A rich and velvety soup made with slow roasted tomatoes, fresh basil, and a hint of garlic. Finished with a drizzle of cream and olive oil, this comforting classic is served with a sprinkle of freshly cracked black pepper. Perfect for dipping crusty bread or enjoying as a warm starter.",
      shortDescription:
        "A rich, velvety soup of roasted tomatoes, basil, and garlic finished with cream and olive oil.",
      display: true,
    },
    {
      name: "Chilled Green Pea and Dill Soup",
      price: 30,
      src: side3,
      vegan: false,
      spice: 0,
      type: "side",
      description:
        "A creamy and refreshing blend of sweet green peas, fresh dill, and a hint of lemon zest. Served chilled and topped with a drizzle of cream and a sprinkle of cracked black pepper, this soup is a perfect appetizer for warm days or as a light, vibrant starter.",
      shortDescription:
        "A refreshing chilled soup blending green peas, dill, and lemon zest with a creamy finish.",
      display: true,
    },
    {
      name: "Fresh Miracle Cabbage Stir Fry",
      price: 30,
      src: side4,
      vegan: true,
      spice: 2,
      type: "side",
      description:
        "Tender cabbage leaves stir fried to perfection with a hint of smoky wok hei, infused with dried red chilies for a touch of heat. Lightly seasoned with soy sauce and a drizzle of sesame oil, this dish is simple yet irresistibly flavorful. A versatile side that pairs beautifully with any main course.",
      shortDescription:
        "A flavorful stir fry of tender cabbage with smoky wok hei and a touch of heat.",
      display: true,
    },
  ];
}

function GetAppetizers() {
  return [
    {
      name: "Collard Greens Salad with Fried Plantain and Sumac",
      price: 34,
      src: appetizer1,
      vegan: true,
      spice: 0,
      type: "appetizer",
      description:
        "A delightful fusion of earthy collard greens, crispy fried plantains, and tangy sumac for a zesty twist. Tossed with ribbons of fennel, briny olives, and a touch of citrus, this salad offers a perfect balance of sweetness, crunch, and bold flavors. A refreshing and hearty appetizer to awaken your taste buds.",
      shortDescription:
        "A zesty salad combining collard greens, crispy plantains, and tangy sumac.",
      display: true,
    },
    {
      name: "Tangy Balsamic Pasta with Sungold Tomatoes",
      price: 38,
      src: appetizer2,
      vegan: false,
      spice: 0,
      type: "",
      description:
        "A vibrant dish featuring al dente pasta tossed with burst Sungold tomatoes and a drizzle of tangy balsamic glaze. Fresh basil leaves and a hint of garlic round out the flavors, making this appetizer a delightful combination of sweet, tangy, and herbaceous notes. A simple yet elegant start to your meal.",
      shortDescription:
        "A vibrant pasta dish with Sungold tomatoes, tangy balsamic glaze, and fresh basil.",
      display: true,
    },
    {
      name: "Earthy Coconut Braised Mushrooms with Ginger and Scallions",
      price: 38,
      src: appetizer3,
      vegan: true,
      spice: 1,
      type: "appetizer",
      description:
        "A luscious blend of mushrooms simmered in creamy coconut milk, and spiced with a touch of turmeric. Tossed with sweet roasted cherry tomatoes and finished with a scattering of fresh scallions, this dish brings bold, earthy flavors. A rich, satisfying appetizer perfect for sharing or savoring solo.",
      shortDescription:
        "A rich appetizer of mushrooms braised in coconut milk with turmeric, cherry tomatoes, and scallions.",
      display: true,
    },
  ];
}

function GetEntrees() {
  return [
    {
      name: "Smoky Black Bean Tacos with Sweet chopped Salsa",
      price: 52,
      src: entree1,
      vegan: true,
      spice: 2,
      type: "entree",
      description:
        "Warm corn tortillas filled with a hearty mix of smoky black beans, spiced tofu cubes, and fresh pico de gallo. Topped with crunchy shredded cabbage and a hint of lime, these tacos are a perfect blend of zest and flavor, making them a delightful way to kick off your meal.",
      shortDescription:
        "Hearty tacos with smoky black beans, spiced tofu, pico de gallo, and a hint of lime.",
      display: true,
    },
    {
      name: "Vietnamese Bok Choy Pho with Fresh Tofu Sticks and Mushrooms",
      price: 56,
      src: entree2,
      vegan: true,
      spice: 1,
      type: "entree",
      description:
        "A soul soothing bowl of traditional Vietnamese pho with a modern twist. Delicate rice noodles float in a fragrant broth infused with star anise, cinnamon, and ginger. Topped with crisp bok choy, golden fried tofu sticks, and earthy mushrooms, this dish is garnished with fresh herbs, scallions, and a splash of lime.",
      shortDescription:
        "A modern twist on Vietnamese pho with rice noodles, aromatic broth, tofu sticks, mushrooms, and crisp bok choy.",
      display: true,
    },
    {
      name: "Spicy Gochujang Sesame Noodles",
      price: 56,
      src: entree3,
      vegan: true,
      spice: 4,
      type: "entree",
      description:
        "Chewy noodles coated in a rich, spicy gochujang sauce with a nutty sesame twist. Tossed with crispy kale, fresh basil, and a sprinkle of toasted sesame seeds, this dish delivers a fiery kick balanced by earthy and herbaceous flavors. A bold and satisfying choice for spice lovers seeking a vibrant Korean inspired meal.",
      shortDescription:
        "Vibrant noodles in a spicy gochujang sauce with sesame, kale, and basil.",
      display: true,
    },
    {
      name: "Braised Miso Polenta with Spring Vegetables and Tofu",
      price: 60,
      src: entree4,
      vegan: true,
      spice: 1,
      type: "entree",
      description:
        "Creamy polenta infused with savory miso, providing a rich, umami base for this vibrant dish. Topped with tender spring vegetables like asparagus, snow peas, and scallions, alongside golden pan seared tofu and shiitake mushrooms",
      shortDescription:
        "Creamy miso infused polenta topped with spring vegetables, tofu, and shiitake mushrooms.",
      display: true,
    },
  ];
}

function GetSpecials() {
  return [
    {
      name: "Fragrant Charred Kale with Citrus and Green Tahini",
      price: 48,
      src: special1,
      vegan: true,
      spice: 0,
      type: "special",
      description:
        "A vibrant plate of lightly charred kale, complemented by juicy segments of grapefruit and orange for a tangy sweet contrast. Drizzled with creamy green tahini and topped with crispy shallots and toasted sesame seeds, this dish offers a perfect harmony of smoky, citrusy, and nutty flavors. A bold and refreshing creation, ideal for those seeking a unique plant based delight.",
      shortDescription:
        "A vibrant dish of charred kale with tangy citrus segments and creamy green tahini.",
      display: true,
    },
    {
      name: "Creamy Hummus Bowl with Merguez Spiced Tempeh",
      price: 52,
      src: special2,
      vegan: true,
      spice: 2,
      type: "special",
      description:
        "Silky, house made hummus topped with crispy, merguez spiced tempeh crumbles for a smoky, aromatic flair. Garnished with shaved fennel, red onion, and a drizzle of olive oil, this dish offers a harmonious blend of creamy, zesty, and bold flavors. Perfect as a centerpiece for sharing or a hearty indulgence for one.",
      shortDescription:
        "A silky hummus bowl topped with merguez spiced tempeh, fennel, and red onion.",
      display: true,
    },
    {
      name: "Pan Roasted Sweet Potatoes with Crunchy Tempeh",
      price: 48,
      src: special3,
      vegan: true,
      spice: 1,
      type: "special",
      description:
        "Perfectly caramelized sweet potato halves, pan roasted to bring out their natural sweetness, are topped with crispy tempeh crumbles for a satisfying crunch. Finished with fresh apple chunks, a drizzle of maple glaze, and a garnish of fragrant cilantro, this dish offers a harmonious blend of sweet, savory, and tangy flavors. A standout creation that’s as nourishing as it is delicious.",
      shortDescription:
        "Pan roasted sweet potatoes topped with crispy tempeh, apple chunks, and a drizzle of maple glaze.",
      display: true,
    },
  ];
}

function GetDesserts() {
  return [
    {
      name: "Mixed Berry Fruit Tart",
      price: 6.5,
      src: MixedBerryFruitTart,
      vegan: false,
      spice: 0,
      type: "dessert",
      description:
        "A classic French-inspired tart featuring a buttery crust layered with pastry cream and topped with fresh berries (strawberries, blueberries, raspberries). Perfect for a light, fruity finish to any meal.",
      shortDescription: "A buttery tart topped with fresh mixed berries.",
      display: true,
    },
    {
      name: "Organic Dark Cacao Cake Slice",
      price: 7.5,
      src: OrganicDarkCacaoCakeSlice,
      vegan: false,
      spice: 0,
      type: "dessert",
      description:
        "Rich, moist dark chocolate cake made from organic cacao beans, layered with a smooth ganache. Inspired by European patisseries for a decadent, guilt-free indulgence.",
      shortDescription: "A rich slice of organic dark chocolate cake.",
      display: true,
    },
    {
      name: "Sweet Matcha Tofu Delight",
      price: 5.99,
      src: SweetMatchaTofuDelight,
      vegan: true,
      spice: 0,
      type: "dessert",
      description:
        "Silken tofu blended with premium matcha, lightly sweetened for a creamy and refreshing treat. A fusion of Japanese tea culture and plant-based dessert innovation.",
      shortDescription: "A creamy tofu-based dessert infused with matcha.",
      display: true,
    },
    {
      name: "Tropical Berry Dried Yogurt",
      price: 6.99,
      src: TropicalBerryDriedYogurt,
      vegan: false,
      spice: 0,
      type: "dessert",
      description:
        "Tangy yogurt base mixed with tropical fruits like kiwi and pineapple, then gently dehydrated to create a chewy, flavor-packed bite. Inspired by Southeast Asian yogurt snacks.",
      shortDescription:
        "Tangy dried yogurt blended with tropical fruit flavors.",
      display: true,
    },
    {
      name: "Exotic Passionfruit Pannacotta",
      price: 7.99,
      src: ExoticPassionfruitPannacotta,
      vegan: false,
      spice: 0,
      type: "dessert",
      description:
        "An Italian classic pannacotta infused with vibrant passionfruit purée. Smooth and creamy with a tropical twist, it brings together Italian tradition and tropical flair.",
      shortDescription: "Creamy pannacotta with a burst of passionfruit.",
      display: true,
    },
    {
      name: "Mango and Peach Sabo",
      price: 6.0,
      src: MangoAndPeachSabo,
      vegan: false,
      spice: 0,
      type: "dessert",
      description:
        "A refreshing layered dessert of mango purée, peach chunks, and sweet tapioca pearls (sago). Inspired by popular Asian sweet soups, it offers a fruity and chewy delight.",
      shortDescription: "Layered mango-peach dessert with chewy sago pearls.",
      display: true,
    },
  ];
}

function GetDrinks() {
  return [
    {
      name: "Lemon Lime Mocktail",
      price: 4.0,
      src: LemonLimeMocktail,
      vegan: true,
      spice: 0,
      type: "drink",
      description:
        "A zesty and refreshing non-alcoholic blend of fresh lemon and lime juices, lightly sweetened and garnished with mint. Inspired by tropical beach cocktails.",
      shortDescription: "Zesty citrus mocktail with mint garnish.",
      display: true,
    },
    {
      name: "Orange Juice",
      price: 3.5,
      src: OrangeJuice,
      vegan: true,
      spice: 0,
      type: "drink",
      description:
        "Freshly squeezed oranges bursting with natural sweetness and vitamin C. A classic breakfast staple enjoyed worldwide.",
      shortDescription: "Pure, freshly squeezed orange juice.",
      display: true,
    },
    {
      name: "Urban Green Matcha Iced Tea",
      price: 4.5,
      src: UrbanGreenMatchaIcedTea,
      vegan: true,
      spice: 0,
      type: "drink",
      description:
        "A cool, energizing drink made with premium Japanese matcha and chilled water, sweetened lightly. Perfect for matcha lovers seeking a refreshing twist.",
      shortDescription: "Chilled matcha tea with a hint of sweetness.",
      display: true,
    },
    {
      name: "Earth Herb Mixed Blend Smoothie",
      price: 5.0,
      src: EarthHerbMixedBlendSmoothie,
      vegan: true,
      spice: 0,
      type: "drink",
      description:
        "A wholesome smoothie blending spinach, kale, cucumber, and a touch of mint, sweetened naturally with apples. Inspired by healthy green drinks for a daily dose of nutrients.",
      shortDescription: "A vibrant green smoothie with fresh herbs and fruit.",
      display: true,
    },
    {
      name: "Divine Grapefruit",
      price: 4.5,
      src: DivineGrapefruit,
      vegan: true,
      spice: 0,
      type: "drink",
      description:
        "A tangy grapefruit cooler with a hint of sweetener, balanced by a touch of sparkling water. Perfect for a midday citrus boost.",
      shortDescription: "Lightly sweetened sparkling grapefruit refresher.",
      display: true,
    },
    {
      name: "Coca Cola",
      price: 2.5,
      src: CocaCola,
      vegan: true,
      spice: 0,
      type: "drink",
      description:
        "The classic carbonated cola beverage with a secret recipe dating back to the late 19th century. Iconic worldwide for its refreshing taste.",
      shortDescription: "Classic fizzy cola with a timeless flavor.",
      display: true,
    },
  ];
}

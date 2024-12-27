import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

export default function MenuCard({
  name,
  vegan = false,
  type,
  spice = 0,
  description = "",
  src,
  price,
}) {
  return (
    <div className="px-4 pt-4 pb-3 border-2 border-black bg-white rounded-lg flex flex-col items-center justify-center w-64">
      <Image src={src} alt={"Image of" + name} className="" />
      <div className="items-start text-base mb-3">
        <span className="bg-green-600 rounded-xl p-1 px-2">
          {vegan ? "Vegan" : "Vegetarian"}
        </span>
      </div>
      <h4 className="font-bold text-center leading-normal">{name}</h4>
      <p>${price}</p>
      <Button className={"text-base"}>Read More</Button>
    </div>
  );
}

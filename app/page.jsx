import Image from "next/image";
import HorizontalScroll from "@/components/HorizontalScroll";
import food from "@/public/placeholders/Vegetarian-Food-Bowl.jpg";
import ourstorystripped from "@/public/images/our story stripped.png"
export default function Home() {
  return (
      <main className="">
        {
          // our story section, method 1
        }
          <div className="">
              <h1 className="absolute order-last text-9xl pl-10 pt-10">
                  Our Story
                  {
                      // change this to the right font and shit later
                  }
              </h1>
              <Image
                  src={ourstorystripped}
                  alt="its just a png of the section design since everything is static.
            im just lazy"
                  className="">
              </Image>

          </div>
      </main>
  );
}

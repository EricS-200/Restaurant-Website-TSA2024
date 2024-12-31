import SimpleParallaxBanner from "@/components/SimpleParallaxBanner";
import Image from "next/image";
import banner from "@/public/placeholders/wavy-banner.jpg";

export default function Home() {
  return (
    <main className="h-[300vh]">
      <SimpleParallaxBanner
        src={banner}
        className="h-[50vh] xl:h-[65vh]"
        speed={0.5}
      >
        <Image
          src={banner}
          alt=""
          className="object-center object-cover-z-10"
        />
      </SimpleParallaxBanner>
      <div className="w-full h-[1000px] bg-black"></div>
    </main>
  );
}

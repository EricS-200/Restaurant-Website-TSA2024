import SimpleParallaxBanner from "@/components/ParallaxBannerTitle";
import Image from "next/image";
import banner from "@/public/placeholders/wavy-banner.jpg";

export default function Home() {
  return (
    <main className="h-[300vh]">
      <SimpleParallaxBanner
        src={banner}
        className="h-[50vh] xl:h-[65vh]"
        speed={1}
        text="Test"
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

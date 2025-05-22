import Link from "next/link";
import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";
import ParallaxBanner from "@/components/SimpleParallaxBanner";
import banner from "@/public/reservation/1.png";

export default function Reserve() {
  return (
    <main className="overflow-x-clip">
      <section src={banner} className="h-screen w-full relative z-50">
        <Image
          src={banner}
          alt=""
          className="object-center object-cover"
          fill
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white leading-none">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-seasons">
            Make a Reservation
          </h1>
          <Link
            target="_blank"
            href={
              "https://www.google.com/maps/place/Gaylord+Opryland+Resort+%26+Convention+Center/@36.2121024,-86.6949837,18.25z/data=!4m6!3m5!1s0x886469d0b7c096ff:0x3ac9507e8aa057bb!8m2!3d36.2122412!4d-86.6946459!16s%2Fg%2F11b6nrz37g?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D"
            }
          >
            <h2 className="font-kenao underline text-3xl md:text-4xl underline-offset-2">
              2800 Opryland Dr, Nashville, TN
            </h2>
          </Link>
        </div>
      </section>
      <section className="w-full flex justify-center items-center bg-[#e5d7b3]">
        <ReservationForm />
      </section>
    </main>
  );
}

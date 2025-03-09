import SimpleParallaxBanner from "@/components/SimpleParallaxBanner";
import banner from "@/public/placeholders/placeholderblog.png";
import divider from "@/public/preparation/3.png";
import Image from "next/image";
export default function aboutUs()
{
    return  (
        <div>
            <SimpleParallaxBanner className={"relative h-[100vh]"} src={banner} speed={0.5}>
                <div className={"absolute inset-0 content-center justify-items-center"}> 
                    <h1 className={"flex font-seasons text-2xl md:text-4xl lg:text-8xl text-[#ffffff]"}> 
                        About Us 
                    </h1>
                    <Image alt="" src={divider} className="mt-4 mb-1 w-3/4" />
                    <p className="text-center md:w-[70%] text-xl text-white">
                        Who we are, what we do, and why we do it.
                    </p>
                </div>
            </SimpleParallaxBanner>
            <div className={"relative h-[100vh] flex justify-center items-evenly"}>
                <h3 className="absolute font-mistrully text-[13rem] left-0 text-[#03402a] opacity-[.25] hidden md:block">
                    Who We Are
                </h3>
                <h2 className="font-dm right-1/4 translate-y-24 text-6xl md:text-8xl text-[#03402a] relative ">
                    Who We Are
                </h2>
                <div></div>
            </div>
        </div>
    );
}
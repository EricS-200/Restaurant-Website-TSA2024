import SimpleParallaxBanner from "@/components/SimpleParallaxBanner";
import banner from "@/public/placeholders/placeholderblog.png";
import divider from "@/public/preparation/3.png";
import Image from "next/image";
import Link from "next/link";
export default function aboutUs()
{
    return  (
        <div>
            {
                //REPLACE ALL IMAGES
            }
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
            <div className={"flex-col h-[400vh] md:h-[200vh] w-full flex justify-center items-center"}>
                <div className={"flex"}>
                </div>
                <div className={"m-5 bg-white w-[90vw] h-[50vh]"}>
                    <div className={"m-5 h-full flex flex-col md:flex-row"}>
                        <div className={"relative w-1/2 h-full flex-row md:flex-col pr-2"}>
                            <h2 className="p-4 font-dm text-4xl md:text-6xl text-[#03402a]">
                                Who We Are
                            </h2>
                            <p>
                                Craftroots&apos; team is primarily composed of those with Asian heritage,
                                including members from India, China, Iraq, the Phillippines, and more.
                                We are highly committed to sharing our cultural heritage through cuisine,
                                along with adding our own vegetarian and sustainable twist to it.
                            </p>
                            <p>
                                We also partner with a multitude of local farms and businesses to best
                                serve the community as a whole in more ways than one.
                            </p>
                            
                            <Link
                                href="/farm-to-table"
                                target=""
                                locale=""
                                className={"-translate-y-10 text-white absolute left-0 bottom-0 h-[5vh] w-[20vw] content-center text-center bg-[#03402a]"}>
                                    Farm-to-Table
                            </Link>
                        </div>
                        <Image src={banner} objectFit={"fill"} alt="" className="w-1/2 h-full pb-10"/>
                        {
                            // replace this image later.
                        }
                    </div>
                </div>
                <Image alt="" src={divider} className="mt-4 mb-1 w-3/4" />
                <div className={"m-5 bg-white w-[90vw] h-[100vh] md:h-[50vh]"}>
                    <div className={"m-5 h-full flex flex-col md:flex-row"}>
                        
                        <Image src={banner} objectFit={"fill"} alt="" className="w-1/2 h-full pb-10"/>
                        {
                            // replace this image later.
                        }
                        <div className={"relative w-full md:w-1/2 h-1/2 md:h-full pl-4"}>
                            <h2 className="p-4 font-dm text-4xl md:text-6xl text-right text-[#03402a]">
                                What We Do
                            </h2>
                            <p>
                                Here at Craftroots, we take the utmost care and pride in our ingredients.
                                This isn&apos;t just limited to sourcing produce locally -- the way we
                                prepare those ingredients to create something new is just as important.
                            </p>
                            <p>
                                We place great care in our preparation, ensuring that our dishes are
                                not only maximizing the freshness of seasonal produce, but also combining
                                our cultural heritage with the local culture, all while adding our own unique
                                twist to it.
                            </p>
                            
                            <Link
                                href="/preparation"
                                target=""
                                locale=""
                                className={"-translate-y-10 text-white absolute right-0 bottom-0 h-[5vh] w-[20vw] content-center text-center bg-[#03402a]"}>
                                    Preparation
                            </Link>
                        </div>
                    </div>
                </div>
                <Image alt="" src={divider} className="mt-4 mb-1 w-3/4" />
                <div className={"m-5 bg-white w-[90vw] h-[50vh]"}>
                    <div className={"m-5 h-full flex flex-col md:flex-row"}>
                        <div className={"relative w-1/2 h-full pr-2"}>
                            <h2 className="p-4 font-dm text-4xl md:text-6xl text-[#03402a]">
                                Our Mission
                            </h2>
                            <p>
                                Our mission at Craftroots is to benefit not only our customers and
                                business partners, but our local community as a whole. By providing
                                delicious seasonal dishes to our customers, purhcasing in-season produce
                                from local farms, and partnering with other local businesses, we are able
                                to in part provide for the community while also providing for ourselves.
                            </p>
                            <p>
                                We also seek to promote sustainable practices in every step of the way,
                                including solar power, composting, recycled goods, and more. We encourage
                                use, reuse, and recycling in all of our practices.
                            </p>
                            
                            <Link
                                href="/sustainability"
                                target=""
                                locale=""
                                className={"-translate-y-10 text-white absolute left-0 bottom-0 h-[5vh] w-[20vw] content-center text-center bg-[#03402a]"}>
                                    Sustainability
                            </Link>
                        </div>
                        <Image src={banner} objectFit={"fill"} alt="" className="w-1/2 h-full pb-10"/>
                        {
                            // replace this image later.
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
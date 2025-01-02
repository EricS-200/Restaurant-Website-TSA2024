import Image from "next/image";
import banner from "@/public/placeholders/wavy-banner.jpg";
import madeuptimeline from "@/public/images/timeline real.png";
import SimpleParallaxBanner from "@/components/SimpleParallaxBanner";
export default function Home() {
    return(
        <>
        <SimpleParallaxBanner
            src={banner}
            className="h-[50vh] xl:h-[65vh]"
            speed={0}
            priority="true"
        />
        <main className="flex-col pt-32 pb-8 text-slate bg-[#ffffff] pl-10">
            <h1 className="text-center pt-32 pb-8 text-9xl font-bold">
            Our Story
        </h1>
                <div className="flex justify-around">
            
                    <div className="flex-col items-center justify-between w-1/2">
                    {
                        /*<h2 className="text-4xl font-bold pb-8 text-balance">
                            Steal this blurb for the about us page
                        </h2>
                        <p className="text-pretty w-4/5">
                        Founded in 1999, we at Craftroots have been trying our absolute hardest to
                        provide the best service possible. From our founders' humble beginnings
                        of working in South Indian textile factories to their immigration to
                        the United States, we now look to serve nothing but the best, using 
                        nothing but the freshest ingredients and most talented chefs.
                        </p>
                        */
                    }   
                        <h2 className="text-4xl font-bold py-8 pb-8">
                            Our Mission
                        </h2>
                        <p className="text-pretty w-4/5 pb-300">
                        Founded in 1999, Craftroots has maintained one mission: to raise awareness 
                        about sustainable practices while serving nothing but the best. For patrons, 
                        Craftroots aims to provide the best service possible while still being 
                        affordable for anyone. For business partners, Craftroots aims to support the 
                        growth of other small businesses through cooperation, communication, and 
                        dedication. Such dedication has been our doctrine for our now twenty-five 
                        years in operation, and will continue to be for years to come.
                        </p>
                        <h2 className="text-4xl font-bold py-80 pb-8">
                            Our Journey
                        </h2>
                        <p className="text-pretty w-4/5">
                        Starting out as a simple food stand among many others, Eric’s Organic Grill 
                        quickly gained a small but dedicated base of loyal customers. After slowly 
                        growing and taking on a new employee, Eric’s Organic Grill relocated and 
                        founded its first official restaurant in 2010. From there, it was a 
                        tumultuous journey with many hardships. The Organic Grill was forced to 
                        partner with many different local farms before settling on its current 
                        partner, Ravichandran Agricultation Facilities. After relatively low success 
                        for two more years, Eric knew something drastic had to happen -- and so in 2012, 
                        Eric’s Organic Grill was completely rebranded into the Craftroots that we know and 
                        love today. Craftroots experienced a huge boom in success, and quickly adapted to 
                        the rapidly changing circumstances. Nowadays, our dedicated crew of seventeen 
                        employees and our now-successful farm partner are more than ready to carry out 
                        our mission and our founding values.
                        </p>
                    </div>
                    <Image
                    src={madeuptimeline}
                    alt="ts sucks"
                    ></Image>
                </div>
                <div className="flex justify-around">
                    {
                        // decoration image here
                    }

                </div>
            </main></>
    );
}
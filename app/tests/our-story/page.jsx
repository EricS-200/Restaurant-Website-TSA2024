import Image from "next/image";
import timeline from "@/public/placeholders/timelinetimelinetimel.png";

export default function Home() {
    return(
        <><h1 className="text-center pt-32 pb-8 text-9xl font-bold">
            Our Story
        </h1><main className="flex-col pt-32 pb-8 text-slate bg-[#ffffff] pl-10">
                <div className="flex justify-around">
                    <div className="flex-col items-center justify-between w-1/2">
                        <h2 className="text-4xl font-bold pb-8 text-balance">
                            Steal this blurb for the about us page
                        </h2>
                        <p className="text-pretty w-4/5">
                        Founded in 1999, we at Craftroots have been trying our absolute hardest to
                        provide the best service possible. From our founders' humble beginnings
                        of working in South Indian textile factories to their immigration to
                        the United States, we now look to serve nothing but the best, using 
                        nothing but the freshest ingredients and most talented chefs.
                        </p>

                        <h2 className="text-4xl font-bold py-8 pb-8">
                            First Steps
                        </h2>
                        <p className="text-pretty w-4/5">
                        Craftroots was founded not long after Mukhil Rajesh Ravichandran, our founder,
                        immigrated illegally to the United States as a non-citizen. He worked odd jobs,
                        saving money until he was finally able to open his first restaurant in 1999.
                        Grand Leader Ravichandran was able to build this restaurant by himself and his
                        first employee from the ground up, keeping up operations for 3 years before deciding
                        to expand and take on more employees. Since founding, we've always been dedicated to
                        the same local farm -- Eric Su's Motor-Oil-Infused Tomato Plantation.
                        </p>
                    </div>
                    <Image
                    src={timeline}
                    alt="ts sucks"
                    ></Image>
                </div>
            </main></>
    );
}
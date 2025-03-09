import React from 'react';
import communitybanner from '@/public/images/bannerimages/communitybanner.png';
import Image from 'next/image';

export default function community()
{
    return  (
        <>
            <div className="mt-[20vh]">
                <div className="flex p-10 text-2xl font-seasons justify-center">
                <h1 className='text-8xl font-seasons pt-15'>Community</h1>
                </div>
            </div>
            <div>
                <div className="flex relative justify-center items-center">
                    <Image 
                        src={communitybanner} 
                        className="min-w-full"
                        alt="Banner Image of Pollution"
                    />

                    <div className="absolute left-[50vw] xl:left-[55vw] md:top-35vh] lg:top-[40vh] w-[40vw]">
                        <div className="relative">
                            <p className="text-white text-4xl w-[50vw] xl:w-[40vw] lg:text-6xl xl:text-7xl xl:leading-[110px] font-fsp mb-[4%]">
                                How does pollution affect food quality?
                            </p>

                            <p className="text-white text-xl lg:text-2xl font-fsp w-[30vw] mb-[4%]">
                                Aliquam erat volutpat. Ut sed cursus elit, at
                                maximus lectus. Morbi vehicula tincidunt
                                ipsum ut sagittis. In id risus tincidunt,
                                tristique lacus a, euismod nisi
                            </p>

                            <button className="bg-[#9aa473] hover:bg-[#8f9b5e] py-2 px-4 lg:px-8 text-black text-md md:text-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center my-[10%]">
                    <div className="relative">
                        <h1 className={"text-7xl 2xl:text-8xl text-green-900 font-extrabold"}>
                            Our Story
                        </h1>
                        <div className={"absolute top-[-10vh] left-[-10vw] w-[100vw] items-center justify-center"}>
                            <h1 className="font-mistrully opacity-15 text-[8rem] lg:text-[10rem] xl:text-[12rem] pointer-events-none select-none text-clip text-green-900">
                                Our Story
                            </h1>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    );
}
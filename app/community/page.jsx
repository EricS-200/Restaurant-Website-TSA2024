import React from 'react';
import communitybanner from '@/public/images/bannerimages/communitybanner.png';
import Image from 'next/image';

export default function community()
{
    return  (
        <div>
            {
            /*{
                // Header
            }
            <div>
                <div className="flex p-10 text-2xl font-seasons justify-center">
                <h1 className='text-8xl font-seasons pt-15'> Community </h1>
                </div>
            </div> */}
            <div className="flex relative items-evenly justify-center">
                <Image src={communitybanner} alt="Community Banner">
                </Image>
            </div>
        </div>
    );
}
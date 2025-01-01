"use client";

import React from 'react';
import Link from "next/link";
/*
known problem: idk what im doing
icon svgs are all taken from uxwing.com 
*/
export default function IgnoreThis() {
    return(
        <footer className=" bg-slate-900 w-full text-[ffffff] flex-col">
            <div className="flex justify-around text-slate-300 pl-32 py-8">
                <div className="flex-col w-1/4 content-evenly">
                    
                    { // {twitter}
                    }
                    { // wrappin the twitter icon in a div so that i can make it look more even than it really is
                      // by adding a header lol
                    }
                    <div className="flex justify-between text-2xl underline underline-offset-8">
                        <h2>
                            {//Socials
                            }
                            Socials
                        </h2>
                        <svg 
                        className="fill-white stroke-white justify-self-end pr-3"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="30" 
                        height="30" 
                        shape-rendering="geometricPrecision" 
                        text-rendering="geometricPrecision" 
                        image-rendering="optimizeQuality" 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        viewBox="0 0 640 640"
                        >
                            <path d="M640.012 121.513c-23.528 10.524-48.875 17.516-75.343 20.634 27.118-16.24 47.858-41.977 57.756-72.615-25.347 14.988-53.516 25.985-83.363 31.866-24-25.5-58.087-41.35-95.848-41.35-72.508 0-131.21 58.736-131.21 131.198 0 10.228 1.134 20.232 3.355 29.882-109.1-5.528-205.821-57.757-270.57-137.222a131.423 131.423 0 0 0-17.764 66c0 45.497 23.102 85.738 58.347 109.207-21.508-.638-41.74-6.638-59.505-16.359v1.642c0 63.627 45.225 116.718 105.32 128.718-11.008 2.988-22.63 4.642-34.606 4.642-8.48 0-16.654-.874-24.78-2.35 16.783 52.11 65.233 90.095 122.612 91.205-44.989 35.245-101.493 56.233-163.09 56.233-10.63 0-20.988-.65-31.334-1.89 58.229 37.359 127.206 58.997 201.31 58.997 241.42 0 373.552-200.069 373.552-373.54 0-5.764-.13-11.35-.366-16.996 25.642-18.343 47.87-41.493 65.469-67.844l.059-.059z"/>
                        </svg>
                    </div>
                    <svg 
                    className="fill-white stroke-white justify-self-end pr-3"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30" 
                    shape-rendering="geometricPrecision" 
                    text-rendering="geometricPrecision" 
                    image-rendering="optimizeQuality" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    viewBox="0 0 640 640"
                    >
                        <path d="M633.468 192.038s-6.248-44.115-25.477-63.485c-24.366-25.477-51.65-25.642-64.123-27.118-89.493-6.52-223.904-6.52-223.904-6.52h-.236s-134.352 0-223.893 6.52c-12.52 1.523-39.768 1.63-64.123 27.118-19.24 19.37-25.358 63.485-25.358 63.485S-.012 243.806-.012 295.681v48.509c0 51.768 6.366 103.643 6.366 103.643s6.248 44.114 25.358 63.52c24.355 25.477 56.363 24.65 70.655 27.367 51.237 4.89 217.644 6.366 217.644 6.366s134.529-.237 224.022-6.638c12.52-1.477 39.756-1.63 64.123-27.119 19.24-19.37 25.476-63.532 25.476-63.532S640 396.03 640 344.154v-48.508c-.13-51.769-6.497-103.643-6.497-103.643l-.035.035zm-379.8 211.007V223.173L426.56 313.41l-172.892 89.635z"/>
                    </svg>
                </div>
                <div className="flex-col w-1/4 content-evenly">
                    <p className="flex pd-4 items-center mb-1 text-center">
                        <Link
                            target="_blank"
                            href="https://www.twitter.com/methewhenawasnt"
                            className="hover:text-slate-400 hover:underline transition-all delay-100"
                        >
                        Twitter (placeholder)
                        </Link>
                    </p>
                    <p className="flex pd-4 items-center mb-1 text-center">
                        <Link
                            target="_blank"
                            href="https://www.youtube.com/@National_TSA"
                            className="hover:text-slate-400 hover:underline transition-all delay-100"
                        >
                        Youtube
                        </Link>
                    </p>
                </div>
                <div className="flex-col w-1/4 content-evenly">
                    <svg 
                    className='fill-white stroke-white justify-self-end pr-3'
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30"
                    height="30"
                    shape-rendering="geometricPrecision" 
                    text-rendering="geometricPrecision" 
                    image-rendering="optimizeQuality" 
                    fill-rule="evenodd" clip-rule="evenodd" 
                    viewBox="0 0 640 640"
                    >
                        <g fill-rule="nonzero">
                            <path fill="#0000ff" d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"/><path fill="#fff" d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z"/>
                        </g>
                    </svg>
                    <svg 
                    className="justify-self-end pr-3"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30"
                    height="30"
                    shape-rendering="geometricPrecision" 
                    text-rendering="geometricPrecision" 
                    image-rendering="optimizeQuality" 
                    fill-rule="evenodd" clip-rule="evenodd" 
                    viewBox="0 0 640 640">
                        <path fill="#fff" fill-rule="nonzero" d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.483 47.121-.092 85.407 38.03 85.499 85.16.091 47.129-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.091c.141 72.602 59.106 131.327 131.69 131.186 72.592-.141 131.35-59.09 131.209-131.692-.141-72.577-59.114-131.335-131.715-131.194-72.585.141-131.325 59.115-131.184 131.7zm237.104-137.091c.033 16.953 13.817 30.681 30.772 30.648 16.961-.033 30.689-13.811 30.664-30.764-.033-16.954-13.818-30.69-30.78-30.657-16.962.033-30.689 13.818-30.656 30.773zm-208.696 345.4c-24.958-1.087-38.511-5.234-47.543-8.709-11.961-4.629-20.496-10.178-29.479-19.094-8.966-8.95-14.532-17.46-19.202-29.397-3.508-9.032-7.73-22.569-8.9-47.527-1.269-26.982-1.559-35.077-1.683-103.432-.133-68.339.116-76.434 1.294-103.441 1.069-24.942 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.479 8.949-8.982 17.459-14.532 29.403-19.202 9.025-3.525 22.561-7.714 47.511-8.9 26.998-1.277 35.085-1.551 103.423-1.684 68.353-.132 76.448.108 103.456 1.295 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.144 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.412 3.524 9 7.714 22.553 8.892 47.494 1.285 26.999 1.576 35.095 1.7 103.433.132 68.355-.117 76.451-1.302 103.441-1.087 24.958-5.226 38.52-8.709 47.561-4.629 11.952-10.161 20.487-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.559-103.448 1.684-68.338.132-76.424-.125-103.431-1.294zM149.977 1.773c-27.239 1.285-45.843 5.648-62.101 12.018-16.829 6.561-31.095 15.354-45.286 29.604C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.547 1.302 27.231 5.649 45.828 12.019 62.093 6.569 16.83 15.353 31.088 29.611 45.288 14.25 14.201 28.55 22.918 45.404 29.438 16.282 6.295 34.902 10.583 62.15 11.778 27.305 1.203 36.022 1.468 105.521 1.335 69.532-.132 78.25-.439 105.555-1.733 27.239-1.303 45.826-5.665 62.1-12.019 16.829-6.586 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.405 6.304-16.282 10.592-34.903 11.777-62.134 1.195-27.322 1.478-36.048 1.344-105.556-.133-69.516-.447-78.225-1.741-105.523-1.294-27.255-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.079-29.602-45.287-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.305-34.903-10.601-62.15-11.779C333.747.164 325.03-.102 255.506.031c-69.507.133-78.224.431-105.529 1.742z"/>
                    </svg>
                </div>
                <div className="flex-col w-1/4 content-evenly">
                    <p className='flex pd-4 items-center mb-1 text-center text-slate-300'>
                        <Link
                            target="_blank"
                            href="https://www.facebook.com/thekytsa"
                            className="hover:text-slate-400 hover:underline transition-all delay-100"
                        >
                        Facebook
                        </Link>
                    </p>
                    <p className='flex pd-4 items-center mb-1 text-center text-slate-300 pt-0'>
                        <Link
                            target="_blank"
                            href="https://www.instagram.com/ky_tsa"
                            className="hover:text-slate-400 hover:underline transition-all delay-100"
                        >
                        Instagram
                        </Link>
                    </p>
                    </div>
            </div>
        </footer>
    )
}
import Image from "next/image";
import Link from "next/link";
import Citation from "@/components/Citation";

import kytsa from "@/public/kytsa-logo.webp";

export default function Reference() {
  return (
    <main className="bg-white flex flex-col items-center justify-center">
      <section className="flex items-center justify-center md:pt-24 flex-col bg-white">
        <h1 className="text-6xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-800 pb-3">
          Reference Page
        </h1>
        <p className="text-green-600">
          !!!!!!!!!!!!!!!!!!!! CHECK ALL LINKS, CITATIONS, SOFTWARE LISTED -
          PAGE NOT COMPLETED.
        </p>
        <Link
          href={"https://kentuckytsa.org/"}
          target="_blank"
          className="w-full flex justify-center"
        >
          <Image
            src={kytsa}
            alt="KY TSA logo"
            className="w-1/2 lg:w-1/3 xl:w-1/5"
          />
        </Link>
        <h2 className="center-text mt-6">
          This website (CraftRoots) was created for the 2024-2025 Technology
          Student Association Webmaster Competition and is strictly fictional.
          All information, links, and documents required by the competition
          guidelines are provided below.
        </h2>
      </section>

      <section className="bg-white mt-6 w-[95vw] sm:w-3/4 md:w-2/3 lg:w-3/5 text-center">
        <h3 className="font-bold text-3xl">General Information</h3>
        <p>
          The website was coded using Javascript, HTML, and CSS. It is being
          hosted using Vercel Hosting services.
        </p>
        <p>
          The following frameworks and software technologies were used to create
          this website:
        </p>
        <p>NextJS, ReactJS, TailwindCSS, Framer Motion</p>
        <p>
          The entire website, including code and content, was created by our
          team. We did not use any templates or pre-built components
        </p>
        <p>
          All TSA documents, including the Student Copyright Checklist and Work
          Log can be found{" "}
          <Link
            href="/"
            target="_blank"
            className="text-blue-500 hover:underline "
          >
            here
          </Link>
          .
        </p>
        {/* <p>
          Our GitHub repository can be found{" "}
          <Link
            href="/"
            target="_blank"
            className="text-blue-500 hover:underline "
          >
            here
          </Link>
          .
        </p> */}
      </section>

      <section className="bg-white mt-6 w-[95vw] sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 text-center flex flex-col items-center justify-center">
        <h3 className="font-bold text-3xl text-center">Sitemap</h3>
        <p>For ease of access, all pages of this website are listed below:</p>
        <ul className="flex flex-col items-start font-bold">
          <li>
            <Link href="/" className=" hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/our-story" className=" hover:underline">
              Our Story
            </Link>
          </li>
          <li>
            <Link href="/menu" className=" hover:underline">
              Our Menu
            </Link>
          </li>
          <li className="">
            <p className="text-left">About Our Food:</p>
            <ul className="flex flex-col items-start ml-8 font-normal">
              <li>
                <Link href="/farm-to-table" className="   hover:underline">
                  Farm To Table
                </Link>
              </li>
              <li>
                <Link href="/preparation" className="hover:underline">
                  Preparation
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className=" hover:underline">
                  Sustainability
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/community" className="hover:underline">
              Community
            </Link>
          </li>
          <li>
            <Link href="/order" className=" hover:underline">
              Order Now
            </Link>
          </li>
          <li>
            <Link href="/reference" className=" hover:underline">
              Reference
            </Link>
          </li>
        </ul>
      </section>

      <section className="bg-white mt-6 w-[95vw] sm:w-3/4 md:w-2/3 lg:w-3/5 text-center">
        <h3 className="font-bold text-3xl">Media Sources</h3>
        <p>
          All media sources, including images, audios, and videos, are listed
          below (some designs were created by team members ):
        </p>
        <ol type="1" className="list-decimal list-inside">
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="KYTSA"
              sourceLink="https://kentuckytsa.org/"
            />
          </li>
        </ol>
      </section>

      <section className="bg-white mt-6 w-[95vw] sm:w-3/4 md:w-2/3 lg:w-3/5 text-center">
        <h3 className="font-bold text-3xl">Content Sources</h3>
        <p>
          All sources used to gather information about the topic for writing the
          content of the website are listed below:
        </p>
        <ol type="1" className="list-decimal list-inside">
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="a"
              sourceLink="aaaa"
            />
          </li>
        </ol>
      </section>
    </main>
  );
}
